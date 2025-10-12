import { log } from 'node:console';
import { IRacingSDK } from 'irsdk-node';

// Every 5 seconds.
const LOG_WAIT_DELAY = 5000;

async function main() {
  const sdk = new IRacingSDK();
  sdk.autoEnableTelemetry = true;

  let lastWaitingLog = -1;
  let connected = false;

  sdk.startSDK();

  // TODO: log the sessionStatusOK and other status-related things here.
  // Need to make sure they are working as expected.
  const tick = () => {
    const now = Date.now();

    if (sdk.waitForData(16)) { // 60fps
      // Getting data, user is in a session.
      // 
      // Log to the console and swap the wait time to the 'active' MS.
      if (!connected) {
        log('Session joined - getting data');
        connected = true;
      }

      // TODO: Log driver and session info.
      // TODO: Grab data. If the lap has changed, log info about it.
    } else {
      // User is not in a session.
      if (connected) {
        log('Session left - no longer getting data.');
        connected = false;
        lastWaitingLog = now;
        return;
      }

      if (now >= lastWaitingLog + LOG_WAIT_DELAY) {
        lastWaitingLog = now;
        log('No data found - waiting...');
      }
    }

    setTimeout(tick, 16);
  };

  tick();
}

main();
