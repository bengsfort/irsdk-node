import { NativeSDK } from "./bridge";

// @todo: We'll have to make a TS class here first so that we don't expose the native functions.
// That way we can add protection against doing dumb things, along with some nice helpers, such
// as doing a `fetch` before allowing to start the SDK to ensure a session is actually running.

const instance = new NativeSDK();
console.log("Do we have an instance?", instance);

console.log("Is it initialized?", instance.isRunning());
instance.defaultTimeout = 60;

const result = instance.startSDK();
console.log("Attempted to start sdk", result);

setTimeout(() => {
    console.log("Initialized now?", instance.isRunning());
}, 2500);
