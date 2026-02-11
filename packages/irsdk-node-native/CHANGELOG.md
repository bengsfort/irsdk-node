# @irsdk-node/native

## 5.3.0

### Minor Changes

- 9636379: Fix faulty logic for the getTelemetryVariable() function on the native side, which was previously not working.

### Patch Changes

- fb7d0ac: Internal restructure and cleanup of the native codebase, along with externalization of the official irsdk code to provide clear separation between node module code and irsdk internal code. Should not have an effect on consuming libraries.
- 9636379: The `.getTelemetryVariable()` native function now returns `null` if given invalid arguments, and the `INativeSDK` API has been updated to reflect this. `.getTelemetryVariable()` in `irsdk-node` has been updated to early return `null` when this case occurs.

## 5.2.2

### Patch Changes

- e8ed80f: Add windows-arm prebuilt binary to `@irsdk-node/native`.

## 5.2.1

### Patch Changes

- 96777ac: Added missing install.js script to package json allowed files list.

## 5.2.0

### Minor Changes

- 28f85ea: Add leveled logging support. Native and TS API's now expose a LogLevel API that can be used to control SDK logging output more granularly, allowing filtering logs between debug, error, warn, info, and silent.

  .enableLogging is now deprecated, but remains a part of the API and uses the new API underneath. It is recommended to migrate to the .logLevel prop (or use the new config object passed to the irsdk-node constructor) instead.

- 802e32f: Non-windows platforms no longer have a native mock SDK, but just a typescript mock SDK. This change does not affect the mock SDK usage, and lowers the size of the package due to no longer shipping native binaries for non-windows platforms.
- 28f85ea: Refactor of native module enabling more robust cleanup of session data and lifetimes. Readability and maintainability of underlying logic updated by splitting core logic and node-API handlers.

  Refactor should have no effect on existing codebases.

- 802e32f: The timeout parameter provided to .waitForData now gets clamped to a minimum of 16 (aka 16ms/~60fps). This iRacing SDK only supports pulling data at 60fps or slower, and attempting to pull data out faster than that can cause unwanted functionality where the SDK will rapidly swap between getting data and being disconnected.

### Patch Changes

- 28f85ea: Expose SDK session data version number (.getSessionVersionNum()) and session connection ID (.getSessionConnectionID())
- Updated dependencies [5535e1c]
  - @irsdk-node/types@4.0.5

## 5.1.0

### Minor Changes

- a0c6cf9: Update types for broadcast() API to use new strict typings from @irsdk-node/types. Also now returns a boolean which indicates if the message was successful.

### Patch Changes

- d11fbaa: Fix broadcast message implementation, which previously was not fully hooked up.
- Updated dependencies [a0c6cf9]
  - @irsdk-node/types@4.0.4

## 5.0.0

### Major Changes

- 57c2f2f: Updated SDK implementation to latest (v1.19).

### Minor Changes

- 9c42558: Update to esmodule, revamp build process to support CJS and ESM.

### Patch Changes

- Updated dependencies [75d6955]
- Updated dependencies [57c2f2f]
  - @irsdk-node/types@4.0.0

## 4.1.1

### Patch Changes

- f44e36d: Updated readme
- 86eeabe: Updated license to MIT.
- Updated dependencies [fc577ee]
- Updated dependencies [86eeabe]
  - @irsdk-node/types@3.0.3

## 4.1.0

### Minor Changes

- 09e935a: Use prebuildify to ship compiled platform binaries instead of building on the users machine.
- 4ac2035: Remove OS requirement for package in favor of platform-agnostic mocks.

### Patch Changes

- c1138e9: Some logs now correctly wrapped by logging flag.
- fa4206a: Update codebase to use pnpm as a package manager for more workspace feature stability.
- 09e935a: Compile a mock SDK on non-windows platforms instead of nothing at all.
- Updated dependencies [fa4206a]
  - @irsdk-node/types@3.0.2
