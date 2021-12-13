// Change 'bridge' to 'bridge.debug' in irsdk-node to enable debugging!
import { IRacingSDK } from '../irsdk-node';

// REMEMBER TO TURN TELEMETRY ON UNTIL WE SUPPORT AUTO TURNING IT ON!
// ALT+L
const instance = new IRacingSDK();

async function main(): Promise<void> {
  instance.defaultTimeout = 60;
  const simRunning = await IRacingSDK.isSimRunning();
  console.log('Is sim running?', simRunning);
}

void main();

// console.log("Do we have an instance?", instance);

// console.log("Is it initialized?", instance.isRunning());
// instance.defaultTimeout = 60;

// if ()
// const result = instance.startSDK();
// console.log("Attempted to start sdk", result);

// setTimeout(() => {
//     console.log("Initialized now?", instance.isRunning());
// }, 2500);
