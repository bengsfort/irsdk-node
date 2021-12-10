import { NativeSDK } from "./bridge";

console.log("Hello", NativeSDK);

const instance = new NativeSDK();
console.log("Do we have an instance?", instance);
console.log("Is it initialized?", instance.init());
