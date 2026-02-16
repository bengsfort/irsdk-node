Defined in: [telemetry.gen.ts:25](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L25)

## Properties

### AirDensity

> **AirDensity**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1520](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1520)

AirDensity - Density of air at start/finish line

#### Remarks

- Unit of the variable: kg/m^3
- This variable does not count as a time.
- Expected data length: 1

***

### AirPressure

> **AirPressure**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1531](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1531)

AirPressure - Pressure of air at start/finish line

#### Remarks

- Unit of the variable: Pa
- This variable does not count as a time.
- Expected data length: 1

***

### AirTemp

> **AirTemp**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1487](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1487)

AirTemp - Temperature of air at start/finish line

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### Brake

> **Brake**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:981](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L981)

Brake - 0=brake released to 1=max pedal force

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### BrakeABSactive

> **BrakeABSactive**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:2136](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2136)

BrakeABSactive - true if abs is currently reducing brake force pressure

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### BrakeRaw

> **BrakeRaw**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2103](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2103)

BrakeRaw - Raw brake input 0=brake released to 1=max pedal force

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### CamCameraNumber

> **CamCameraNumber**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2004](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2004)

CamCameraNumber - Active camera number

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### CamCameraState

> **CamCameraState**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2026](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2026)

CamCameraState - State of camera system

#### Remarks

- Unit of the variable: irsdk_CameraState
- This variable does not count as a time.
- Expected data length: 1

***

### CamCarIdx

> **CamCarIdx**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1993](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1993)

CamCarIdx - Active camera's focus car index

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### CamGroupNumber

> **CamGroupNumber**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2015](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2015)

CamGroupNumber - Active camera group number

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### CarDistAhead

> **CarDistAhead**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1124](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1124)

CarDistAhead - Distance to first car in front of player in meters

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### CarDistBehind

> **CarDistBehind**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1135](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1135)

CarDistBehind - Distance to first car behind player in meters

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### CarIdxBestLapNum

> **CarIdxBestLapNum**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:805](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L805)

CarIdxBestLapNum - Cars best lap number

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxBestLapTime

> **CarIdxBestLapTime**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:794](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L794)

CarIdxBestLapTime - Cars best lap time

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxClass

> **CarIdxClass**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:750](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L750)

CarIdxClass - Cars class id by car index

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxClassPosition

> **CarIdxClassPosition**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:739](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L739)

CarIdxClassPosition - Cars class position in race by car index

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxEstTime

> **CarIdxEstTime**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:772](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L772)

CarIdxEstTime - Estimated time to reach current location on track

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxF2Time

> **CarIdxF2Time**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:761](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L761)

CarIdxF2Time - Race time behind leader or fastest lap time otherwise

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxFastRepairsUsed

> **CarIdxFastRepairsUsed**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:849](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L849)

CarIdxFastRepairsUsed - How many fast repairs each car has used

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxGear

> **CarIdxGear**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:948](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L948)

CarIdxGear - -1=reverse  0=neutral  1..n=current gear by car index

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxLap

> **CarIdxLap**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:662](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L662)

CarIdxLap - Laps started by car index

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxLapCompleted

> **CarIdxLapCompleted**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:673](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L673)

CarIdxLapCompleted - Laps completed by car index

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxLapDistPct

> **CarIdxLapDistPct**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:684](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L684)

CarIdxLapDistPct - Percentage distance around lap by car index

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxLastLapTime

> **CarIdxLastLapTime**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:783](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L783)

CarIdxLastLapTime - Cars last lap time

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxOnPitRoad

> **CarIdxOnPitRoad**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:717](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L717)

CarIdxOnPitRoad - On pit road between the cones by car index

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxP2P\_Count

> **CarIdxP2P\_Count**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2268](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2268)

CarIdxP2P_Count - Push2Pass count of usage (or remaining in Race)

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxP2P\_Status

> **CarIdxP2P\_Status**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:2257](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2257)

CarIdxP2P_Status - Push2Pass active or not

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxPaceFlags

> **CarIdxPaceFlags**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:904](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L904)

CarIdxPaceFlags - Pacing status flags for each car

#### Remarks

- Unit of the variable: irsdk_PaceFlags
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxPaceLine

> **CarIdxPaceLine**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:882](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L882)

CarIdxPaceLine - What line cars are pacing in  or -1 if not pacing

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxPaceRow

> **CarIdxPaceRow**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:893](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L893)

CarIdxPaceRow - What row cars are pacing in  or -1 if not pacing

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxPosition

> **CarIdxPosition**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:728](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L728)

CarIdxPosition - Cars position in race by car index

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxQualTireCompound

> **CarIdxQualTireCompound**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:827](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L827)

CarIdxQualTireCompound - Cars Qual tire compound

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxQualTireCompoundLocked

> **CarIdxQualTireCompoundLocked**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:838](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L838)

CarIdxQualTireCompoundLocked - Cars Qual tire compound is locked-in

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxRPM

> **CarIdxRPM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:937](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L937)

CarIdxRPM - Engine rpm by car index

#### Remarks

- Unit of the variable: revs/min
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxSessionFlags

> **CarIdxSessionFlags**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:860](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L860)

CarIdxSessionFlags - Session flags for each player

#### Remarks

- Unit of the variable: irsdk_Flags
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxSteer

> **CarIdxSteer**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:926](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L926)

CarIdxSteer - Steering wheel angle by car index

#### Remarks

- Unit of the variable: rad
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxTireCompound

> **CarIdxTireCompound**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:816](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L816)

CarIdxTireCompound - Cars current tire compound

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxTrackSurface

> **CarIdxTrackSurface**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:695](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L695)

CarIdxTrackSurface - Track surface type by car index

#### Remarks

- Unit of the variable: irsdk_TrkLoc
- This variable does not count as a time.
- Expected data length: 64

***

### CarIdxTrackSurfaceMaterial

> **CarIdxTrackSurfaceMaterial**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:706](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L706)

CarIdxTrackSurfaceMaterial - Track surface material type by car index

#### Remarks

- Unit of the variable: irsdk_TrkSurf
- This variable does not count as a time.
- Expected data length: 64

***

### CarLeftRight

> **CarLeftRight**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1685](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1685)

CarLeftRight - Notify if car is to the left or right of driver

#### Remarks

- Unit of the variable: irsdk_CarLeftRight
- This variable does not count as a time.
- Expected data length: 1

***

### CFshockDefl

> **CFshockDefl**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3973](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3973)

CFshockDefl - CF shock deflection

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### CFshockDefl\_ST

> **CFshockDefl\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3984](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3984)

CFshockDefl_ST - CF shock deflection at 360 Hz

#### Remarks

- Unit of the variable: m
- This variable counts as a time.
- Expected data length: 6

***

### CFshockVel

> **CFshockVel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3995](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3995)

CFshockVel - CF shock velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### CFshockVel\_ST

> **CFshockVel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4006](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4006)

CFshockVel_ST - CF shock velocity at 360 Hz

#### Remarks

- Unit of the variable: m/s
- This variable counts as a time.
- Expected data length: 6

***

### ChanAvgLatency

> **ChanAvgLatency**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:387](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L387)

ChanAvgLatency - Communications average latency

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### ChanClockSkew

> **ChanClockSkew**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:442](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L442)

ChanClockSkew - Communications server clock skew

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### ChanLatency

> **ChanLatency**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:398](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L398)

ChanLatency - Communications latency

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### ChanPartnerQuality

> **ChanPartnerQuality**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:420](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L420)

ChanPartnerQuality - Partner communications quality

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### ChanQuality

> **ChanQuality**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:409](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L409)

ChanQuality - Communications quality

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### Clutch

> **Clutch**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:992](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L992)

Clutch - 0=disengaged to 1=fully engaged

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### ClutchRaw

> **ClutchRaw**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2114](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2114)

ClutchRaw - Raw clutch input 0=disengaged to 1=fully engaged

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### CpuUsageBG

> **CpuUsageBG**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:431](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L431)

CpuUsageBG - Percent of available time bg thread took with a 1 sec avg

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### CpuUsageFG

> **CpuUsageFG**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:365](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L365)

CpuUsageFG - Percent of available time fg thread took with a 1 sec avg

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### CRshockDefl

> **CRshockDefl**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4061](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4061)

CRshockDefl - CR shock deflection

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### CRshockDefl\_ST

> **CRshockDefl\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4072](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4072)

CRshockDefl_ST - CR shock deflection at 360 Hz

#### Remarks

- Unit of the variable: m
- This variable counts as a time.
- Expected data length: 6

***

### CRshockVel

> **CRshockVel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4083](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4083)

CRshockVel - CR shock velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### CRshockVel\_ST

> **CRshockVel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4094](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4094)

CRshockVel_ST - CR shock velocity at 360 Hz

#### Remarks

- Unit of the variable: m/s
- This variable counts as a time.
- Expected data length: 6

***

### dcABS

> **dcABS**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2994](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2994)

dcABS - In car abs adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcAntiRollFront

