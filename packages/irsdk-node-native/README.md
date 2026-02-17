# @irsdk-node/native

_Currently using **iRacing SDK v1.19**. You can see the latest version of the SDK [on the forums](https://forums.iracing.com/discussion/62/iracing-sdk/p1)._

This is the native bindings package for irsdk-node. This provides near 1:1 bindings to the C++ iRacing SDK, and is consumed as a dependency of [irsdk-node](https://github.com/bengsfort/irsdk-node/tree/main/packages/irsdk-node), which provides a handy little wrapper around the API to make it nicer to use and avoid boilerplating.

While you can use this package directly, it is highly recommended to use the [irsdk-node](https://github.com/bengsfort/irsdk-node/tree/main/packages/irsdk-node) package instead. Types for the data exposed via this package can be used independently via [@irsdk-node/types](https://github.com/bengsfort/irsdk-node/tree/main/packages/irsdk-node-native) as well.

You can read the API reference at the [`irsdk-node` documentation site](https://irsdk-node.bengsfort.dev/API-Reference/irsdk-node-native/).

## Usage

Install as a dependency.

```sh
# Via npm..
$ npm install @irsdk-node/types

# Or yarn..
$ yarn add @irsdk-node/types

# Or pnpm..
$ pnpm add @irsdk-node/types
```

Then you can use the SDK bindings directly.

```ts
import { NativeSDK } from '@irsdk-node/native';
import {
    SessionData,
    TelemetryVarList,
    TelemetryVariable,
    BroadcastMessages,
    TelemetryCommand,
    } from '@irsdk-node/types';

const sdk = new NativeSDK();

// Try to start the SDK. This will return false if an iRacing session is not active.
//
// In cases where the SDK is not running, you would likely want to poll this fn
// so you can start grabbing data once a session starts.
if (!sdk.startSDK()) {
    console.log('iRacing not running');
    process.exit(0);
}

// Start telemetry.
sdk.broadcast(BroadcastMessages.TelemCommand, TelemetryCommand.Start);

// Grab data from the SDK.
const TICK_RATE = 1 / 60; // 60fps, the max
if (sdk.waitForData(TICK_RATE)) {
    // This is a YAML string of more static data. Every time this changes,
    // sdk.currDataVersion will be incremented by 1. -1 is the default value.
    //
    // This object is BIG. It is recommended to only fetch when currDataVersion
    // changes to avoid performance issues.
    const sessionData: SessionData = sdk.getSessionData();

    // Telemetry needs to be massaged using var.varType to their correct types,
    // for example, varType 4 (float32) should be parsed as Float32Array.
    //
    // See irsdk-node codebase for examples.

    // Returns ALL telemetry variables as a big object.
    const allTelemetry: TelemetryVarList = sdk.getTelemetryData();

    // Get just one telemetry variable by name or index. Usually by name.
    const incidentCount: TelemetryVariable<number[]> = sdk.getTelemetryVariable('PlayerCarMyIncidentCount');
}

// Close the SDK once you are done.
sdk.stopSDK();
```

## Distribution

To ensure cross-compat between platforms, a mock SDK api is provided for non-windows platforms. This gets built on all supported platforms automatically during deployment via [github actions](../../.github/workflows/do-release.yaml). [Node-gyp](https://www.npmjs.com/package/node-gyp) is used under the hood for building the node.js C++ module, with pre-build functionality provided by [prebuildify](https://www.npmjs.com/package/prebuildify).

Prebuildify also will automatically detect the platform and import the correct native module for the platform. If it doesn't exist, during installation it will attempt to build it.

## Contributing

### SDK

The SDK in its entirety lives in [lib](./lib/) along with the node.js bindings class. Technically it is always at the 'latest version' of the sdk with regards to the telemetry and session data since those are just pure data, but for other API updates the latest sdk files can just be replaced within that directory to update to the latest (for example `irsdk_client.h`, `irsdk_defines.h`, etc.)

### Generating types

This package contains a utility script for generating Typescript types based on the actual Telemetry values present during runtime. To do so you can run `pnpm generate-types` while you have iRacing running and connected to a server. This will generate a new .ts types file in the [@irsdk-node/types](../irsdk-node-types) package.

Please refer to the readme in the types package for more info.

### Commands

These are the primary commands for package development.

```sh
# Build the package.
$ pnpm build

# Build only the typescript.
$ pnpm build:ts

# Build the C++ module.
$ pnpm build:cpp

# Run util script for generating typescript types
$ pnpm generate-types

# Clean the build directories
$ pnpm clean

# Lint package
$ pnpm lint
```

#### ⚠️ C++ Build errors from prebuildify/node-gyp

If the C++ build fails with an error similar to:

```
gyp: /<path>/<to>/common.gypi not found (cwd: /<cwd>/<path>) while reading includes of binding.gyp...
```

Then try looking for your global node-gyp and prebuildify caches. On Windows, they should be somewhere around:

- Node-gyp:
  - `C:\Users\<YourUser>\AppData\Local\node-gyp`
  - `C:\Users\<YourUser>\AppData\Local\.node-gyp`
- Prebuildify:
  - `C:\Users\<YourUser>\AppData\Local\Temp\prebuildify`

Once cleared, you can try running `pnpm clean && pnpm build` again. Prebuildify and Node-GYP should then attempt to do a fresh install before attempting to build.
