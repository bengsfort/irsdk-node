# @irsdk-node/types

## 4.0.0

### Major Changes

- 57c2f2f: Update types to match latest SDK implementation (v1.19).
  - Improved inline tsdoc comments for better in-IDE documentation.
  - Adds `UNLIMITED_LAPS_COUNT` and `UNLIMITED_TIME_VALUE` constants.
  - Adds `StatusField` enum.
  - Re-implements/exposes `VarTypes` enum for telemetry variable types, adds `VarType` utility type.
  - Adds `VarTypeBytes`, `TrackSurface`, `TrackWetness`, `IncidentFlags`, `IncidentFlagMask`, `EngineWarnings`, `CameraState` enums.
  - Added `GlobalFlags.DqScoringInvalid` option to `GlobalFlags`.
  - Added `PitCommand.ChangeTireCompound` option to `PitCommand`.

### Minor Changes

- 75d6955: Update to ESM module, revamp internal build to support both CJS and ESM.

## 3.0.3

### Patch Changes

- fc577ee: Readme updated.
- 86eeabe: Updated license to MIT.

## 3.0.2

### Patch Changes

- fa4206a: Update codebase to use pnpm as a package manager for more workspace feature stability.
