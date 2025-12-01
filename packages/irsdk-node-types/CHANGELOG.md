# @irsdk-node/types

## 4.0.4

### Patch Changes

- a0c6cf9: Add utility types for broadcast message API's, allowing more strict typing for known broadcast API variants.

## 4.0.3

### Patch Changes

- 705ed88: Add additional Telemetry variables (Thanks @0xkalle !)

  **Cars run against:**

  - Hyundai Veloster N TCR (No additional variables)
  - Ferrari 499P
  - Dallara IR18
  - Hyundai Elantra N TCR (No additional variables)
  - Audi 90 Quattro GTO
  - Ford Mustang Class A
  - Ford F150 (No additional variables)
  - ARCA Toyota Camry (No additional variables)
  - Gen 4 Chevrolet Monte Carlo (No additional variables)
  - NASCAR Toyota Camry (No additional variables)
  - Supercars Ford Mustang Gen3
  - Porsche 919 2016
  - Porsche Mission R
  - Mercedes-AMG W13 E Performance
  - Super Formula SF23 - Toyota (No additional variables)

  **Added variables:**

  - dcAntiRollFront (number)
  - dcAntiRollRear (number)
  - HFshockDefl (number)
  - HFshockDefl_ST (number)
  - HFshockVel (number)
  - HFshockVel_ST (number)
  - HRshockDefl (number)
  - HRshockDef_ST (number)
  - HRshockVel (number)
  - HRshockVel_ST (number)
  - dcPushToPass (boolean)
  - dpWingRear (number)
  - dcWeightJackerRight (number)
  - dcFuelMixture (number)
  - dcDashPage2 (number)
  - dpQTape (number)
  - dpWeightJackerLeft (number)
  - dpWeightJackerRight (number)
  - dcInLapToggle (boolean)
  - dcFCYToggle (boolean)
  - dcFuelCutPosition (number)
  - dcFuelNoCutToggle (boolean)
  - dcMGUKDeployFixed (number)
  - dcHysBoostHold (boolean)
  - dpPowerSteering (number)
  - dcTractionControl4 (number)
  - dcTractionControl3 (number)
  - dpChargeAddKWh (number)
  - dcEnginePower (number)

## 4.0.2

### Patch Changes

- c161ad9: Updated available types to include types from GT3 cars, Mercedes W12, LMP2 cars, dirt micro sprint cars, dirt mini stock cars, dirt ump modified cars, and formula renault 3.5.

  **Added variables (73 total)**:

  - SteeringFFBEnabled (boolean)
  - PlayerIncidents (number)
  - Shifter (number)
  - dcLowFuelAccept (boolean)
  - dcPowerSteering (number)
  - dcThrottleShape (number)
  - RFodometer (number)
  - LFodometer (number)
  - RRodometer (number)
  - LRodometer (number)
  - dcDRSToggle (boolean)
  - dcTearOffVisor (boolean)
  - dpTireChange (number)
  - dpWingFront (number)
  - dcBrakeBiasFine (number)
  - dcPeakBrakeBias (number)
  - dcBrakeMisc (number)
  - dcEngineBraking (number)
  - dcMGUKDeployMode (number)
  - dcMGUKRegenGain (number)
  - dcDiffEntry (number)
  - dcDiffMiddle (number)
  - dcDiffExit (number)
  - DRS_Status (number)
  - PowerMGU_K (number)
  - TorqueMGU_K (number)
  - PowerMGU_H (number)
  - EnergyERSBattery (number)
  - EnergyERSBatteryPct (number)
  - EnergyBatteryToMGU_KLap (number)
  - EnergyMGU_KLapDeployPct (number)
  - Engine1_RPM (number)
  - CFshockDefl (number)
  - CFshockDefl_ST (number)
  - CFshockVel (number)
  - CFshockVel_ST (number)
  - ROLLFshockDefl (number)
  - ROLLFshockDefl_ST (number)
  - ROLLFshockVel (number)
  - ROLLFshockVel_ST (number)
  - CRshockDefl (number)
  - CRshockDefl_ST (number)
  - CRshockVel (number)
  - CRshockVel_ST (number)
  - ROLLRshockDefl (number)
  - ROLLRshockDefl_ST (number)
  - ROLLRshockVel (number)
  - ROLLRshockVel_ST (number)
  - dcTractionControl2 (number)
  - LRSHshockDefl (number)
  - LRSHshockDefl_ST (number)
  - LRSHshockVel (number)
  - LRSHshockVel_ST (number)
  - RRSHshockDefl (number)
  - RRSHshockDefl_ST (number)
  - RRSHshockVel (number)
  - RRSHshockVel_ST (number)
  - dpRTireChange (number)
  - dpLTireChange (number)
  - LFSHshockDefl (number)
  - LFSHshockDefl_ST (number)
  - LFSHshockVel (number)
  - LFSHshockVel_ST (number)
  - RFSHshockDefl (number)
  - RFSHshockDefl_ST (number)
  - RFSHshockVel (number)
  - RFSHshockVel_ST (number)
  - dcRFBrakeAttachedToggle (boolean)
  - LR2shockDefl (number)
  - LR2shockDefl_ST (number)
  - LR2shockVel (number)
  - LR2shockVel_ST (number)
  - DRS_Count (number)

- c161ad9: Created new telemetry/live data type generation script that can incrementally add missing or updated types.
- 939ed4c: Add `VarTypesReadable` helper map, enabling mapping SDK variable types to human-readable strings for things like code generation and debugging.

## 4.0.1

### Patch Changes

- 1435d80: Update types for Tires and Aero within SetupInfo session data (Thanks @mikey0000)

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