> **dcAntiRollFront**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4435](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4435)

dcAntiRollFront - In car front anti roll bar adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcAntiRollRear

> **dcAntiRollRear**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4446](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4446)

dcAntiRollRear - In car rear anti roll bar adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcBrakeBias

> **dcBrakeBias**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2928](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2928)

dcBrakeBias - In car brake bias adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcBrakeBiasFine

> **dcBrakeBiasFine**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3775](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3775)

dcBrakeBiasFine - In car brake bias fine adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcBrakeMisc

> **dcBrakeMisc**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3797](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3797)

dcBrakeMisc - In car brake misc adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcDashPage

> **dcDashPage**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2906](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2906)

dcDashPage - In car dash display page adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcDashPage2

> **dcDashPage2**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4589](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4589)

dcDashPage2 - In car second dash display page adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcDiffEntry

> **dcDiffEntry**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3841](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3841)

dcDiffEntry - In car diff entry adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcDiffExit

> **dcDiffExit**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3863](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3863)

dcDiffExit - In car diff exit adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcDiffMiddle

> **dcDiffMiddle**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3852](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3852)

dcDiffMiddle - In car diff middle adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### DCDriversSoFar

> **DCDriversSoFar**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1652](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1652)

DCDriversSoFar - Number of team drivers who have run a stint

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcDRSToggle

> **dcDRSToggle**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:3731](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3731)

dcDRSToggle - In car toggle DRS

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcEngineBraking

> **dcEngineBraking**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3808](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3808)

dcEngineBraking - In car engine braking adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcEnginePower

> **dcEnginePower**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4743](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4743)

dcEnginePower - In car engine power adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcFCYToggle

> **dcFCYToggle**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:4644](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4644)

dcFCYToggle - In car toggle full course yellow mode

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcFuelCutPosition

> **dcFuelCutPosition**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4655](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4655)

dcFuelCutPosition - In car adv end straight fuel cut

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcFuelMixture

> **dcFuelMixture**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4578](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4578)

dcFuelMixture - In car fuel mixture adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcFuelNoCutToggle

> **dcFuelNoCutToggle**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:4666](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4666)

dcFuelNoCutToggle - In car fuel cut on straight active

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcHeadlightFlash

> **dcHeadlightFlash**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:2774](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2774)

dcHeadlightFlash - In car headlight flash control active

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcHysBoostHold

> **dcHysBoostHold**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:4688](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4688)

dcHysBoostHold - In car hold HYS deploy

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcInLapToggle

> **dcInLapToggle**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:4633](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4633)

dcInLapToggle - In car toggle in lap settings

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### DCLapStatus

> **DCLapStatus**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1641](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1641)

DCLapStatus - Status of driver change lap requirements

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcLaunchRPM

> **dcLaunchRPM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4424](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4424)

dcLaunchRPM - In car launch rpm adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcLowFuelAccept

> **dcLowFuelAccept**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:2785](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2785)

dcLowFuelAccept - In car low fuel accept

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcMGUKDeployFixed

> **dcMGUKDeployFixed**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4677](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4677)

dcMGUKDeployFixed - In car MGU-K fixed deployment level adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcMGUKDeployMode

> **dcMGUKDeployMode**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3819](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3819)

dcMGUKDeployMode - In car MGU-K deployment mode level adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcMGUKRegenGain

> **dcMGUKRegenGain**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3830](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3830)

dcMGUKRegenGain - In car MUG-K re-gen gain adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcPeakBrakeBias

> **dcPeakBrakeBias**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3786](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3786)

dcPeakBrakeBias - In car peak brake bias adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcPitSpeedLimiterToggle

> **dcPitSpeedLimiterToggle**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:2752](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2752)

dcPitSpeedLimiterToggle - Track if pit speed limiter system is enabled

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcPowerSteering

> **dcPowerSteering**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2917](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2917)

dcPowerSteering - In car power steering adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcPushToPass

> **dcPushToPass**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:4545](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4545)

dcPushToPass - In car trigger push to pass

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcRFBrakeAttachedToggle

> **dcRFBrakeAttachedToggle**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:4358](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4358)

dcRFBrakeAttachedToggle - In car Right Front Brake attached(1) or detached(0)

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcStarter

> **dcStarter**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:2741](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2741)

dcStarter - In car trigger car starter

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcTearOffVisor

> **dcTearOffVisor**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:3742](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3742)

dcTearOffVisor - In car tear off visor film

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcThrottleShape

> **dcThrottleShape**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3005](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3005)

dcThrottleShape - In car throttle shape adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcToggleWindshieldWipers

> **dcToggleWindshieldWipers**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:3016](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3016)

dcToggleWindshieldWipers - In car turn wipers on or off

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcTractionControl

> **dcTractionControl**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2983](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2983)

dcTractionControl - In car traction control adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcTractionControl2

> **dcTractionControl2**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4149](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4149)

dcTractionControl2 - In car traction control 2 adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcTractionControl3

> **dcTractionControl3**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4721](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4721)

dcTractionControl3 - In car traction control 3 adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcTractionControl4

> **dcTractionControl4**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4710](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4710)

dcTractionControl4 - In car traction control 4 adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcTractionControlToggle

> **dcTractionControlToggle**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:2763](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2763)

dcTractionControlToggle - In car traction control active

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcTriggerWindshieldWipers

> **dcTriggerWindshieldWipers**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:3027](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3027)

dcTriggerWindshieldWipers - In car momentarily turn on wipers

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dcWeightJackerRight

> **dcWeightJackerRight**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4567](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4567)

dcWeightJackerRight - In car right wedge/weight jacker adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### DisplayUnits

> **DisplayUnits**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:222](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L222)

DisplayUnits - Default units for the user interface 0 = english 1 = metric

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpChargeAddKWh

> **dpChargeAddKWh**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4732](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4732)

dpChargeAddKWh - Pitstop charge add amount

#### Remarks

- Unit of the variable: kWh
- This variable does not count as a time.
- Expected data length: 1

***

### dpFastRepair

> **dpFastRepair**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2895](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2895)

dpFastRepair - Pitstop fast repair set

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpFuelAddKg

> **dpFuelAddKg**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2884](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2884)

dpFuelAddKg - Pitstop fuel add amount

#### Remarks

- Unit of the variable: kg
- This variable does not count as a time.
- Expected data length: 1

***

### dpFuelAutoFillActive

> **dpFuelAutoFillActive**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2862](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2862)

dpFuelAutoFillActive - Pitstop auto fill fuel next stop flag

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpFuelAutoFillEnabled

> **dpFuelAutoFillEnabled**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2851](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2851)

dpFuelAutoFillEnabled - Pitstop auto fill fuel system enabled

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpFuelFill

> **dpFuelFill**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2840](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2840)

dpFuelFill - Pitstop fuel fill flag

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpLFTireChange

> **dpLFTireChange**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2807](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2807)

dpLFTireChange - Pitstop lf tire change request

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpLFTireColdPress

> **dpLFTireColdPress**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2939](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2939)

dpLFTireColdPress - Pitstop lf tire cold pressure adjustment

#### Remarks

- Unit of the variable: Pa
- This variable does not count as a time.
- Expected data length: 1

***

### dpLRTireChange

> **dpLRTireChange**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2829](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2829)

dpLRTireChange - Pitstop lr tire change request

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpLRTireColdPress

> **dpLRTireColdPress**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2961](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2961)

dpLRTireColdPress - Pitstop lr tire cold pressure adjustment

#### Remarks

- Unit of the variable: Pa
- This variable does not count as a time.
- Expected data length: 1

***

### dpLTireChange

> **dpLTireChange**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4259](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4259)

dpLTireChange - Pitstop left tire change request

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpPowerSteering

> **dpPowerSteering**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4699](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4699)

dpPowerSteering - Pitstop power steering adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpQTape

> **dpQTape**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4600](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4600)

dpQTape - Pitstop qualify tape adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpRFTireChange

> **dpRFTireChange**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2796](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2796)

dpRFTireChange - Pitstop rf tire change request

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpRFTireColdPress

> **dpRFTireColdPress**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2950](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2950)

dpRFTireColdPress - Pitstop rf cold tire pressure adjustment

#### Remarks

- Unit of the variable: Pa
- This variable does not count as a time.
- Expected data length: 1

***

### dpRRTireChange

> **dpRRTireChange**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2818](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2818)

dpRRTireChange - Pitstop rr tire change request

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpRRTireColdPress

> **dpRRTireColdPress**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2972](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2972)

dpRRTireColdPress - Pitstop rr cold tire pressure adjustment

#### Remarks

- Unit of the variable: Pa
- This variable does not count as a time.
- Expected data length: 1

***

### dpRTireChange

> **dpRTireChange**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4248](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4248)

dpRTireChange - Pitstop right tire change request

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpTireChange

> **dpTireChange**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3753](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3753)

dpTireChange - Pitstop all tire change request

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpWeightJackerLeft

