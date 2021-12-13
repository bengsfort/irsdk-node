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

## Contributing

Everything should be quite straightforward, but as the project needs to be built via node-gyp + typescript there are a couple of different commands you need to considering your needs.

### General Development

- `yarn clean`: Clean all build directories.
- `yarn build`: Builds the native module + typescript.
- `yarn watch`: Watch the ts codebase for changes + recompile.

### Debugging

- `yarn build-cpp:debug`: Builds the native module in debug mode.

In debug mode, you are going to need to swap to using the `bridge.debug.js` module rather than the `bridge.js`. This swaps everything to use the debug build rather than the release build, which allows debugging/breakpoints via vscode (you can use the `Debug bridge` run task in vscode to do this). For example:

```diff
// In `src/irsdk-node.ts`
+ import { NativeSDK } from './bridge.debug';
- import { NativeSDK } from './bridge';
```

### Individual tasks

- `yarn clean`: Clean all build directories.
- `yarn build`: Builds the native module + typescript.
- `yarn build-cpp`: Builds the native module.
- `yarn build-ts`: Builds typescript.
- `yarn build:debug`: Builds the native module in debug mode + typescript.
- `yarn watch`: Watch the ts codebase for changes + recompile.
- `yarn run-debug`: Runs the bridge-test file, which serves as a test file for now.
- `yarn lint`: Lints/formats the codebase.
