# @irsdk-node/workspace

This is the root of the `irsdk-node` workspace. `irsdk-node` is a node.js wrapper for the C++ iRacing SDK. It provides native bindings and a simple API to interact with it, allowing you to very easily consume data from the SDK or write apps to set up macros and other commands.

You can find the main module via the [irsdk-node](./packages/irsdk-node) package.

## Sub-packages

- [irsdk-node](./packages/irsdk-node): The main `irsdk-node` package.
- [@irsdk-node/types](./packages/irsdk-node-types): Package containing TypeScript implementations of the native types within the iRacing SDK.
- [@irsdk-node/native](./packages/irsdk-node-native): Package containing the native node.js addon that implements the bindings and interacts with the SDK. Consumed by `irsdk-node`.

## Updating packages

The packages in this repo are managed via yarn workspaces. We utilize the yarn workspaces and yarn version plugins to make this process much easier.