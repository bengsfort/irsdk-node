import { Hono } from 'hono';
import { serve } from '@hono/node-server';

import nodeProcess from 'node:process'

const app = new Hono();

// TODO: Configurable port, log it when starting.
// TODO: Init SDK.
// TODO: Setup getter routes for SDK functions.
// TODO: Setup WS for receiving SDK data.

const instance = serve(app);

// Graceful shutdown
nodeProcess.on('SIGINT', () => {
  instance.close();
  nodeProcess.exit(0);
});

nodeProcess.on('SIGTERM', () => {
  instance.close((err) => {
    if (err) {
      console.error(err);
      nodeProcess.exit(1);
    }
    nodeProcess.exit(0);
  });
});
