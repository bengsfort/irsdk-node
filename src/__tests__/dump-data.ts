import { writeFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { IRacingSDK } from '../irsdk-node';

async function main(out: string) {
  console.log('Starting...');
  const sdk = new IRacingSDK();

  console.log('SDK Started?', sdk);

  sdk.enableTelemetry(true);
  sdk.startSDK();
  console.log('session status ok?', sdk.sessionStatusOK);
  if (sdk.waitForData(1000)) {
    const telem = JSON.stringify(sdk.getTelemetry());
    const session = sdk.getSessionData();
    const weekend = sdk.getWeekendInfo();
    console.log('Weekend?', weekend);

    // Save
    const dir = dirname(out);
    console.log('Saving in:', dir);
    await Promise.all([
      await writeFile(`${out}/telemetry.json`, telem, 'utf-8'),
      await writeFile(`${out}/session.yml`, session, 'utf-8'),
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
