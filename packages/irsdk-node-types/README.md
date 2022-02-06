# @irsdk-node/types

This is the types package for irsdk-node. It exists solely to allow for the types to be re-used across platforms where the native SDK cannot be imported.

Many of these types are hand-converted from the C++ enums and types from the iRacing SDK. You can find thse by looking in the [irsdk_defines file of @irsdk-node/native](../irsdk-node-native/lib/irsdk_defines.h).

## Commands

```sh
# Build the types
$ yarn build

# Watch types, re-compiling on changes
$ yarn watch

# Clean the build directories
$ yarn clean

# Lint package
$ yarn lint
```

## Generating types

The session data and telemetry data cannot be converted manually (well, they can, but it would make you want to hide under your bed), so a script has been written to do this automagically. You can run this by joining a session on iRacing, enter the car, and then opening up a terminal to the [@irsdk-node/native](../irsdk-node-native) package and running the following command:

```sh
$ yarn generate-types
```

Running this will run a helper function in the native SDK that will take all of the telemetry data and dump it as typescript data in the [_GENERATED_telemetry.ts](./src/_GENERATED_telemetry.ts) file. This exports  an interface (`TelemetryVarList`) with every available variable typed based on their name. You should be able to have typed results after that, so you can easily find what you need via:

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

Some things to note on this:

- Similar to the session data, this is not perfect. Different race configurations will yield different results, so a better way to handle this will need to be figured out in the future.
- Running this will overwrite all of the current types. Ideally in the future this can be more of a "merge" type operation.
