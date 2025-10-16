import { exit } from 'node:process';
import { log } from 'node:console';
import { IRacingSDK, SessionData, TelemetryVarList } from 'irsdk-node';
import { formatDuration } from './utils.js';

// Every 5 seconds.
const LOG_WAIT_DELAY = 5000;

async function main() {
  const sdk = new IRacingSDK();
  sdk.autoEnableTelemetry = true;

  let connected = false;
  let startTriggered = false;
  let lastWaitingLog = -1;
  let localDriverIdx = -1;
  let currentLapNum = -1;

  sdk.startSDK();

  // TODO: log the sessionStatusOK and other status-related things here.
  // Need to make sure they are working as expected.
  const tick = () => {
    const now = Date.now();

    if (sdk.waitForData(16)) { // 60fps
      const sessionData = sdk.getSessionData();
      const telemetry = sdk.getTelemetry();

      // Getting data, user is in a session.
      // 
      // Log to the console and swap the wait time to the 'active' MS.
      if (!connected) {
        // When a session starts, this MIGHT toggle quickly between connected
        // and disconnected. To prevent this, the first time we detect data we
        // delay further input for 500ms to give the SDK a moment to fully init.
        if (!startTriggered) {
          log('Detected session - delaying...');
          startTriggered = true;
          setTimeout(tick, 500);
          return;
        }

        // Cache that we are connected.
        connected = true;
        log('Session joined - getting data');

        // Log driver information if data is available.
        if (sessionData) {
          localDriverIdx = getLocalDriverIdx(telemetry, sessionData);
          const [driverData] = sessionData.DriverInfo.Drivers;
          log(`Local driver detected ${driverData.UserName} (${driverData.CarScreenName})`);
        } else {
          log('Error: Session data not available!');
          exit(1);
        }
      }

      // Cache telemetry variables.
      const lapNum = telemetry.LapCompleted.value[0];
      const lapTime = telemetry.LapCurrentLapTime.value[0];
      const bestLapNum = telemetry.LapBestLap.value[0];
      const bestLapTime = telemetry.LapBestLapTime.value[0];
      const deltaToBest = lapTime - bestLapTime;
      
      // If the lap number has increased, log the last lap data.
      if (currentLapNum != lapNum) {
        currentLapNum = lapNum;
        const isBestLap = bestLapNum === lapNum;
        const bestLapStr = isBestLap ? 'NEW BEST' : formatDuration(Math.abs(deltaToBest));
        const deltaSign = (!isBestLap && deltaToBest < 0) ? '-' : '';
        log(`${lapNum}: ${formatDuration(lapTime)} (${deltaSign + bestLapStr})`);
      }
    } else {
      // User is not in a session.
      if (connected) {
        log('Session left - no longer getting data.');
        connected = false;
        lastWaitingLog = now;
        startTriggered = false;
        currentLapNum = 0;
        setTimeout(tick, 16);
        return;
      }

      // Log some user feedback every Xs.
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

// Utils

function getLocalDriverIdx(telemetry: TelemetryVarList, session: SessionData) {
  if (telemetry.PlayerCarIdx.value.length > 0) {
    return telemetry.PlayerCarIdx.value[0];
  }
  return session.DriverInfo.DriverCarIdx;
}
