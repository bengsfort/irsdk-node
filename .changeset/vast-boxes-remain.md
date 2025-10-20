---
"@irsdk-node/types": major
---

Update types to match latest SDK implementation (v1.19).
- Improved inline tsdoc comments for better in-IDE documentation.
- Adds `UNLIMITED_LAPS_COUNT` and `UNLIMITED_TIME_VALUE` constants.
- Adds `StatusField` enum.
- Re-implements/exposes `VarTypes` enum for telemetry variable types, adds `VarType` utility type.
- Adds `VarTypeBytes`, `TrackSurface`, `TrackWetness`, `IncidentFlags`, `IncidentFlagMask`, `EngineWarnings`, `CameraState` enums.
- Added `GlobalFlags.DqScoringInvalid` option to `GlobalFlags`.
- Added `PitCommand.ChangeTireCompound` option to `PitCommand`.
