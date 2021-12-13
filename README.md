# irsdk-node

NodeJS bindings for the iRacing SDK. Aims to provide a thin barrier of entry to use the SDK from Node based apps. This repo just adds bindings for the current version of the SDK and is not a full node.js implementation. That would be a lot of fun (something like [pyirsdk](https://github.com/kutu/pyirsdk) or [iracing-sdk](https://github.com/quimcalpe/iracing-sdk)), but unfortunately I do not have the time atm :)

## Usage

```ts

import { IRacingSDK } from "irsdk-node";

// Check the iRacing service is running
if (await IRacingSDK.isSimRunning()) {
    const sdk = new IRacingSDK();

    // If you want the SDK to auto-enable telemetry
    sdk.autoEnableTelemetry = true;
    
    // Start the SDK
    const started = sdk.startSdk();
    if (started && sdk.sessionStatusOK()) {
        // get data
    }
}
```
