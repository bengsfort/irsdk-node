/* eslint-disable no-console */

import { writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

import { TelemetryVarList } from '@irsdk-node/types';

import { IRacingSDK } from '../irsdk-node.js';

/**
 * Script usage:
 *
 * yarn dump-data <folder>/<file>
 *
 * File isn't really needed, will fix that eventually. Folder needs to exist.
 */

function telemSandbox(varList: TelemetryVarList): void {
  console.log('Got lap distance values (float)', varList.CarIdxLapDistPct.value);
  console.log('Got session time values (double)', varList.SessionTime.value);
  console.log('Got car positions by index (int)', varList.CarIdxPosition.value);
  console.log('got player car in pit stall (bool)', varList.PlayerCarInPitStall.value);
}

async function main(out: string): Promise<void> {
  console.log('Starting...');
  const sdk = new IRacingSDK();
  sdk.autoEnableTelemetry = true;

  if (await sdk.ready()) {
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
        writeFile(`${out}/telemetry.json`, JSON.stringify(telem, null, 2), 'utf-8'),
        writeFile(`${out}/session.json`, session, 'utf-8'),
      ]);
      console.log('finished.');
    } else {
      console.log('No data! Exiting.');
    }
  }
}

const [, , OUT_FILE] = process.argv;
const TARGET = resolve(process.cwd(), OUT_FILE);

console.log('target:', TARGET);
void main(TARGET);
