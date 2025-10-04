/**
 * @typedef StreamConnection
 * 
 * State holder for any given stream connection.
 * 
 * @property {import('hono/streaming').SSEStreamingApi} stream
 * @property {() => boolean} isActive
 * @property {(event: Object) => Promise<void>} sendEvent
 * @property {() => Promise<void>} closeStream
 */

/**
 * Helper function for creating an SSE-compat event.
 * 
 * @param {string} event - The event name.
 * @param {any} data - The payload. Will be stringified.
 * @returns {import('hono/streaming').SSEMessage} an SSE event.
 */
function makeServerEvent(event, data) {
  return {
    event,
    data: JSON.stringify(data),
  };
}

/**
 * Dispatches state updates to all active connections, returning a list of the
 * connections no longer active which should be discarded.
 * 
 * @param {StreamConnection[]} connections 
 * @param {number} currentVersion 
 * @param {import('irsdk-node').TelemetryVarList} telemetry 
 * @param {import('irsdk-node').SessionData} sessionData
 * @returns {StreamConnection[]} An array of stale connections to be removed.
 */
export function dispatchSSEMesages(connections, currentVersion, telemetry, sessionData) {
  console.log(`Dispatching SSE events to ${connections.length} connections`);

  // Create events.
  const statusEvent = makeServerEvent('session-status', {
    active: currentVersion !== -1,
  });

  const sessionEvent = makeServerEvent('session-data', sessionData);
  const telemEvent = makeServerEvent('telemetry', telemetry);

  // Dispatch the events to the streams.
  const staleConnections = [];
  const eventStreamCount = connections.length;

  for (let i = 0; i < eventStreamCount; i++) {
    const connection = connections[i];

    // If the stream has closed, mark as stale and skip to next.
    if (connection.stream.aborted || connection.stream.closed) {
      staleConnections.push(connection);
      connection.close(); // Make sure the promise gets resolved.
      console.log(`Marked connection ${i} stale`);
      continue;
    }

    // Dispatch events.
    //
    // If the current data version is -1, there is no session active. Otherwise,
    // there is. Matching the data version against the last version number sent
    // to a given connection enables us to selectively send updates only as they
    // happen, as well as trigger 'now active' / 'now inactive' events.
    if (currentVersion !== -1) {
      console.log(`Session active (data version ${currentVersion}), sending events to connection ${i}`);

      if (connection.lastReceivedDataVersion === -1) {
        console.log(`Connection is new, sending status event`);
        connection.sendEvent(statusEvent);
      }

      if (connection.lastReceivedDataVersion !== currentVersion) {
        console.log(`Connection data version mismatch (${connection.lastReceivedDataVersion} vs ${currentVersion})`);
        connection.sendEvent(sessionEvent);
        connection.lastReceivedDataVersion = currentVersion;
      }

      console.log(`Sending telemetry`);
      connection.sendEvent(telemEvent);
      continue;
    }
    
    console.log(`Session is inactive, updating any unaware connections`);
    
    // If the connection is not already at -1 for the version, it assumes
    // the session is still active. Dispatch a status update to reset.
    if (connection.lastReceivedDataVersion !== -1) {
      connection.sendEvent(statusEvent);
      connection.lastReceivedDataVersion = -1;
    }
  }

  return staleConnections;
}

/**
 * Creates a state holder for a given SSE stream instance. This can be used to
 * track and dispatch messages to the connection as long as it is open.
 * 
 * @param {import('hono/streaming').SSEStreamingApi} stream
 * @returns {StreamConnection}
 */
export function createConnection(stream) {
  const isActive = () => !stream.aborted && !stream.closed;

  const sendEvent = async (event) => {
      try {
        await stream.writeSSE(event);
      } catch (err) {
        console.error(
          'Error dispatching event, closing connection.',
          '\nEvent:', event,
          '\nError:', err,
        );
      }
  };

  const closeStream = async () => {
    try {
      await stream.close();
    } catch (err) {
      console.error('Failed to close stream:', err);
    }
  };

  return {
    stream,
    isActive,
    sendEvent,
    closeStream,
  };
}