> **dpWeightJackerLeft**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4611](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4611)

dpWeightJackerLeft - Pitstop left wedge/weight jacker adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpWeightJackerRight

> **dpWeightJackerRight**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4622](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4622)

dpWeightJackerRight - Pitstop right wedge/weight jacker adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpWindshieldTearoff

> **dpWindshieldTearoff**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2873](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2873)

dpWindshieldTearoff - Pitstop windshield tearoff

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpWingFront

> **dpWingFront**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3764](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3764)

dpWingFront - Pitstop front wing adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### dpWingRear

> **dpWingRear**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4556](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4556)

dpWingRear - Pitstop rear wing adjustment

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### DriverMarker

> **DriverMarker**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:233](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L233)

DriverMarker - Driver activated flag

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### DRS\_Count

> **DRS\_Count**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4413](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4413)

DRS_Count - Drag Reduction System count of usage

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### DRS\_Status

> **DRS\_Status**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3874](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3874)

DRS_Status - Drag Reduction System Status

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### EnergyBatteryToMGU\_KLap

> **EnergyBatteryToMGU\_KLap**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3940](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3940)

EnergyBatteryToMGU_KLap - Electrical energy from battery to MGU-K per lap

#### Remarks

- Unit of the variable: J
- This variable does not count as a time.
- Expected data length: 1

***

### EnergyERSBattery

> **EnergyERSBattery**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3918](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3918)

EnergyERSBattery - Engine ERS battery charge

#### Remarks

- Unit of the variable: J
- This variable does not count as a time.
- Expected data length: 1

***

### EnergyERSBatteryPct

> **EnergyERSBatteryPct**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3929](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3929)

EnergyERSBatteryPct - Engine ERS battery charge as a percent

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### EnergyMGU\_KLapDeployPct

> **EnergyMGU\_KLapDeployPct**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3951](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3951)

EnergyMGU_KLapDeployPct - Electrical energy available to MGU-K per lap as a percent

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### Engine0\_RPM

> **Engine0\_RPM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3346](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3346)

Engine0_RPM - Engine0Engine rpm

#### Remarks

- Unit of the variable: revs/min
- This variable does not count as a time.
- Expected data length: 1

***

### Engine1\_RPM

> **Engine1\_RPM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3962](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3962)

Engine1_RPM - Engine1Engine rpm

#### Remarks

- Unit of the variable: revs/min
- This variable does not count as a time.
- Expected data length: 1

***

### EngineWarnings

> **EngineWarnings**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2158](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2158)

EngineWarnings - Bitfield for warning lights

#### Remarks

- Unit of the variable: irsdk_EngineWarnings
- This variable does not count as a time.
- Expected data length: 1

***

### EnterExitReset

> **EnterExitReset**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1454](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1454)

EnterExitReset - Indicate action the reset key will take 0 enter 1 exit 2 reset

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### FastRepairAvailable

> **FastRepairAvailable**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1784](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1784)

FastRepairAvailable - How many fast repairs left  255 is unlimited

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### FastRepairUsed

> **FastRepairUsed**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1773](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1773)

FastRepairUsed - How many fast repairs used so far

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### FogLevel

> **FogLevel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1575](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1575)

FogLevel - Fog level at start/finish line

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### FrameRate

> **FrameRate**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:354](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L354)

FrameRate - Average frames per second

#### Remarks

- Unit of the variable: fps
- This variable does not count as a time.
- Expected data length: 1

***

### FrontTireSetsAvailable

> **FrontTireSetsAvailable**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1960](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1960)

FrontTireSetsAvailable - How many front tire sets are remaining  255 is unlimited

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### FrontTireSetsUsed

> **FrontTireSetsUsed**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1861](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1861)

FrontTireSetsUsed - How many front tire sets used so far

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### FuelLevel

> **FuelLevel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3335](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3335)

FuelLevel - Liters of fuel remaining

#### Remarks

- Unit of the variable: l
- This variable does not count as a time.
- Expected data length: 1

***

### FuelLevelPct

> **FuelLevelPct**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2169](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2169)

FuelLevelPct - Percent fuel remaining

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### FuelPress

> **FuelPress**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3280](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3280)

FuelPress - Engine fuel pressure

#### Remarks

- Unit of the variable: bar
- This variable does not count as a time.
- Expected data length: 1

***

### FuelUsePerHour

> **FuelUsePerHour**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3236](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3236)

FuelUsePerHour - Engine fuel used instantaneous

#### Remarks

- Unit of the variable: kg/h
- This variable does not count as a time.
- Expected data length: 1

***

### Gear

> **Gear**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1003](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1003)

Gear - -1=reverse  0=neutral  1..n=current gear

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### GpuUsage

> **GpuUsage**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:376](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L376)

GpuUsage - Percent of available time gpu took with a 1 sec avg

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### HandbrakeRaw

> **HandbrakeRaw**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2125](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2125)

HandbrakeRaw - Raw handbrake input 0=handbrake released to 1=max force

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### HFshockDefl

> **HFshockDefl**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4457](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4457)

HFshockDefl - HF shock deflection

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### HFshockDefl\_ST

> **HFshockDefl\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4468](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4468)

HFshockDefl_ST - HF shock deflection at 360 Hz

#### Remarks

- Unit of the variable: m
- This variable counts as a time.
- Expected data length: 6

***

### HFshockVel

> **HFshockVel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4479](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4479)

HFshockVel - HF shock velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### HFshockVel\_ST

> **HFshockVel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4490](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4490)

HFshockVel_ST - HF shock velocity at 360 Hz

#### Remarks

- Unit of the variable: m/s
- This variable counts as a time.
- Expected data length: 6

***

### HRshockDefl

> **HRshockDefl**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4501](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4501)

HRshockDefl - HR shock deflection

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### HRshockDefl\_ST

> **HRshockDefl\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4512](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4512)

HRshockDefl_ST - HR shock deflection at 360 Hz

#### Remarks

- Unit of the variable: m
- This variable counts as a time.
- Expected data length: 6

***

### HRshockVel

> **HRshockVel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4523](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4523)

HRshockVel - HR shock velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### HRshockVel\_ST

> **HRshockVel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4534](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4534)

HRshockVel_ST - HR shock velocity at 360 Hz

#### Remarks

- Unit of the variable: m/s
- This variable counts as a time.
- Expected data length: 6

***

### IsDiskLoggingActive

> **IsDiskLoggingActive**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:343](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L343)

IsDiskLoggingActive - 0=disk based telemetry file not being written  1=being written

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### IsDiskLoggingEnabled

> **IsDiskLoggingEnabled**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:332](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L332)

IsDiskLoggingEnabled - 0=disk based telemetry turned off  1=turned on

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### IsGarageVisible

> **IsGarageVisible**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:2422](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2422)

IsGarageVisible - 1=Garage screen is visible

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### IsInGarage

> **IsInGarage**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:2048](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2048)

IsInGarage - 1=Car in garage physics running

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### IsOnTrack

> **IsOnTrack**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:288](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L288)

IsOnTrack - 1=Car on track physics running with player in car

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### IsOnTrackCar

> **IsOnTrackCar**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:2037](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2037)

IsOnTrackCar - 1=Car on track physics running

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### IsReplayPlaying

> **IsReplayPlaying**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:299](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L299)

IsReplayPlaying - 0=replay not playing  1=replay playing

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### Lap

> **Lap**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1069](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1069)

Lap - Laps started count

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LapBestLap

> **LapBestLap**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1146](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1146)

LapBestLap - Players best lap number

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LapBestLapTime

> **LapBestLapTime**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1157](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1157)

LapBestLapTime - Players best lap time

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### LapBestNLapLap

> **LapBestNLapLap**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1212](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1212)

LapBestNLapLap - Player last lap in best N average lap time

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LapBestNLapTime

> **LapBestNLapTime**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1223](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1223)

LapBestNLapTime - Player best N average lap time

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### LapCompleted

> **LapCompleted**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1080](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1080)

LapCompleted - Laps completed count

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LapCurrentLapTime

> **LapCurrentLapTime**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1179](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1179)

LapCurrentLapTime - Estimate of players current lap time as shown in F3 box

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### LapDeltaToBestLap

> **LapDeltaToBestLap**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1234](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1234)

LapDeltaToBestLap - Delta time for best lap

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### LapDeltaToBestLap\_DD

> **LapDeltaToBestLap\_DD**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1245](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1245)

LapDeltaToBestLap_DD - Rate of change of delta time for best lap

#### Remarks

- Unit of the variable: s/s
- This variable does not count as a time.
- Expected data length: 1

***

### LapDeltaToBestLap\_OK

> **LapDeltaToBestLap\_OK**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:1256](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1256)

LapDeltaToBestLap_OK - Delta time for best lap is valid

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LapDeltaToOptimalLap

> **LapDeltaToOptimalLap**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1267](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1267)

LapDeltaToOptimalLap - Delta time for optimal lap

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### LapDeltaToOptimalLap\_DD

