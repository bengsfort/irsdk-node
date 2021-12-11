import { NativeSDK } from "./bridge.debug";

// REMEMBER TO TURN TELEMETRY ON UNTIL WE SUPPORT AUTO TURNING IT ON!
// ALT+L
const instance = new NativeSDK();
console.log("Do we have an instance?", instance);

console.log("Is it initialized?", instance.isRunning());
instance.defaultTimeout = 60;

const result = instance.startSDK();
console.log("Attempted to start sdk", result);

setTimeout(() => {
    console.log("Initialized now?", instance.isRunning());
}, 2500);
