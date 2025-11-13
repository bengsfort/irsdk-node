# Changelog

## 4.1.1

### Patch Changes

- 6f81f5b: Add fix for design/color strings that produce invalid yaml. (Thanks @mikey0000)
- Updated dependencies [1435d80]
  - @irsdk-node/types@4.0.1

## 4.1.0

### Minor Changes

- c53a7b4: Switched @irsdk-node/native to a required dependency due to new pre-published binaries and fallbacks.
- d7e45e5: Revamp internal build system to support both ESM and CJS modules.

### Patch Changes

- Updated dependencies [57c2f2f]
- Updated dependencies [75d6955]
- Updated dependencies [9c42558]
- Updated dependencies [57c2f2f]
  - @irsdk-node/native@5.0.0
  - @irsdk-node/types@4.0.0

## 4.0.4

### Patch Changes

- 2830fbd: Updated readme.
- 86eeabe: Updated license to MIT.
- Updated dependencies [fc577ee]
- Updated dependencies [86eeabe]
  - @irsdk-node/types@3.0.3

## 4.0.3

### Patch Changes

- fa4206a: Update codebase to use pnpm as a package manager for more workspace feature stability.
- c1138e9: Minor inline documentation changes.
- 09e935a: Compile a mock SDK on non-windows platforms instead of nothing at all.
- Updated dependencies [fa4206a]
  - @irsdk-node/types@3.0.2

## v4.0.2

- `irsdk-node` Fixes Electron compilation issues (Thank you @tariknz)
- `@irsdk-node/types` Update to generated telemetry types (Thank you @justinmakaila)

## v4.0.0

- BREAKING: Upgrades all API's to support modern node versions. Minimum version increased to Node v18.

## v3.0.0

- BREAKING: Splits irsdk-node package into multiple packages.
- `@irsdk-node/native` module made into optional module.
- `@irsdk-node/types` module added for consuming iRacing types without importing native module.
- BREAKING: SDK now imported asyncronously, so you need to wait for that to complete before using the SDK. (`await sdk.ready()` method added)
- BREAKING: `.isSimRunning()` static method updated to match naming conventions (now `.IsSimRunning()`)