> **LapDeltaToOptimalLap\_DD**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1278](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1278)

LapDeltaToOptimalLap_DD - Rate of change of delta time for optimal lap

#### Remarks

- Unit of the variable: s/s
- This variable does not count as a time.
- Expected data length: 1

***

### LapDeltaToOptimalLap\_OK

> **LapDeltaToOptimalLap\_OK**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:1289](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1289)

LapDeltaToOptimalLap_OK - Delta time for optimal lap is valid

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LapDeltaToSessionBestLap

> **LapDeltaToSessionBestLap**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1300](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1300)

LapDeltaToSessionBestLap - Delta time for session best lap

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### LapDeltaToSessionBestLap\_DD

> **LapDeltaToSessionBestLap\_DD**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1311](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1311)

LapDeltaToSessionBestLap_DD - Rate of change of delta time for session best lap

#### Remarks

- Unit of the variable: s/s
- This variable does not count as a time.
- Expected data length: 1

***

### LapDeltaToSessionBestLap\_OK

> **LapDeltaToSessionBestLap\_OK**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:1322](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1322)

LapDeltaToSessionBestLap_OK - Delta time for session best lap is valid

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LapDeltaToSessionLastlLap

> **LapDeltaToSessionLastlLap**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1366](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1366)

LapDeltaToSessionLastlLap - Delta time for session last lap

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### LapDeltaToSessionLastlLap\_DD

> **LapDeltaToSessionLastlLap\_DD**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1377](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1377)

LapDeltaToSessionLastlLap_DD - Rate of change of delta time for session last lap

#### Remarks

- Unit of the variable: s/s
- This variable does not count as a time.
- Expected data length: 1

***

### LapDeltaToSessionLastlLap\_OK

> **LapDeltaToSessionLastlLap\_OK**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:1388](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1388)

LapDeltaToSessionLastlLap_OK - Delta time for session last lap is valid

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LapDeltaToSessionOptimalLap

> **LapDeltaToSessionOptimalLap**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1333](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1333)

LapDeltaToSessionOptimalLap - Delta time for session optimal lap

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### LapDeltaToSessionOptimalLap\_DD

> **LapDeltaToSessionOptimalLap\_DD**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1344](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1344)

LapDeltaToSessionOptimalLap_DD - Rate of change of delta time for session optimal lap

#### Remarks

- Unit of the variable: s/s
- This variable does not count as a time.
- Expected data length: 1

***

### LapDeltaToSessionOptimalLap\_OK

> **LapDeltaToSessionOptimalLap\_OK**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:1355](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1355)

LapDeltaToSessionOptimalLap_OK - Delta time for session optimal lap is valid

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LapDist

> **LapDist**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1091](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1091)

LapDist - Meters traveled from S/F this lap

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### LapDistPct

> **LapDistPct**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1102](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1102)

LapDistPct - Percentage distance around lap

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### LapLasNLapSeq

> **LapLasNLapSeq**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1190](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1190)

LapLasNLapSeq - Player num consecutive clean laps completed for N average

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LapLastLapTime

> **LapLastLapTime**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1168](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1168)

LapLastLapTime - Players last lap time

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### LapLastNLapTime

> **LapLastNLapTime**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1201](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1201)

LapLastNLapTime - Player last N average lap time

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### LatAccel

> **LatAccel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2719](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2719)

LatAccel - Lateral acceleration (including gravity)

#### Remarks

- Unit of the variable: m/s^2
- This variable does not count as a time.
- Expected data length: 1

***

### LatAccel\_ST

> **LatAccel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2686](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2686)

LatAccel_ST - Lateral acceleration (including gravity) at 360 Hz

#### Remarks

- Unit of the variable: m/s^2
- This variable counts as a time.
- Expected data length: 6

***

### LeftTireSetsAvailable

> **LeftTireSetsAvailable**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1938](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1938)

LeftTireSetsAvailable - How many left tire sets are remaining  255 is unlimited

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LeftTireSetsUsed

> **LeftTireSetsUsed**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1839](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1839)

LeftTireSetsUsed - How many left tire sets used so far

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LFbrakeLinePress

> **LFbrakeLinePress**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3137](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3137)

LFbrakeLinePress - LF brake line pressure

#### Remarks

- Unit of the variable: bar
- This variable does not count as a time.
- Expected data length: 1

***

### LFcoldPressure

> **LFcoldPressure**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3148](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3148)

LFcoldPressure - LF tire cold pressure  as set in the garage

#### Remarks

- Unit of the variable: kPa
- This variable does not count as a time.
- Expected data length: 1

***

### LFodometer

> **LFodometer**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3159](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3159)

LFodometer - LF distance tire traveled since being placed on car

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### LFshockDefl

> **LFshockDefl**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3643](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3643)

LFshockDefl - LF shock deflection

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### LFshockDefl\_ST

> **LFshockDefl\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3654](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3654)

LFshockDefl_ST - LF shock deflection at 360 Hz

#### Remarks

- Unit of the variable: m
- This variable counts as a time.
- Expected data length: 6

***

### LFshockVel

> **LFshockVel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3665](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3665)

LFshockVel - LF shock velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### LFshockVel\_ST

> **LFshockVel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3676](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3676)

LFshockVel_ST - LF shock velocity at 360 Hz

#### Remarks

- Unit of the variable: m/s
- This variable counts as a time.
- Expected data length: 6

***

### LFSHshockDefl

> **LFSHshockDefl**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4270](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4270)

LFSHshockDefl - LFSH shock deflection

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### LFSHshockDefl\_ST

> **LFSHshockDefl\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4281](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4281)

LFSHshockDefl_ST - LFSH shock deflection at 360 Hz

#### Remarks

- Unit of the variable: m
- This variable counts as a time.
- Expected data length: 6

***

### LFSHshockVel

> **LFSHshockVel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4292](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4292)

LFSHshockVel - LFSH shock velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### LFSHshockVel\_ST

> **LFSHshockVel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4303](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4303)

LFSHshockVel_ST - LFSH shock velocity at 360 Hz

#### Remarks

- Unit of the variable: m/s
- This variable counts as a time.
- Expected data length: 6

***

### LFtempCL

> **LFtempCL**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3170](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3170)

LFtempCL - LF tire left carcass temperature

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### LFtempCM

> **LFtempCM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3181](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3181)

LFtempCM - LF tire middle carcass temperature

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### LFtempCR

> **LFtempCR**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3192](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3192)

LFtempCR - LF tire right carcass temperature

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### LFTiresAvailable

> **LFTiresAvailable**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1894](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1894)

LFTiresAvailable - How many left front tires are remaining  255 is unlimited

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LFTiresUsed

> **LFTiresUsed**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1795](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1795)

LFTiresUsed - How many left front tires used so far

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LFwearL

> **LFwearL**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3203](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3203)

LFwearL - LF tire left percent tread remaining

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### LFwearM

> **LFwearM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3214](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3214)

LFwearM - LF tire middle percent tread remaining

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### LFwearR

> **LFwearR**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3225](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3225)

LFwearR - LF tire right percent tread remaining

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### LoadNumTextures

> **LoadNumTextures**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:1674](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1674)

LoadNumTextures - True if the car_num texture will be loaded

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LongAccel

> **LongAccel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2730](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2730)

LongAccel - Longitudinal acceleration (including gravity)

#### Remarks

- Unit of the variable: m/s^2
- This variable does not count as a time.
- Expected data length: 1

***

### LongAccel\_ST

> **LongAccel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2697](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2697)

LongAccel_ST - Longitudinal acceleration (including gravity) at 360 Hz

#### Remarks

- Unit of the variable: m/s^2
- This variable counts as a time.
- Expected data length: 6

***

### LR2shockDefl

> **LR2shockDefl**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4369](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4369)

LR2shockDefl - LR2 shock deflection

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### LR2shockDefl\_ST

> **LR2shockDefl\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4380](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4380)

LR2shockDefl_ST - LR2 shock deflection at 360 Hz

#### Remarks

- Unit of the variable: m
- This variable counts as a time.
- Expected data length: 6

***

### LR2shockVel

> **LR2shockVel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4391](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4391)

LR2shockVel - LR2 shock velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### LR2shockVel\_ST

> **LR2shockVel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4402](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4402)

LR2shockVel_ST - LR2 shock velocity at 360 Hz

#### Remarks

- Unit of the variable: m/s
- This variable counts as a time.
- Expected data length: 6

***

### LRbrakeLinePress

> **LRbrakeLinePress**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3456](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3456)

LRbrakeLinePress - LR brake line pressure

#### Remarks

- Unit of the variable: bar
- This variable does not count as a time.
- Expected data length: 1

***

### LRcoldPressure

> **LRcoldPressure**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3467](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3467)

LRcoldPressure - LR tire cold pressure  as set in the garage

#### Remarks

- Unit of the variable: kPa
- This variable does not count as a time.
- Expected data length: 1

***

### LRodometer

> **LRodometer**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3478](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3478)

LRodometer - LR distance tire traveled since being placed on car

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### LRshockDefl

