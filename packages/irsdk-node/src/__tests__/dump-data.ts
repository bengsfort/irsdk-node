import { writeFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { TelemetryVarList } from '@irsdk-node/types';
import { IRacingSDK } from '../irsdk-node';

/**
 * Script usage:
 * 
 * yarn dump-data <folder>/<file>
 * 
 * File isn't really needed, will fix that eventually. Folder needs to exist.
 */

function telemSandbox(varList: TelemetryVarList) {
  console.log('Got lap distance values (float)', varList.CarIdxLapDistPct.value);
  console.log('Got session time values (double)', varList.SessionTime.value);
  console.log('Got car positions by index (int)', varList.CarIdxPosition.value);
  console.log('got player car in pit stall (bool)', varList.PlayerCarInPitStall.value);
}

async function main(out: string) {
  console.log('Starting...');
  const sdk = new IRacingSDK();
  sdk.enableLogging = true;

  console.log('SDK Started?', sdk);

  sdk.enableTelemetry(true);
  sdk.startSDK();

  console.log('SDK after startSDK?', sdk);
  console.log('Triggering SDK wait...?', sdk);
  if (sdk.waitForData(1000)) {
    const telem = sdk.getTelemetry();
    telemSandbox(telem);
    const session = JSON.stringify(sdk.getSessionData(), null, 2);

    console.log('session status ok?', sdk.sessionStatusOK);

    // Save
    const dir = dirname(out);
    console.log('Saving in:', dir);
    await Promise.all([
      await writeFile(`${out}/telemetry.json`, JSON.stringify(telem, null, 2), 'utf-8'),
      await writeFile(`${out}/session.json`, session, 'utf-8'),
    ]);
    console.log('finished.');
  } else {
    console.log('No data! Exiting.');
  }
}

const [,, outFile] = process.argv;
const target = resolve(process.cwd(), outFile);

console.log('target:', target);
void main(target);
