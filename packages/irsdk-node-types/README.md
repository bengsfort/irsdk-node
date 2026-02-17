# @irsdk-node/types

_Types implemented for **iRacing SDK v1.19**. You can see the latest version of the SDK [on the forums](https://forums.iracing.com/discussion/62/iracing-sdk/p1)._

This package provides TypeScript type definitions and enums that match the data structures and API's of the iRacing SDK, as well as a generated list of telemetry variables available from the SDK that is the most comprehensive telemetry variable list available.

If you are using `irsdk-node`, you do not need to import this package directly as it gets re-exported via `irsdk-node`.

You can read the API reference at the [`irsdk-node` documentation site](https://irsdk-node.bengsfort.dev/API-Reference/irsdk-node-types/).

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

The telemetry data cannot be converted manually without losing your sanity, so a script has been written to do this automatically. You can run this by joining a session on iRacing, enter the car, and then opening up a terminal to the [irsdk-node](../irsdk-node) package and running the following command:

```sh
pnpm types:generate
```

Alternatively, you can run the type generation function from anywhere in the repo via:

```sh
pnpm run -w types:generate
```

As the telemetry can be different on a per-car basis, this will take the telemetry variables active in your session and compare them against a cache to determine if there are any new types detected. If some are detected, the typescript file will be updated.

There _might_ be some missing types since this is car-specific. While all base cars have been checked, and most categories of road cars, there may be still be some missing variables. If you cannot find a variable for a car you are using, please run this command against the car to get them added, then create a PR!

Please see the responses to [this forum post](https://forums.iracing.com/discussion/comment/739154/#Comment_739154) for more information.