> **LRshockDefl**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3555](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3555)

LRshockDefl - LR shock deflection

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### LRshockDefl\_ST

> **LRshockDefl\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3566](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3566)

LRshockDefl_ST - LR shock deflection at 360 Hz

#### Remarks

- Unit of the variable: m
- This variable counts as a time.
- Expected data length: 6

***

### LRshockVel

> **LRshockVel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3577](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3577)

LRshockVel - LR shock velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### LRshockVel\_ST

> **LRshockVel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3588](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3588)

LRshockVel_ST - LR shock velocity at 360 Hz

#### Remarks

- Unit of the variable: m/s
- This variable counts as a time.
- Expected data length: 6

***

### LRSHshockDefl

> **LRSHshockDefl**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4160](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4160)

LRSHshockDefl - LRSH shock deflection

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### LRSHshockDefl\_ST

> **LRSHshockDefl\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4171](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4171)

LRSHshockDefl_ST - LRSH shock deflection at 360 Hz

#### Remarks

- Unit of the variable: m
- This variable counts as a time.
- Expected data length: 6

***

### LRSHshockVel

> **LRSHshockVel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4182](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4182)

LRSHshockVel - LRSH shock velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### LRSHshockVel\_ST

> **LRSHshockVel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4193](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4193)

LRSHshockVel_ST - LRSH shock velocity at 360 Hz

#### Remarks

- Unit of the variable: m/s
- This variable counts as a time.
- Expected data length: 6

***

### LRtempCL

> **LRtempCL**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3489](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3489)

LRtempCL - LR tire left carcass temperature

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### LRtempCM

> **LRtempCM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3500](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3500)

LRtempCM - LR tire middle carcass temperature

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### LRtempCR

> **LRtempCR**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3511](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3511)

LRtempCR - LR tire right carcass temperature

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### LRTiresAvailable

> **LRTiresAvailable**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1916](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1916)

LRTiresAvailable - How many left rear tires are remaining  255 is unlimited

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LRTiresUsed

> **LRTiresUsed**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1817](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1817)

LRTiresUsed - How many left rear tires used so far

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### LRwearL

> **LRwearL**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3522](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3522)

LRwearL - LR tire left percent tread remaining

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### LRwearM

> **LRwearM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3533](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3533)

LRwearM - LR tire middle percent tread remaining

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### LRwearR

> **LRwearR**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3544](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3544)

LRwearR - LR tire right percent tread remaining

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### ManifoldPress

> **ManifoldPress**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3324](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3324)

ManifoldPress - Engine manifold pressure

#### Remarks

- Unit of the variable: bar
- This variable does not count as a time.
- Expected data length: 1

***

### ManualBoost

> **ManualBoost**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:266](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L266)

ManualBoost - Hybrid manual boost state

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### ManualNoBoost

> **ManualNoBoost**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:277](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L277)

ManualNoBoost - Hybrid manual no boost state

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### MemPageFaultSec

> **MemPageFaultSec**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:453](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L453)

MemPageFaultSec - Memory page faults per second

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### MemSoftPageFaultSec

> **MemSoftPageFaultSec**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:464](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L464)

MemSoftPageFaultSec - Memory soft page faults per second

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### OilLevel

> **OilLevel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3313](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3313)

OilLevel - Engine oil level

#### Remarks

- Unit of the variable: l
- This variable does not count as a time.
- Expected data length: 1

***

### OilPress

> **OilPress**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3302](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3302)

OilPress - Engine oil pressure

#### Remarks

- Unit of the variable: bar
- This variable does not count as a time.
- Expected data length: 1

***

### OilTemp

> **OilTemp**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3291](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3291)

OilTemp - Engine oil temperature

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### OkToReloadTextures

> **OkToReloadTextures**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:1663](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1663)

OkToReloadTextures - True if it is ok to reload car textures at this time

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### OnPitRoad

> **OnPitRoad**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:915](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L915)

OnPitRoad - Is the player car on pit road between the cones

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### P2P\_Count

> **P2P\_Count**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2290](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2290)

P2P_Count - Push2Pass count of usage (or remaining in Race) on your car

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### P2P\_Status

> **P2P\_Status**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:2279](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2279)

P2P_Status - Push2Pass active or not on your car

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### PaceMode

> **PaceMode**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:871](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L871)

PaceMode - Are we pacing or not

#### Remarks

- Unit of the variable: irsdk_PaceMode
- This variable does not count as a time.
- Expected data length: 1

***

### Pitch

> **Pitch**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1432](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1432)

Pitch - Pitch orientation

#### Remarks

- Unit of the variable: rad
- This variable does not count as a time.
- Expected data length: 1

***

### PitchRate

> **PitchRate**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2653](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2653)

PitchRate - Pitch rate

#### Remarks

- Unit of the variable: rad/s
- This variable does not count as a time.
- Expected data length: 1

***

### PitchRate\_ST

> **PitchRate\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2620](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2620)

PitchRate_ST - Pitch rate at 360 Hz

#### Remarks

- Unit of the variable: rad/s
- This variable counts as a time.
- Expected data length: 6

***

### PitOptRepairLeft

> **PitOptRepairLeft**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1751](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1751)

PitOptRepairLeft - Time left for optional repairs if repairs are active

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### PitRepairLeft

> **PitRepairLeft**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1740](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1740)

PitRepairLeft - Time left for mandatory pit repairs if repairs are active

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### PitsOpen

> **PitsOpen**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:1696](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1696)

PitsOpen - True if pit stop is allowed for the current player

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### PitstopActive

> **PitstopActive**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:1762](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1762)

PitstopActive - Is the player getting pit stop service

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### PitSvFlags

> **PitSvFlags**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2180](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2180)

PitSvFlags - Bitfield of pit service checkboxes

#### Remarks

- Unit of the variable: irsdk_PitSvFlags
- This variable does not count as a time.
- Expected data length: 1

***

### PitSvFuel

> **PitSvFuel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2235](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2235)

PitSvFuel - Pit service fuel add amount

#### Remarks

- Unit of the variable: l or kWh
- This variable does not count as a time.
- Expected data length: 1

***

### PitSvLFP

> **PitSvLFP**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2191](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2191)

PitSvLFP - Pit service left front tire pressure

#### Remarks

- Unit of the variable: kPa
- This variable does not count as a time.
- Expected data length: 1

***

### PitSvLRP

> **PitSvLRP**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2213](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2213)

PitSvLRP - Pit service left rear tire pressure

#### Remarks

- Unit of the variable: kPa
- This variable does not count as a time.
- Expected data length: 1

***

### PitSvRFP

> **PitSvRFP**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2202](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2202)

PitSvRFP - Pit service right front tire pressure

#### Remarks

- Unit of the variable: kPa
- This variable does not count as a time.
- Expected data length: 1

***

### PitSvRRP

> **PitSvRRP**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2224](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2224)

PitSvRRP - Pit service right rear tire pressure

#### Remarks

- Unit of the variable: kPa
- This variable does not count as a time.
- Expected data length: 1

***

### PitSvTireCompound

> **PitSvTireCompound**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2246](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2246)

PitSvTireCompound - Pit service pending tire compound

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarClass

> **PlayerCarClass**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:497](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L497)

PlayerCarClass - Player car class id

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarClassPosition

> **PlayerCarClassPosition**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:486](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L486)

PlayerCarClassPosition - Players class position in race

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarDriverIncidentCount

> **PlayerCarDriverIncidentCount**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:563](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L563)

PlayerCarDriverIncidentCount - Teams current drivers incident count for this session

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarDryTireSetLimit

> **PlayerCarDryTireSetLimit**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:596](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L596)

PlayerCarDryTireSetLimit - Players dry tire set limit

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarIdx

> **PlayerCarIdx**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:530](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L530)

PlayerCarIdx - Players carIdx

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarInPitStall

> **PlayerCarInPitStall**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:618](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L618)

PlayerCarInPitStall - Players car is properly in their pitstall

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarMyIncidentCount

> **PlayerCarMyIncidentCount**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:552](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L552)

PlayerCarMyIncidentCount - Players own incident count for this session

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarPitSvStatus

> **PlayerCarPitSvStatus**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:629](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L629)

PlayerCarPitSvStatus - Players car pit service status bits

#### Remarks

- Unit of the variable: irsdk_PitSvStatus
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarPosition

> **PlayerCarPosition**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:475](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L475)

PlayerCarPosition - Players position in race

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarPowerAdjust

> **PlayerCarPowerAdjust**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:585](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L585)

PlayerCarPowerAdjust - Players power adjust

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarSLBlinkRPM

> **PlayerCarSLBlinkRPM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1058](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1058)

PlayerCarSLBlinkRPM - Shift light blink rpm

#### Remarks

- Unit of the variable: revs/min
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarSLFirstRPM

> **PlayerCarSLFirstRPM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1025](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1025)

PlayerCarSLFirstRPM - Shift light first light rpm

#### Remarks

- Unit of the variable: revs/min
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarSLLastRPM

