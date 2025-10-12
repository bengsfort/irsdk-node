# @irsdk-node/types

This package provides TypeScript type definitions and enums that match the data structures and API's of the iRacing SDK, as well as a generated list of telemetry variables available from the SDK.

If you are using `irsdk-node`, you do not need to import this package directly as it gets re-exported via `irsdk-node`.

## Usage

Install as a dependency. If you are not using the enums, you can save it as a dev dependency.

```sh
# Via npm..
$ npm install @irsdk-node/types

# Or yarn..
$ yarn add @irsdk-node/types

# Or pnpm..
$ pnpm add @irsdk-node/types
```

Then import whatever type or enum that you need.

```ts
import { Sector } from '@irsdk-node/types';

const sectors: Sector = { ... };
```

## Contributing

### Commands

```sh
# Install dependencies
$ pnpm i

# Build the types
$ pnpm build

# Watch types, re-compiling on changes
$ pnpm watch

# Clean the build directories
$ pnpm clean

# Lint package
$ pnpm lint
```

## Generating types

Many of the interfaces and enums are hand-converted from the C++ enums SDK defines module. You can find these by looking in the [irsdk_defines.h file of @irsdk-node/native](../irsdk-node-native/lib/irsdk_defines.h).

The session data and telemetry data cannot be converted manually without losing your sanity, so a script has been written to do this automatically. You can run this by joining a session on iRacing, enter the car, and then opening up a terminal to the [@irsdk-node/native](../irsdk-node-native) package and running the following command:

```sh
$ pnpm generate-types
```

Running this will run a helper function in the native SDK that will take all of the telemetry data and dump it as typescript data in the [_GENERATED_telemetry.ts](./src/_GENERATED_telemetry.ts) file. This exports an interface (`TelemetryVarList`) with every available variable typed based on their name. You should be able to have typed results after that, so you can easily find what you need via:

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

> ⚠️ Running this command will replace all of the current types, and this is unfortunately car specific. Basic cars that do not have many features will not have many of the variables, so always try to use a complex car. A better solution for this needs to be figured out in the future.
