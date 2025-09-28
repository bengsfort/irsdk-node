/* eslint-disable no-console */

import { IRacingSDK } from '../irsdk-node';

function loop(sdk: IRacingSDK): void {
  console.log('session status ok?', sdk.sessionStatusOK);
  const timeout = Math.floor(1000);
  const wait = sdk.waitForData(timeout);

  // if (sdk.sessionStatusOK) {
  // const data = sdk.getSessionData();
  // console.log("Data:", data);

  const data = sdk.getTelemetry();
  console.log('getTelemetry data:', data);
  // }
  console.log('Wait complete', wait);
}

function main(): void {
  console.log('Starting...');
  const sdk = new IRacingSDK();

  console.log('SDK Started?', sdk);
  console.log('session status ok?', sdk.sessionStatusOK);

  setInterval(() => {
    console.log('Running loop!');
    loop(sdk);
  }, 2000);
}

main();
