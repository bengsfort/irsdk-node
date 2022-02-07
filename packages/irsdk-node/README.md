# irsdk-node

NodeJS bindings for the iRacing SDK. Aims to provide a thin barrier of entry to use the SDK from Node based apps. This repo just adds bindings for the current version of the SDK and is not a full node.js implementation. That would be a lot of fun (something like [pyirsdk](https://github.com/kutu/pyirsdk) or [iracing-sdk](https://github.com/quimcalpe/iracing-sdk)), but unfortunately I do not have the time atm :)

> ⚠️ **BREAKING CHANGE!** v3.0.0 introduced a new multi-package workspace for this project, and as such has introduced some breaking changes. You should still be able to import _just_ `irsdk-node`, but do note that it will include the dependent sub-packages, namely: `@irsdk-node/native` and `@irsdk-node/types`. Further, you will now be required to wait for the SDK to load via: `if (await sdk.ready())` before trying to use it. Please refer to the [changelog](./CHANGELOG.md) for more info.

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
if (await IRacingSDK.IsSimRunning()) {
    const sdk = new IRacingSDK();
    
    // Start the SDK
    if (await sdk.ready()) {
        // If you want the SDK to auto-enable telemetry
        sdk.autoEnableTelemetry = true;

        // Create a loop
        loop(sdk);
    }
}
```

## Development commands

```sh
# Build the module via typescript.
$ yarn build

# Watch the module and recompile on any changes.
$ yarn watch

# Runs a sandbox js module for breakpoint debugging (__tests__/sandbox.js)
$ yarn run-debug

# Runs a script that dumps all data in the SDK to json files
$ yarn dump-data

# Clean the build directories
$ yarn clean

# Lint package
$ yarn lint
```

## Contributing

Everything should be quite straightforward, but as the project needs to be built via node-gyp + typescript there are a couple of different commands you need to considering your needs.
