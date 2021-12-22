import { IRacingSDK } from "../irsdk-node";
import { writeFile } from "fs/promises";
import { dirname, resolve } from "path";

async function main(out: string) {
   console.log("Starting...");
   const sdk = new IRacingSDK();

  console.log("SDK Started?", sdk);
  
  sdk.enableTelemetry(true);
  sdk.startSDK();
  const haveData = sdk.waitForData(1000);
  console.log("session status ok?", sdk.sessionStatusOK);
  if (haveData) {
    const telem  = JSON.stringify(sdk.getTelemetry());
    const session = sdk.getSessionData();
    
    // Save
    const dir = dirname(out);
    console.log("Saving in:", dir);
    await Promise.all([
      await writeFile(`${out}/telemetry.txt`, telem, "utf-8"),
      await writeFile(`${out}/session.yml`, session, "utf-8"),
    ]);
    console.log("finished.");
  } else {
    console.log("No data! Exiting.");
  }
}

const [,, outFile] = process.argv;
const target = resolve(process.cwd(), outFile);

console.log("target:", target);
void main(target);
