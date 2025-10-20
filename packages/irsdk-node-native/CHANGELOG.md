# @irsdk-node/native

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
