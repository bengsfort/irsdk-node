import { writeFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { IRacingSDK } from '../irsdk-node';

async function main(out: string) {
  console.log('Starting...');
  const sdk = new IRacingSDK();

  console.log('SDK Started?', sdk);

  sdk.enableTelemetry(true);
  sdk.startSDK();
  if (sdk.waitForData(1000)) {
    const telem = JSON.stringify(sdk.getTelemetry(), null, 2);
    const session = JSON.stringify(sdk.getSessionData(), null, 2);

    console.log('session status ok?', sdk.sessionStatusOK);

    // Save
    const dir = dirname(out);
    console.log('Saving in:', dir);
    await Promise.all([
      await writeFile(`${out}/telemetry.json`, telem, 'utf-8'),
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