> **PlayerCarSLLastRPM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1047](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1047)

PlayerCarSLLastRPM - Shift light last light rpm

#### Remarks

- Unit of the variable: revs/min
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarSLShiftRPM

> **PlayerCarSLShiftRPM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1036](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1036)

PlayerCarSLShiftRPM - Shift light shift rpm

#### Remarks

- Unit of the variable: revs/min
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarTeamIncidentCount

> **PlayerCarTeamIncidentCount**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:541](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L541)

PlayerCarTeamIncidentCount - Players team incident count for this session

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarTowTime

> **PlayerCarTowTime**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:607](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L607)

PlayerCarTowTime - Players car is being towed if time is greater than zero

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerCarWeightPenalty

> **PlayerCarWeightPenalty**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:574](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L574)

PlayerCarWeightPenalty - Players weight penalty

#### Remarks

- Unit of the variable: kg
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerFastRepairsUsed

> **PlayerFastRepairsUsed**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:651](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L651)

PlayerFastRepairsUsed - Players car number of fast repairs used

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerIncidents

> **PlayerIncidents**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1729](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1729)

PlayerIncidents - Log incidents that the player recieved

#### Remarks

- Unit of the variable: irsdk_IncidentFlags
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerTireCompound

> **PlayerTireCompound**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:640](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L640)

PlayerTireCompound - Players car current tire compound

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerTrackSurface

> **PlayerTrackSurface**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:508](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L508)

PlayerTrackSurface - Players car track surface type

#### Remarks

- Unit of the variable: irsdk_TrkLoc
- This variable does not count as a time.
- Expected data length: 1

***

### PlayerTrackSurfaceMaterial

> **PlayerTrackSurfaceMaterial**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:519](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L519)

PlayerTrackSurfaceMaterial - Players car track surface material type

#### Remarks

- Unit of the variable: irsdk_TrkSurf
- This variable does not count as a time.
- Expected data length: 1

***

### PowerMGU\_H

> **PowerMGU\_H**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3907](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3907)

PowerMGU_H - Engine MGU-H mechanical power

#### Remarks

- Unit of the variable: W
- This variable does not count as a time.
- Expected data length: 1

***

### PowerMGU\_K

> **PowerMGU\_K**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3885](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3885)

PowerMGU_K - Engine MGU-K mechanical power

#### Remarks

- Unit of the variable: W
- This variable does not count as a time.
- Expected data length: 1

***

### Precipitation

> **Precipitation**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1586](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1586)

Precipitation - Precipitation at start/finish line

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### PushToPass

> **PushToPass**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:255](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L255)

PushToPass - Push to pass button state

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### PushToTalk

> **PushToTalk**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:244](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L244)

PushToTalk - Push to talk button state

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### RaceLaps

> **RaceLaps**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1113](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1113)

RaceLaps - Laps completed in race

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### RadioTransmitCarIdx

> **RadioTransmitCarIdx**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:189](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L189)

RadioTransmitCarIdx - The car index of the current person speaking on the radio

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### RadioTransmitFrequencyIdx

> **RadioTransmitFrequencyIdx**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:211](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L211)

RadioTransmitFrequencyIdx - The frequency index of the current person speaking on the radio

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### RadioTransmitRadioIdx

> **RadioTransmitRadioIdx**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:200](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L200)

RadioTransmitRadioIdx - The radio index of the current person speaking on the radio

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### RearTireSetsAvailable

> **RearTireSetsAvailable**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1971](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1971)

RearTireSetsAvailable - How many rear tire sets are remaining  255 is unlimited

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### RearTireSetsUsed

> **RearTireSetsUsed**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1872](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1872)

RearTireSetsUsed - How many rear tire sets used so far

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### RelativeHumidity

> **RelativeHumidity**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1564](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1564)

RelativeHumidity - Relative Humidity at start/finish line

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### ReplayFrameNum

> **ReplayFrameNum**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:310](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L310)

ReplayFrameNum - Integer replay frame number (60 per second)

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### ReplayFrameNumEnd

> **ReplayFrameNumEnd**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:321](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L321)

ReplayFrameNumEnd - Integer replay frame number from end of tape

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### ReplayPlaySlowMotion

> **ReplayPlaySlowMotion**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:2444](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2444)

ReplayPlaySlowMotion - 0=not slow motion  1=replay is in slow motion

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### ReplayPlaySpeed

> **ReplayPlaySpeed**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2433](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2433)

ReplayPlaySpeed - Replay playback speed

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### ReplaySessionNum

> **ReplaySessionNum**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2466](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2466)

ReplaySessionNum - Replay session number

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### ReplaySessionTime

> **ReplaySessionTime**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2455](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2455)

ReplaySessionTime - Seconds since replay session start

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### RFbrakeLinePress

> **RFbrakeLinePress**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3038](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3038)

RFbrakeLinePress - RF brake line pressure

#### Remarks

- Unit of the variable: bar
- This variable does not count as a time.
- Expected data length: 1

***

### RFcoldPressure

> **RFcoldPressure**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3049](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3049)

RFcoldPressure - RF tire cold pressure  as set in the garage

#### Remarks

- Unit of the variable: kPa
- This variable does not count as a time.
- Expected data length: 1

***

### RFodometer

> **RFodometer**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3060](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3060)

RFodometer - RF distance tire traveled since being placed on car

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### RFshockDefl

> **RFshockDefl**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3687](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3687)

RFshockDefl - RF shock deflection

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### RFshockDefl\_ST

> **RFshockDefl\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3698](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3698)

RFshockDefl_ST - RF shock deflection at 360 Hz

#### Remarks

- Unit of the variable: m
- This variable counts as a time.
- Expected data length: 6

***

### RFshockVel

> **RFshockVel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3709](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3709)

RFshockVel - RF shock velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### RFshockVel\_ST

> **RFshockVel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3720](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3720)

RFshockVel_ST - RF shock velocity at 360 Hz

#### Remarks

- Unit of the variable: m/s
- This variable counts as a time.
- Expected data length: 6

***

### RFSHshockDefl

> **RFSHshockDefl**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4314](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4314)

RFSHshockDefl - RFSH shock deflection

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### RFSHshockDefl\_ST

> **RFSHshockDefl\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4325](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4325)

RFSHshockDefl_ST - RFSH shock deflection at 360 Hz

#### Remarks

- Unit of the variable: m
- This variable counts as a time.
- Expected data length: 6

***

### RFSHshockVel

> **RFSHshockVel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4336](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4336)

RFSHshockVel - RFSH shock velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### RFSHshockVel\_ST

> **RFSHshockVel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4347](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4347)

RFSHshockVel_ST - RFSH shock velocity at 360 Hz

#### Remarks

- Unit of the variable: m/s
- This variable counts as a time.
- Expected data length: 6

***

### RFtempCL

> **RFtempCL**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3071](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3071)

RFtempCL - RF tire left carcass temperature

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### RFtempCM

> **RFtempCM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3082](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3082)

RFtempCM - RF tire middle carcass temperature

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### RFtempCR

> **RFtempCR**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3093](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3093)

RFtempCR - RF tire right carcass temperature

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### RFTiresAvailable

> **RFTiresAvailable**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1905](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1905)

RFTiresAvailable - How many right front tires are remaining  255 is unlimited

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### RFTiresUsed

> **RFTiresUsed**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1806](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1806)

RFTiresUsed - How many right front tires used so far

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### RFwearL

> **RFwearL**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3104](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3104)

RFwearL - RF tire left percent tread remaining

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### RFwearM

> **RFwearM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3115](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3115)

RFwearM - RF tire middle percent tread remaining

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### RFwearR

> **RFwearR**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3126](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3126)

RFwearR - RF tire right percent tread remaining

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### RightTireSetsAvailable

> **RightTireSetsAvailable**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1949](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1949)

RightTireSetsAvailable - How many right tire sets are remaining  255 is unlimited

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### RightTireSetsUsed

> **RightTireSetsUsed**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1850](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1850)

RightTireSetsUsed - How many right tire sets used so far

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### Roll

> **Roll**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1443](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1443)

Roll - Roll orientation

#### Remarks

- Unit of the variable: rad
- This variable does not count as a time.
- Expected data length: 1

***

### ROLLFshockDefl

> **ROLLFshockDefl**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4017](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4017)

ROLLFshockDefl - ROLLF shock deflection

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### ROLLFshockDefl\_ST

> **ROLLFshockDefl\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4028](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4028)

ROLLFshockDefl_ST - ROLLF shock deflection at 360 Hz

#### Remarks

- Unit of the variable: m
- This variable counts as a time.
- Expected data length: 6

***

### ROLLFshockVel

> **ROLLFshockVel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4039](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4039)

ROLLFshockVel - ROLLF shock velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### ROLLFshockVel\_ST

> **ROLLFshockVel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4050](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4050)

ROLLFshockVel_ST - ROLLF shock velocity at 360 Hz

#### Remarks

- Unit of the variable: m/s
- This variable counts as a time.
- Expected data length: 6

