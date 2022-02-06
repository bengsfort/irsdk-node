# @irsdk-node/workspace

This is the root of the `irsdk-node` workspace. `irsdk-node` is a node.js wrapper for the C++ iRacing SDK. It provides native bindings and a simple API to interact with it, allowing you to very easily consume data from the SDK or write apps to set up macros and other commands.

You can find the main module via the [irsdk-node](./packages/irsdk-node) package.

## Sub-packages

- [irsdk-node](./packages/irsdk-node): The main `irsdk-node` package.
- [@irsdk-node/types](./packages/irsdk-node-types): Package containing TypeScript implementations of the native types within the iRacing SDK.
- [@irsdk-node/native](./packages/irsdk-node-native): Package containing the native node.js addon that implements the bindings and interacts with the SDK. Consumed by `irsdk-node`.

## Updating packages

The packages in this repo are managed via yarn workspaces + lerna. Yarn is used for the main linking / dependency consolidation between packages, whereas lerna is used for publishing and versioning the packages.

The main commands that we use from lerna are included within the root workspace [package.json](./package.json).

- `yarn bootstrap`: Installs dependencies, links dependent packages.
- `yarn link`: Links all packages dependent on each other.
- `yarn link:local`: Links all packages dependent on each other, forcing the local package no matter what.
- `yarn changed`: List the packages that have changed since last release.
- `yarn diff`: Print out a diff of changes since last release, from all packages.
- `yarn version`: Bump the version of packages that have changed since last release.
- `yarn publish`: Publish the packages that have changed since last release.

Please refer to the [lerna docs](https://github.com/lerna/lerna/tree/main/commands/version#lifecycle-scripts) for more info about the lifecycle script interaction with lerna publishing.
