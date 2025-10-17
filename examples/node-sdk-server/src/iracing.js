import { IRacingSDK } from 'irsdk-node';

const sdk = new IRacingSDK();

export function init() {
  if (!IRacingSDK.IsSimRunning()) {
    console.error('iRacing service not detected. Exiting.');
    process.exit(1);
  }

  sdk.startSDK();
}

export function close() {
  sdk.stopSDK();
}

// Check the current state of the SDK connection.
//
// `sessionStatusOK` depends on data being available, so due to the async nature
// of server requests this will attempt to re-start the SDK if it has been stopped.
export function checkSdkSession() {
  return sdk.sessionStatusOK || sdk.startSDK();
}

// Requests current data from the SDK, caching it within our server state.
export function getSdkState(pollingRate) {
  const result = {
    sessionActive: false,
    currDataVersion: -1,
    sessionData: null,
    telemetry: null,
  };

  if (!checkSdkSession()) {
    console.log('No iRacing session detected. Aborting data cache.');
    return result;
  }

  if (sdk.waitForData(pollingRate)) {
    console.log(`Finished fetching SDK data (data ver ${sdk.currDataVersion})`);
    result.sessionData = sdk.getSessionData();
    result.telemetry = sdk.getTelemetry();
    result.sessionActive = sdk.currDataVersion !== -1;
    result.currDataVersion = sdk.currDataVersion;
  }

  return result;
}