***

### RollRate

> **RollRate**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2664](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2664)

RollRate - Roll rate

#### Remarks

- Unit of the variable: rad/s
- This variable does not count as a time.
- Expected data length: 1

***

### RollRate\_ST

> **RollRate\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2631](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2631)

RollRate_ST - Roll rate at 360 Hz

#### Remarks

- Unit of the variable: rad/s
- This variable counts as a time.
- Expected data length: 6

***

### ROLLRshockDefl

> **ROLLRshockDefl**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4105](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4105)

ROLLRshockDefl - ROLLR shock deflection

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### ROLLRshockDefl\_ST

> **ROLLRshockDefl\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4116](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4116)

ROLLRshockDefl_ST - ROLLR shock deflection at 360 Hz

#### Remarks

- Unit of the variable: m
- This variable counts as a time.
- Expected data length: 6

***

### ROLLRshockVel

> **ROLLRshockVel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4127](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4127)

ROLLRshockVel - ROLLR shock velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### ROLLRshockVel\_ST

> **ROLLRshockVel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4138](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4138)

ROLLRshockVel_ST - ROLLR shock velocity at 360 Hz

#### Remarks

- Unit of the variable: m/s
- This variable counts as a time.
- Expected data length: 6

***

### RPM

> **RPM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1014](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1014)

RPM - Engine rpm

#### Remarks

- Unit of the variable: revs/min
- This variable does not count as a time.
- Expected data length: 1

***

### RRbrakeLinePress

> **RRbrakeLinePress**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3357](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3357)

RRbrakeLinePress - RR brake line pressure

#### Remarks

- Unit of the variable: bar
- This variable does not count as a time.
- Expected data length: 1

***

### RRcoldPressure

> **RRcoldPressure**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3368](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3368)

RRcoldPressure - RR tire cold pressure  as set in the garage

#### Remarks

- Unit of the variable: kPa
- This variable does not count as a time.
- Expected data length: 1

***

### RRodometer

> **RRodometer**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3379](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3379)

RRodometer - RR distance tire traveled since being placed on car

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### RRshockDefl

> **RRshockDefl**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3599](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3599)

RRshockDefl - RR shock deflection

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### RRshockDefl\_ST

> **RRshockDefl\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3610](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3610)

RRshockDefl_ST - RR shock deflection at 360 Hz

#### Remarks

- Unit of the variable: m
- This variable counts as a time.
- Expected data length: 6

***

### RRshockVel

> **RRshockVel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3621](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3621)

RRshockVel - RR shock velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### RRshockVel\_ST

> **RRshockVel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3632](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3632)

RRshockVel_ST - RR shock velocity at 360 Hz

#### Remarks

- Unit of the variable: m/s
- This variable counts as a time.
- Expected data length: 6

***

### RRSHshockDefl

> **RRSHshockDefl**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4204](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4204)

RRSHshockDefl - RRSH shock deflection

#### Remarks

- Unit of the variable: m
- This variable does not count as a time.
- Expected data length: 1

***

### RRSHshockDefl\_ST

> **RRSHshockDefl\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4215](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4215)

RRSHshockDefl_ST - RRSH shock deflection at 360 Hz

#### Remarks

- Unit of the variable: m
- This variable counts as a time.
- Expected data length: 6

***

### RRSHshockVel

> **RRSHshockVel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4226](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4226)

RRSHshockVel - RRSH shock velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### RRSHshockVel\_ST

> **RRSHshockVel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:4237](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L4237)

RRSHshockVel_ST - RRSH shock velocity at 360 Hz

#### Remarks

- Unit of the variable: m/s
- This variable counts as a time.
- Expected data length: 6

***

### RRtempCL

> **RRtempCL**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3390](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3390)

RRtempCL - RR tire left carcass temperature

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### RRtempCM

> **RRtempCM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3401](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3401)

RRtempCM - RR tire middle carcass temperature

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### RRtempCR

> **RRtempCR**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3412](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3412)

RRtempCR - RR tire right carcass temperature

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### RRTiresAvailable

> **RRTiresAvailable**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1927](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1927)

RRTiresAvailable - How many right rear tires are remaining  255 is unlimited

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### RRTiresUsed

> **RRTiresUsed**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1828](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1828)

RRTiresUsed - How many right rear tires used so far

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### RRwearL

> **RRwearL**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3423](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3423)

RRwearL - RR tire left percent tread remaining

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### RRwearM

> **RRwearM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3434](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3434)

RRwearM - RR tire middle percent tread remaining

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### RRwearR

> **RRwearR**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3445](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3445)

RRwearR - RR tire right percent tread remaining

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### SessionFlags

> **SessionFlags**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:90](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L90)

SessionFlags - Session flags

#### Remarks

- Unit of the variable: irsdk_Flags
- This variable does not count as a time.
- Expected data length: 1

***

### SessionJokerLapsRemain

> **SessionJokerLapsRemain**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:156](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L156)

SessionJokerLapsRemain - Joker laps remaining to be taken

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### SessionLapsRemain

> **SessionLapsRemain**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:112](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L112)

SessionLapsRemain - Old laps left till session ends use SessionLapsRemainEx

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### SessionLapsRemainEx

> **SessionLapsRemainEx**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:123](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L123)

SessionLapsRemainEx - New improved laps left till session ends

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### SessionLapsTotal

> **SessionLapsTotal**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:145](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L145)

SessionLapsTotal - Total number of laps in session

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### SessionNum

> **SessionNum**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:57](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L57)

SessionNum - Session number

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### SessionOnJokerLap

> **SessionOnJokerLap**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:167](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L167)

SessionOnJokerLap - Player is currently completing a joker lap

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### SessionState

> **SessionState**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:68](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L68)

SessionState - Session state

#### Remarks

- Unit of the variable: irsdk_SessionState
- This variable does not count as a time.
- Expected data length: 1

***

### SessionTick

> **SessionTick**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:46](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L46)

SessionTick - Current update number

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### SessionTime

> **SessionTime**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:35](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L35)

SessionTime - Seconds since session start

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### SessionTimeOfDay

> **SessionTimeOfDay**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:178](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L178)

SessionTimeOfDay - Time of day in seconds

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### SessionTimeRemain

> **SessionTimeRemain**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:101](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L101)

SessionTimeRemain - Seconds left till session ends

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### SessionTimeTotal

> **SessionTimeTotal**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:134](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L134)

SessionTimeTotal - Total number of seconds in session

#### Remarks

- Unit of the variable: s
- This variable does not count as a time.
- Expected data length: 1

***

### SessionUniqueID

> **SessionUniqueID**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:79](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L79)

SessionUniqueID - Session ID

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### Shifter

> **Shifter**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2147](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2147)

Shifter - Log inputs from the players shifter control

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### ShiftGrindRPM

> **ShiftGrindRPM**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2081](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2081)

ShiftGrindRPM - RPM of shifter grinding noise

#### Remarks

- Unit of the variable: RPM
- This variable does not count as a time.
- Expected data length: 1

***

### ShiftIndicatorPct

> **ShiftIndicatorPct**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2411](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2411)

ShiftIndicatorPct - DEPRECATED use DriverCarSLBlinkRPM instead

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### ShiftPowerPct

> **ShiftPowerPct**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2070](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2070)

ShiftPowerPct - Friction torque applied to gears when shifting or grinding

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### Skies

> **Skies**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1509](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1509)

Skies - Skies (0=clear/1=p cloudy/2=m cloudy/3=overcast)

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### SolarAltitude

> **SolarAltitude**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1597](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1597)

SolarAltitude - Sun angle above horizon in radians

#### Remarks

- Unit of the variable: rad
- This variable does not count as a time.
- Expected data length: 1

***

### SolarAzimuth

> **SolarAzimuth**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1608](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1608)

SolarAzimuth - Sun angle clockwise from north in radians

#### Remarks

- Unit of the variable: rad
- This variable does not count as a time.
- Expected data length: 1

***

### Speed

> **Speed**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1399](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1399)

Speed - GPS vehicle speed

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### SteeringFFBEnabled

> **SteeringFFBEnabled**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:1630](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1630)

SteeringFFBEnabled - Force feedback is enabled

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### SteeringWheelAngle

> **SteeringWheelAngle**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:959](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L959)

SteeringWheelAngle - Steering wheel angle

#### Remarks

- Unit of the variable: rad
- This variable does not count as a time.
- Expected data length: 1

***

### SteeringWheelAngleMax

> **SteeringWheelAngleMax**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2059](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2059)

SteeringWheelAngleMax - Steering wheel max angle

#### Remarks

- Unit of the variable: rad
- This variable does not count as a time.
- Expected data length: 1

***

### SteeringWheelLimiter

> **SteeringWheelLimiter**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2367](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2367)

SteeringWheelLimiter - Force feedback limiter strength limits impacts and oscillation

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### SteeringWheelMaxForceNm

> **SteeringWheelMaxForceNm**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2378](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2378)

