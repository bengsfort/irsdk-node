# irsdk-node

NodeJS bindings for the iRacing SDK. Aims to provide a thin barrier of entry to use the SDK from Node based apps. This repo just adds bindings for the current version of the SDK and is not a full node.js implementation. That would be a lot of fun (something like [pyirsdk](https://github.com/kutu/pyirsdk) or [iracing-sdk](https://github.com/quimcalpe/iracing-sdk)), but unfortunately I do not have the time atm :)

> ⚠️ **BREAKING CHANGE!** v4.0.0 updates all native dependencies to modern NodeJS API's, and as such the minimum Node version supported has been increased to v18. For v16 environments, please use the latest 3.x.x release (3.3.0)

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

## Why is `@irsdk-node/native` an optional dependency?

The [irsdk-node](./irsdk-node) package was split up in to separate packages to solve the issue that this SDK is windows-only, which means that the package wasn't able to be used in any other environment. For most cases this is fine, however it becomes a big issue if you want to do something as simple as use the types in a webview or in an electron renderer process. Splitting the types into their own package solves this issue, but another issue that immediately comes up is that if the consumers machine does not have the toolchain to build the native module (both the actual SDK or the mock one), they cannot work on their project at all.

Providing the native module as an optional dependency solves this and enables projects to be continually iterated on even on different platforms; for example if someone wants to iterate on the UI of their app from their macbook. The mock SDK will be used in these cases, allowing for a hopefully seamless experience.
