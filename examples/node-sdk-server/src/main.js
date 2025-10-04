import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { streamSSE } from 'hono/streaming';
import { serve } from '@hono/node-server';
import { IRacingSDK } from 'irsdk-node';

import { parseArgs } from 'node:util';

import { createConnection, dispatchSSEMesages } from './server-events.js';
import { getSdkState, close, init, checkSdkSession } from './iracing.js';

const args = parseArgs({
  options: {
    port: {
      short: 'p',
      type: 'string',
    },
    pollRate: {
      short: 'r',
      type: 'string',
      default: `${1 / 15}`, // 15 fps
    },
  },
});

const DATA_POLL_RATE = parseFloat(args.values.pollRate);
const SERVER_PORT = parseInt(args.values.port ?? '4000', 10);

const cache = {
  pollingData: false,
  currDataVersion: -1,
  pollingHandle: null,

  /** @type {import('irsdk-node').SessionData | null} */
  polledSessionData: null,

  /** @type {import('irsdk-node').TelemetryVarList | null} */
  polledTelemetry: null,

  /** @type {import('./server-events').StreamConnection[]} */
  streamConnections: [],
};

const app = new Hono();

// Recursive SDK data polling loop.
//
// While the SDK has internal caching in place, avoid hitting the sdk's
// .waitForData() API too often, as it is a blocking call. A good pattern is to
// maintain only a singular polling loop, therefore if one is already running
// this function does nothing.
function pollDataLoop() {
  console.log('Data polling start');

  if (cache.pollingData) {
    console.log('Poll already started. Ignoring');
    return;
  }

  cache.pollingData = true;

  // Data caching tick.
  //
  // Cache data and then recursively queue another tick as long as we are still
  // polling for data. Realistically this is not resource efficient, and in most
  // cases you would want to offload this to a separate thread or process to
  // avoid blocking the main process where the http server is running.
  const dataTick = () => {
    console.log('Data polling tick');

    const state = getSdkState(DATA_POLL_RATE);
    const staleConnections = dispatchSSEMesages(
      cache.streamConnections,
      state.currDataVersion,
      state.telemetry,
      state.sessionData,
    );

    // Update cache.
    cache.currDataVersion = state.currDataVersion;
    cache.polledSessionData = state.sessionData;
    cache.polledTelemetry = state.telemetry;

    // Clean up stale connections.
    cache.streamConnections = cache.streamConnections.filter(
      (connection) => !staleConnections.includes(connection)
    );

    // Stop polling if all connections have closed.
    if (cache.streamConnections.length < 1) {
      console.log('No more connections active, canceling data polling');
      cache.pollingData = false;
    }

    // Trigger another tick if pollingData is still active after all this.
    if (cache.pollingData) {
      cache.pollingHandle = setTimeout(dataTick, DATA_POLL_RATE);
    }
  };

  // Initialize loop.
  dataTick();
}

function cleanupStreams() {
  for (const connection of cache.streamConnections) {
    connection.closeStream();
  }
  cache.streamConnections.splice(0, cache.streamConnections.length);
}

app.use(logger());

app.get('/health', (ctx) => {
  ctx.status(200);
  return ctx.text('ok');
});

app.get('/', (ctx) => {
  ctx.status(200);

  const sessionStatus = checkSdkSession() ? 'DETECTED' : 'NOT DETECTED';
  const sessionDataStatus = cache.polledSessionData !== null ? 'CACHED' : 'NOT CACHED';
  const telemetryStatus = cache.polledTelemetry !== null ? 'CACHED' : 'NOT CACHED';
  const pollStatus = cache.pollingData ? `ACTIVE (${DATA_POLL_RATE}ms)` : 'NOT ACTIVE';
  const connectionCount = cache.streamConnections.length;

  return ctx.text(
    `iRacing node.js example server\n` +
    `- iRacing session ${sessionStatus}\n` +
    `- Session data ${sessionDataStatus}\n` +
    `- Telemetry data ${telemetryStatus}\n` +
    `- Polling ${pollStatus}\n` +
    `- Active connections ${connectionCount}`
  );
});

app.get('/session', (ctx) => {
  if (!checkSdkSession()) {
    ctx.status(404);
    return ctx.text('iRacing session not detected');
  }

  const sessionData = cache.pollingData
    ? cache.polledSessionData
    : getSdkState(DATA_POLL_RATE).sessionData;
  
  if (!sessionData) {
    ctx.status(404);
    return ctx.text('No session data found');
  }

  return ctx.json({
    ...sessionData,
  });
});

app.get('/telemetry/:varName', (ctx) => {
  if (!checkSdkSession()) {
    ctx.status(404);
    return ctx.text('iRacing session not detected');
  }

  const telemetry = cache.pollingData
    ? cache.polledTelemetry
    : getSdkState(DATA_POLL_RATE).telemetry;

  if (!telemetry) {
    ctx.status(404);
    return ctx.text('No telemetry data found');
  }

  const varName = ctx.req.param('varName');
  const value = telemetry[varName];

  if (!value) {
    ctx.status(404);
    return ctx.text(`Telemetry variable not found ${varName}`);
  }
  
  ctx.status(200);
  return ctx.json(value);
});

app.get('/telemetry', (ctx) => {
  if (!checkSdkSession()) {
    ctx.status(404);
    return ctx.text('iRacing session not detected');
  }

  const telemetry = cache.pollingData
    ? cache.polledTelemetry
    : getSdkState(DATA_POLL_RATE).telemetry;

  if (!telemetry) {
    ctx.status(404);
    return ctx.text('No telemetry data found');
  }

  return ctx.json({
    ...telemetry,
  }); 
});

app.get("/events", (ctx) => {
  return streamSSE(ctx, (stream) => {
    // Once this Promise resolves, the stream will end. It will be automatically
    // resolved if we use the SSEStreamingApi built-in methods though, so we can
    // discard the resolver.
    return new Promise(() => {
      console.log('Creating connection');
      const connection = createConnection(stream);

      cache.streamConnections.push(connection);
      stream.onAbort(() => {
        console.log('Connection aborted');
        const withoutStream = cache.streamConnections.filter((conn) => conn !== connection);
        cache.streamConnections = withoutStream;
      });

      pollDataLoop();
    });
  })
});

const instance = serve({ fetch: app.fetch, port: SERVER_PORT }, (info) => {
  const address = info.address === '::' ? 'http://localhost' : info.address;
  log(`Server running at ${address}:${info.port}`);

  if (!IRacingSDK.IsSimRunning()) {
    console.error('iRacing service not detected. Exiting.');
    process.exit(1);
  }

  init();
  getSdkState();
});

// Graceful shutdown
process.on('SIGINT', () => {
  cleanupStreams();
  instance.close();
  close();

  process.exit(0);
});

process.on('SIGTERM', () => {
  cleanupStreams();
  close();

  instance.close((err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    process.exit(0);
  });
});
