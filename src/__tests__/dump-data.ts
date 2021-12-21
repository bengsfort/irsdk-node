import { IRacingSDK } from "../irsdk-node";
import { writeFile } from "fs/promises";
import { resolve } from "path";

async function main(out: string) {
   console.log("Starting...");
   const sdk = new IRacingSDK();

  console.log("SDK Started?", sdk);
  console.log("session status ok?", sdk.sessionStatusOK);
  
  sdk.enableTelemetry(true);
  sdk.startSDK();
  sdk.waitForData(100);

  let data = '';
  // if (telemetry) {
    data = JSON.stringify(sdk.getTelemetry());
  // } else {
    // data = sdk.getSessionData();
  // }

  console.log("Got data?", typeof data);
  await writeFile(out, data, "utf-8");
  console.log("finished. saved at:", out);
}

const [,, outFile] = process.argv;
const target = resolve(process.cwd(), outFile);

console.log("target:", target);
void main(target);
