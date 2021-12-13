import { NativeSDK } from "../bridge.debug";
import { SIM_STATUS_URI } from "../constants";

// REMEMBER TO TURN TELEMETRY ON UNTIL WE SUPPORT AUTO TURNING IT ON!
// ALT+L
const instance = new NativeSDK();

const getSimStatus = async () => {
  const data = (await (await fetch(SIM_STATUS_URI)).json());
  console.log("fetch data", data);
  return data;
};

async function main() {
  instance.defaultTimeout = 60;
  await getSimStatus();
}

main();

// console.log("Do we have an instance?", instance);

// console.log("Is it initialized?", instance.isRunning());
// instance.defaultTimeout = 60;

// if ()
// const result = instance.startSDK();
// console.log("Attempted to start sdk", result);

// setTimeout(() => {
//     console.log("Initialized now?", instance.isRunning());
// }, 2500);
