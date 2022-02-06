# @irsdk-node/native

This is the native bindings package for irsdk-node. This provides near 1:1 bindings to the C++ iRacing SDK, and is consumed as an optional dependency of [irsdk-node](../irsdk-node), which provides a handy little wrapper around the API to make it nicer to use and avoid boilerplating.

While you can use this package directly, it is highly recommended to use the [irsdk-node](../irsdk-node) package instead.

## Why an optional dependency?

The [irsdk-node](../irsdk-node) package was split up in to separate packages to solve the issue that this SDK is windows-only, which means that the package wasn't able to be used in any other environment. For most cases this is fine, however it becomes a big issue if you want to do something as simple as use the types in a webview or in an electron renderer process. As an optional dependency, the types and rest of the SDK can be imported as needed wherever.

## Debugging

- `yarn build-cpp:debug`: Builds the native module in debug mode.

In debug mode, you are going to need to swap to using the `DebugSDK` rather than `NativeSDK`. This uses the debug build rather than the release build, which allows debugging/breakpoints via vscode (you can use the `Debug bridge` run task in vscode to do this). For example:

```diff
// In `src/irsdk-node.ts`
+ import { DebugSDK } from '@irsdk-node/native';
- import { NativeSDK } from '@irsdk-node/native';
```

## Generating types

This package contains a utility script for generating Typescript types based on the actual Telemetry values present during runtime. To do so you can run `yarn generate-types` while you have iRacing running and connected to a server. This will generate a new .ts types file in the [@irsdk-node/types](../irsdk-node-types) package.

## Commands

```sh
# Build the module.
$ yarn build

# Build either the release or debug build.
$ yarn build-cpp:[release|debug]

# Run util script for generating typescript types
$ yarn generate-types

# Clean the build directories
$ yarn clean

# Lint package
$ yarn lint
```