SteeringWheelMaxForceNm - Value of strength or max force slider in Nm for FFB

#### Remarks

- Unit of the variable: N*m
- This variable does not count as a time.
- Expected data length: 1

***

### SteeringWheelPctDamper

> **SteeringWheelPctDamper**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2356](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2356)

SteeringWheelPctDamper - Force feedback % max damping

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### SteeringWheelPctIntensity

> **SteeringWheelPctIntensity**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2334](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2334)

SteeringWheelPctIntensity - Force feedback % max intensity

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### SteeringWheelPctSmoothing

> **SteeringWheelPctSmoothing**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2345](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2345)

SteeringWheelPctSmoothing - Force feedback % max smoothing

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### SteeringWheelPctTorque

> **SteeringWheelPctTorque**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2301](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2301)

SteeringWheelPctTorque - Force feedback % max torque on steering shaft unsigned

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### SteeringWheelPctTorqueSign

> **SteeringWheelPctTorqueSign**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2312](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2312)

SteeringWheelPctTorqueSign - Force feedback % max torque on steering shaft signed

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### SteeringWheelPctTorqueSignStops

> **SteeringWheelPctTorqueSignStops**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2323](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2323)

SteeringWheelPctTorqueSignStops - Force feedback % max torque on steering shaft signed stops

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### SteeringWheelPeakForceNm

> **SteeringWheelPeakForceNm**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2389](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2389)

SteeringWheelPeakForceNm - Peak torque mapping to direct input units for FFB

#### Remarks

- Unit of the variable: N*m
- This variable does not count as a time.
- Expected data length: 1

***

### SteeringWheelTorque

> **SteeringWheelTorque**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2532](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2532)

SteeringWheelTorque - Output torque on steering shaft

#### Remarks

- Unit of the variable: N*m
- This variable does not count as a time.
- Expected data length: 1

***

### SteeringWheelTorque\_ST

> **SteeringWheelTorque\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2521](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2521)

SteeringWheelTorque_ST - Output torque on steering shaft at 360 Hz

#### Remarks

- Unit of the variable: N*m
- This variable counts as a time.
- Expected data length: 6

***

### SteeringWheelUseLinear

> **SteeringWheelUseLinear**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:2400](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2400)

SteeringWheelUseLinear - True if steering wheel force is using linear mode

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### Throttle

> **Throttle**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:970](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L970)

Throttle - 0=off throttle to 1=full throttle

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### ThrottleRaw

> **ThrottleRaw**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2092](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2092)

ThrottleRaw - Raw throttle input 0=off throttle to 1=full throttle

#### Remarks

- Unit of the variable: %
- This variable does not count as a time.
- Expected data length: 1

***

### TireLF\_RumblePitch

> **TireLF\_RumblePitch**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2477](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2477)

TireLF_RumblePitch - Players LF Tire Sound rumblestrip pitch

#### Remarks

- Unit of the variable: Hz
- This variable does not count as a time.
- Expected data length: 1

***

### TireLR\_RumblePitch

> **TireLR\_RumblePitch**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2499](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2499)

TireLR_RumblePitch - Players LR Tire Sound rumblestrip pitch

#### Remarks

- Unit of the variable: Hz
- This variable does not count as a time.
- Expected data length: 1

***

### TireRF\_RumblePitch

> **TireRF\_RumblePitch**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2488](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2488)

TireRF_RumblePitch - Players RF Tire Sound rumblestrip pitch

#### Remarks

- Unit of the variable: Hz
- This variable does not count as a time.
- Expected data length: 1

***

### TireRR\_RumblePitch

> **TireRR\_RumblePitch**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2510](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2510)

TireRR_RumblePitch - Players RR Tire Sound rumblestrip pitch

#### Remarks

- Unit of the variable: Hz
- This variable does not count as a time.
- Expected data length: 1

***

### TireSetsAvailable

> **TireSetsAvailable**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1982](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1982)

TireSetsAvailable - How many tire sets are remaining  255 is unlimited

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### TireSetsUsed

> **TireSetsUsed**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1883](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1883)

TireSetsUsed - How many tire sets used so far

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### TorqueMGU\_K

> **TorqueMGU\_K**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3896](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3896)

TorqueMGU_K - Engine MGU-K mechanical torque

#### Remarks

- Unit of the variable: Nm
- This variable does not count as a time.
- Expected data length: 1

***

### TrackTemp

> **TrackTemp**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1465](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1465)

TrackTemp - Deprecated  set to TrackTempCrew

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### TrackTempCrew

> **TrackTempCrew**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1476](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1476)

TrackTempCrew - Temperature of track measured by crew around track

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### TrackWetness

> **TrackWetness**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1498](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1498)

TrackWetness - How wet is the average track surface

#### Remarks

- Unit of the variable: irsdk_TrackWetness
- This variable does not count as a time.
- Expected data length: 1

***

### VelocityX

> **VelocityX**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2598](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2598)

VelocityX - X velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### VelocityX\_ST

> **VelocityX\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2565](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2565)

VelocityX_ST - X velocity

#### Remarks

- Unit of the variable: m/s at 360 Hz
- This variable counts as a time.
- Expected data length: 6

***

### VelocityY

> **VelocityY**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2587](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2587)

VelocityY - Y velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### VelocityY\_ST

> **VelocityY\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2554](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2554)

VelocityY_ST - Y velocity

#### Remarks

- Unit of the variable: m/s at 360 Hz
- This variable counts as a time.
- Expected data length: 6

***

### VelocityZ

> **VelocityZ**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2576](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2576)

VelocityZ - Z velocity

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### VelocityZ\_ST

> **VelocityZ\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2543](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2543)

VelocityZ_ST - Z velocity

#### Remarks

- Unit of the variable: m/s at 360 Hz
- This variable counts as a time.
- Expected data length: 6

***

### VertAccel

> **VertAccel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2708](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2708)

VertAccel - Vertical acceleration (including gravity)

#### Remarks

- Unit of the variable: m/s^2
- This variable does not count as a time.
- Expected data length: 1

***

### VertAccel\_ST

> **VertAccel\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2675](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2675)

VertAccel_ST - Vertical acceleration (including gravity) at 360 Hz

#### Remarks

- Unit of the variable: m/s^2
- This variable counts as a time.
- Expected data length: 6

***

### VidCapActive

> **VidCapActive**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:1718](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1718)

VidCapActive - True if video currently being captured

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### VidCapEnabled

> **VidCapEnabled**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:1707](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1707)

VidCapEnabled - True if video capture system is enabled

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### Voltage

> **Voltage**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3247](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3247)

Voltage - Engine voltage

#### Remarks

- Unit of the variable: V
- This variable does not count as a time.
- Expected data length: 1

***

### WaterLevel

> **WaterLevel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3269](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3269)

WaterLevel - Engine coolant level

#### Remarks

- Unit of the variable: l
- This variable does not count as a time.
- Expected data length: 1

***

### WaterTemp

> **WaterTemp**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:3258](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L3258)

WaterTemp - Engine coolant temp

#### Remarks

- Unit of the variable: C
- This variable does not count as a time.
- Expected data length: 1

***

### WeatherDeclaredWet

> **WeatherDeclaredWet**: [`TelemetryVariable`](TelemetryVariable.md)\<`boolean`[]\>

Defined in: [telemetry.gen.ts:1619](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1619)

WeatherDeclaredWet - The steward says rain tires can be used

#### Remarks

- Variable does not have a unit.
- This variable does not count as a time.
- Expected data length: 1

***

### WindDir

> **WindDir**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1553](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1553)

WindDir - Wind direction at start/finish line

#### Remarks

- Unit of the variable: rad
- This variable does not count as a time.
- Expected data length: 1

***

### WindVel

> **WindVel**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1542](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1542)

WindVel - Wind velocity at start/finish line

#### Remarks

- Unit of the variable: m/s
- This variable does not count as a time.
- Expected data length: 1

***

### Yaw

> **Yaw**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1410](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1410)

Yaw - Yaw orientation

#### Remarks

- Unit of the variable: rad
- This variable does not count as a time.
- Expected data length: 1

***

### YawNorth

> **YawNorth**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:1421](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L1421)

YawNorth - Yaw orientation relative to north

#### Remarks

- Unit of the variable: rad
- This variable does not count as a time.
- Expected data length: 1

***

### YawRate

> **YawRate**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2642](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2642)

YawRate - Yaw rate

#### Remarks

- Unit of the variable: rad/s
- This variable does not count as a time.
- Expected data length: 1

***

### YawRate\_ST

> **YawRate\_ST**: [`TelemetryVariable`](TelemetryVariable.md)

Defined in: [telemetry.gen.ts:2609](https://github.com/bengsfort/irsdk-node/blob/43c64b9cbe3e5098afd8e262803e04b02d7d0a5d/packages/irsdk-node-types/src/telemetry.gen.ts#L2609)

YawRate_ST - Yaw rate at 360 Hz

#### Remarks

- Unit of the variable: rad/s
- This variable counts as a time.
- Expected data length: 6
