# irsdk-node

NodeJS bindings for the iRacing SDK. Aims to provide a thin barrier of entry to use the SDK from Node based apps. This repo just adds bindings for the current version of the SDK and is not a full node.js implementation. That would be a lot of fun (something like [pyirsdk](https://github.com/kutu/pyirsdk) or [iracing-sdk](https://github.com/quimcalpe/iracing-sdk)), but unfortunately I do not have the time atm :)

## Tested Features

- [X] Start / stop the iRacing SDK
- [X] Check status of iRacing Sessions
- [X] Broadcast messages to/trigger commands in iRacing sim
- [X] Expose data of active iRacing session

## Usage

```ts
import { IRacingSDK } from "irsdk-node";

const TIMEOUT = Math.floor((1 / 60) * 1000); // 60fps

// Create a loop to use if the service is running.
function loop(sdk: IRacingSDK): void {
    if (sdk.waitForData(TIMEOUT)) {
        const session = sdk.getSessionData();
        const telemetry = sdk.getTelemetry();

        // Do something with the data

        // Wait for new data
        loop(sdk);
    } else {
        // Disconnected.
    }
}

// Check the iRacing service is running
if (await IRacingSDK.isSimRunning()) {
    const sdk = new IRacingSDK();

    // If you want the SDK to auto-enable telemetry
    sdk.autoEnableTelemetry = true;
    
    // Start the SDK
    if (sdk.startSdk()) {
        // Create a loop
        loop(sdk);
    }
}
```

## Contributing

Everything should be quite straightforward, but as the project needs to be built via node-gyp + typescript there are a couple of different commands you need to considering your needs.

### General Development

- `yarn clean`: Clean all build directories.
- `yarn build`: Builds the native module + typescript.
- `yarn watch`: Watch the ts codebase for changes + recompile.

### Regenerating types

This project includes automatically generated types for the data provided by the SDK. To update these, make sure you run the sim and enter the car, then run the following:

```
$ yarn build:debug # build the debug version of the SDK
$ yarn generate-types
```

This will generate a `telemetry.d.ts` exporting an interface (`TelemetryVarList`) with every available variable typed based on their name. You should be able to have typed results after that, so you can easily find what you need via:

```ts
const telemetry = sdk.getTelemetry();
const RPM = telemetry.RPM;

// RPM will contain:
RPM.name;
RPM.description;
RPM.unit;
RPM.countAsTime;
RPM.length;
RPM.varType;
RPM.value;
```

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
