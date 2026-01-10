import { log } from 'node:console';
import { exit } from 'node:process';

import { IRacingSDK, LogLevel } from 'irsdk-node';

import { formatDuration } from './utils.js';

const LOG_WAIT_DELAY = 5000; // 5s.
const DATA_INIT_BUFFER = 1000; // 1s
const MAX_TICK_LENGTH = (1 / 60) * 1000; // 60fps

function main(): void {
  // Init SDK instance.
  const sdk = new IRacingSDK({
    logLevel: LogLevel.Info,
  });
  sdk.autoEnableTelemetry = true;

  // Initialize state.
  let connected = false;
  let startTriggered = false;
  let lastWaitingLog = -1;
  let currentLapNum = -1;

  // Try to start the SDK. If there is already a session running, it will connect
  // and internally cache the first batch of data.
  sdk.startSDK();

  // Create a data loop.
  //
  // This is what will be called every tick, and where your actual logic will go.
  const tick = (): void => {
    const now = Date.now();

    // Wait a maximum of 16ms (60fps) for data.
    if (sdk.waitForData(MAX_TICK_LENGTH)) {
      // We have data.
      //
      // Try to cache the session and telemetry immediately, and use the cached
      // data for the remainder of the tick.
      const sessionData = sdk.getSessionData();
      const telemetry = sdk.getTelemetry();

      // If our `connected` variable was false, it means we have just connected.
      // We initialize our 'active session' state.
      if (!connected) {
        // When a session starts, this MIGHT toggle quickly between connected
        // and disconnected. To prevent this, the first time we detect data we
        // delay further input for 1s to give the SDK a moment to fully init.
        if (!startTriggered) {
          log('Detected session - waiting for init...');
          startTriggered = true;
          setTimeout(tick, DATA_INIT_BUFFER);
          return;
        }

        // Cache that we are connected.
        connected = true;
        log('Session joined - getting data');

        // Log driver information if data is available.
        if (sessionData) {
          const [driverData] = sessionData.DriverInfo.Drivers;
          log(
            `Local driver detected ${driverData.UserName} (${driverData.CarScreenName})`,
          );
        } else {
          log('Error: Session data not available!');
          exit(1);
        }
      }

      // Cache telemetry variables.
      const lapNum = telemetry.LapCompleted.value[0];
      const lapTime = telemetry.LapCurrentLapTime.value[0];
      const bestLapTime = telemetry.LapBestLapTime.value[0];
      const deltaToBest = lapTime - bestLapTime;

      // If the lap number has increased, log the last lap data.
      if (lapNum > 0 && currentLapNum !== lapNum) {
        currentLapNum = lapNum;
        const deltaSign = deltaToBest < 0 ? '-' : '';
        log(
          `${lapNum}: ${formatDuration(lapTime)} (${deltaSign + formatDuration(Math.abs(deltaToBest))})`,
        );
      }
    } else {
      // User is not in a session.
      // If our `connected` variable was true, that means we have just left a
      // session. Reset all of our state variables so they do not corrupt our
      // next session.
      if (connected) {
        log('Session left - no longer getting data.');
        connected = false;
        lastWaitingLog = now;
        startTriggered = false;
        currentLapNum = 0;

        // Since we have fully reset -- early out.
        setTimeout(tick, MAX_TICK_LENGTH);
        return;
      }

      // Log some user feedback every Xs.
      if (now >= lastWaitingLog + LOG_WAIT_DELAY) {
        lastWaitingLog = now;
        log('No data found - waiting...');
      }
    }

    // Register the next tick.
    // You could do this with setImmediate as well, but in most cases setTimeout
    // with your target FPS is sufficient and more performant.
    setTimeout(tick, MAX_TICK_LENGTH);
  };

  // Run the first tick.
  tick();
}

main();
