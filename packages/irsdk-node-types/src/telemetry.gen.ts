// ! THIS FILE IS AUTO-GENERATED, EDITS WILL BE NOT PERSIST !
// ! To generate, run `pnpm types:generate` in the irsdk-node package !
// Last updated 2025-11-26T12:10:09.800Z

/**
 * A variable representing telemetry data from the iRacing SDK.
 */
export interface TelemetryVariable<VarType = number[]> {
  /** The name of the variable. */
  name: string;
  /** The description. */
  description: string;
  /** The unit of the value (ex. "kg/m^2") */
  unit: string;
  /** Should it be treated as a time? */
  countAsTime: boolean;
  /** The number of values provided. */
  length: number;
  /** The native variable type */
  varType: number;
  /** The current value of this variable. */
  value: VarType;
}

export interface TelemetryVarList {
  /**
   * SessionTime
   *
   * @description
   * Seconds since session start
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SessionTime: TelemetryVariable;

  /**
   * SessionTick
   *
   * @description
   * Current update number
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SessionTick: TelemetryVariable;

  /**
   * SessionNum
   *
   * @description
   * Session number
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SessionNum: TelemetryVariable;

  /**
   * SessionState
   *
   * @description
   * Session state
   * Unit of the variable: irsdk_SessionState
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SessionState: TelemetryVariable;

  /**
   * SessionUniqueID
   *
   * @description
   * Session ID
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SessionUniqueID: TelemetryVariable;

  /**
   * SessionFlags
   *
   * @description
   * Session flags
   * Unit of the variable: irsdk_Flags
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SessionFlags: TelemetryVariable;

  /**
   * SessionTimeRemain
   *
   * @description
   * Seconds left till session ends
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SessionTimeRemain: TelemetryVariable;

  /**
   * SessionLapsRemain
   *
   * @description
   * Old laps left till session ends use SessionLapsRemainEx
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SessionLapsRemain: TelemetryVariable;

  /**
   * SessionLapsRemainEx
   *
   * @description
   * New improved laps left till session ends
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SessionLapsRemainEx: TelemetryVariable;

  /**
   * SessionTimeTotal
   *
   * @description
   * Total number of seconds in session
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SessionTimeTotal: TelemetryVariable;

  /**
   * SessionLapsTotal
   *
   * @description
   * Total number of laps in session
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SessionLapsTotal: TelemetryVariable;

  /**
   * SessionJokerLapsRemain
   *
   * @description
   * Joker laps remaining to be taken
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SessionJokerLapsRemain: TelemetryVariable;

  /**
   * SessionOnJokerLap
   *
   * @description
   * Player is currently completing a joker lap
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SessionOnJokerLap: TelemetryVariable<boolean[]>;

  /**
   * SessionTimeOfDay
   *
   * @description
   * Time of day in seconds
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SessionTimeOfDay: TelemetryVariable;

  /**
   * RadioTransmitCarIdx
   *
   * @description
   * The car index of the current person speaking on the radio
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RadioTransmitCarIdx: TelemetryVariable;

  /**
   * RadioTransmitRadioIdx
   *
   * @description
   * The radio index of the current person speaking on the radio
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RadioTransmitRadioIdx: TelemetryVariable;

  /**
   * RadioTransmitFrequencyIdx
   *
   * @description
   * The frequency index of the current person speaking on the radio
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RadioTransmitFrequencyIdx: TelemetryVariable;

  /**
   * DisplayUnits
   *
   * @description
   * Default units for the user interface 0 = english 1 = metric
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  DisplayUnits: TelemetryVariable;

  /**
   * DriverMarker
   *
   * @description
   * Driver activated flag
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  DriverMarker: TelemetryVariable<boolean[]>;

  /**
   * PushToTalk
   *
   * @description
   * Push to talk button state
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PushToTalk: TelemetryVariable<boolean[]>;

  /**
   * PushToPass
   *
   * @description
   * Push to pass button state
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PushToPass: TelemetryVariable<boolean[]>;

  /**
   * ManualBoost
   *
   * @description
   * Hybrid manual boost state
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ManualBoost: TelemetryVariable<boolean[]>;

  /**
   * ManualNoBoost
   *
   * @description
   * Hybrid manual no boost state
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ManualNoBoost: TelemetryVariable<boolean[]>;

  /**
   * IsOnTrack
   *
   * @description
   * 1=Car on track physics running with player in car
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  IsOnTrack: TelemetryVariable<boolean[]>;

  /**
   * IsReplayPlaying
   *
   * @description
   * 0=replay not playing  1=replay playing
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  IsReplayPlaying: TelemetryVariable<boolean[]>;

  /**
   * ReplayFrameNum
   *
   * @description
   * Integer replay frame number (60 per second)
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ReplayFrameNum: TelemetryVariable;

  /**
   * ReplayFrameNumEnd
   *
   * @description
   * Integer replay frame number from end of tape
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ReplayFrameNumEnd: TelemetryVariable;

  /**
   * IsDiskLoggingEnabled
   *
   * @description
   * 0=disk based telemetry turned off  1=turned on
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  IsDiskLoggingEnabled: TelemetryVariable<boolean[]>;

  /**
   * IsDiskLoggingActive
   *
   * @description
   * 0=disk based telemetry file not being written  1=being written
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  IsDiskLoggingActive: TelemetryVariable<boolean[]>;

  /**
   * FrameRate
   *
   * @description
   * Average frames per second
   * Unit of the variable: fps
   * This variable does not count as a time.
   * Expected data length: 1
   */
  FrameRate: TelemetryVariable;

  /**
   * CpuUsageFG
   *
   * @description
   * Percent of available time fg thread took with a 1 sec avg
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  CpuUsageFG: TelemetryVariable;

  /**
   * GpuUsage
   *
   * @description
   * Percent of available time gpu took with a 1 sec avg
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  GpuUsage: TelemetryVariable;

  /**
   * ChanAvgLatency
   *
   * @description
   * Communications average latency
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ChanAvgLatency: TelemetryVariable;

  /**
   * ChanLatency
   *
   * @description
   * Communications latency
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ChanLatency: TelemetryVariable;

  /**
   * ChanQuality
   *
   * @description
   * Communications quality
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ChanQuality: TelemetryVariable;

  /**
   * ChanPartnerQuality
   *
   * @description
   * Partner communications quality
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ChanPartnerQuality: TelemetryVariable;

  /**
   * CpuUsageBG
   *
   * @description
   * Percent of available time bg thread took with a 1 sec avg
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  CpuUsageBG: TelemetryVariable;

  /**
   * ChanClockSkew
   *
   * @description
   * Communications server clock skew
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ChanClockSkew: TelemetryVariable;

  /**
   * MemPageFaultSec
   *
   * @description
   * Memory page faults per second
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  MemPageFaultSec: TelemetryVariable;

  /**
   * MemSoftPageFaultSec
   *
   * @description
   * Memory soft page faults per second
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  MemSoftPageFaultSec: TelemetryVariable;

  /**
   * PlayerCarPosition
   *
   * @description
   * Players position in race
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarPosition: TelemetryVariable;

  /**
   * PlayerCarClassPosition
   *
   * @description
   * Players class position in race
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarClassPosition: TelemetryVariable;

  /**
   * PlayerCarClass
   *
   * @description
   * Player car class id
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarClass: TelemetryVariable;

  /**
   * PlayerTrackSurface
   *
   * @description
   * Players car track surface type
   * Unit of the variable: irsdk_TrkLoc
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerTrackSurface: TelemetryVariable;

  /**
   * PlayerTrackSurfaceMaterial
   *
   * @description
   * Players car track surface material type
   * Unit of the variable: irsdk_TrkSurf
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerTrackSurfaceMaterial: TelemetryVariable;

  /**
   * PlayerCarIdx
   *
   * @description
   * Players carIdx
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarIdx: TelemetryVariable;

  /**
   * PlayerCarTeamIncidentCount
   *
   * @description
   * Players team incident count for this session
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarTeamIncidentCount: TelemetryVariable;

  /**
   * PlayerCarMyIncidentCount
   *
   * @description
   * Players own incident count for this session
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarMyIncidentCount: TelemetryVariable;

  /**
   * PlayerCarDriverIncidentCount
   *
   * @description
   * Teams current drivers incident count for this session
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarDriverIncidentCount: TelemetryVariable;

  /**
   * PlayerCarWeightPenalty
   *
   * @description
   * Players weight penalty
   * Unit of the variable: kg
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarWeightPenalty: TelemetryVariable;

  /**
   * PlayerCarPowerAdjust
   *
   * @description
   * Players power adjust
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarPowerAdjust: TelemetryVariable;

  /**
   * PlayerCarDryTireSetLimit
   *
   * @description
   * Players dry tire set limit
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarDryTireSetLimit: TelemetryVariable;

  /**
   * PlayerCarTowTime
   *
   * @description
   * Players car is being towed if time is greater than zero
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarTowTime: TelemetryVariable;

  /**
   * PlayerCarInPitStall
   *
   * @description
   * Players car is properly in their pitstall
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarInPitStall: TelemetryVariable<boolean[]>;

  /**
   * PlayerCarPitSvStatus
   *
   * @description
   * Players car pit service status bits
   * Unit of the variable: irsdk_PitSvStatus
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarPitSvStatus: TelemetryVariable;

  /**
   * PlayerTireCompound
   *
   * @description
   * Players car current tire compound
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerTireCompound: TelemetryVariable;

  /**
   * PlayerFastRepairsUsed
   *
   * @description
   * Players car number of fast repairs used
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerFastRepairsUsed: TelemetryVariable;

  /**
   * CarIdxLap
   *
   * @description
   * Laps started by car index
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxLap: TelemetryVariable;

  /**
   * CarIdxLapCompleted
   *
   * @description
   * Laps completed by car index
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxLapCompleted: TelemetryVariable;

  /**
   * CarIdxLapDistPct
   *
   * @description
   * Percentage distance around lap by car index
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxLapDistPct: TelemetryVariable;

  /**
   * CarIdxTrackSurface
   *
   * @description
   * Track surface type by car index
   * Unit of the variable: irsdk_TrkLoc
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxTrackSurface: TelemetryVariable;

  /**
   * CarIdxTrackSurfaceMaterial
   *
   * @description
   * Track surface material type by car index
   * Unit of the variable: irsdk_TrkSurf
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxTrackSurfaceMaterial: TelemetryVariable;

  /**
   * CarIdxOnPitRoad
   *
   * @description
   * On pit road between the cones by car index
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxOnPitRoad: TelemetryVariable<boolean[]>;

  /**
   * CarIdxPosition
   *
   * @description
   * Cars position in race by car index
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxPosition: TelemetryVariable;

  /**
   * CarIdxClassPosition
   *
   * @description
   * Cars class position in race by car index
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxClassPosition: TelemetryVariable;

  /**
   * CarIdxClass
   *
   * @description
   * Cars class id by car index
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxClass: TelemetryVariable;

  /**
   * CarIdxF2Time
   *
   * @description
   * Race time behind leader or fastest lap time otherwise
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxF2Time: TelemetryVariable;

  /**
   * CarIdxEstTime
   *
   * @description
   * Estimated time to reach current location on track
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxEstTime: TelemetryVariable;

  /**
   * CarIdxLastLapTime
   *
   * @description
   * Cars last lap time
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxLastLapTime: TelemetryVariable;

  /**
   * CarIdxBestLapTime
   *
   * @description
   * Cars best lap time
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxBestLapTime: TelemetryVariable;

  /**
   * CarIdxBestLapNum
   *
   * @description
   * Cars best lap number
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxBestLapNum: TelemetryVariable;

  /**
   * CarIdxTireCompound
   *
   * @description
   * Cars current tire compound
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxTireCompound: TelemetryVariable;

  /**
   * CarIdxQualTireCompound
   *
   * @description
   * Cars Qual tire compound
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxQualTireCompound: TelemetryVariable;

  /**
   * CarIdxQualTireCompoundLocked
   *
   * @description
   * Cars Qual tire compound is locked-in
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxQualTireCompoundLocked: TelemetryVariable<boolean[]>;

  /**
   * CarIdxFastRepairsUsed
   *
   * @description
   * How many fast repairs each car has used
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxFastRepairsUsed: TelemetryVariable;

  /**
   * CarIdxSessionFlags
   *
   * @description
   * Session flags for each player
   * Unit of the variable: irsdk_Flags
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxSessionFlags: TelemetryVariable;

  /**
   * PaceMode
   *
   * @description
   * Are we pacing or not
   * Unit of the variable: irsdk_PaceMode
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PaceMode: TelemetryVariable;

  /**
   * CarIdxPaceLine
   *
   * @description
   * What line cars are pacing in  or -1 if not pacing
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxPaceLine: TelemetryVariable;

  /**
   * CarIdxPaceRow
   *
   * @description
   * What row cars are pacing in  or -1 if not pacing
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxPaceRow: TelemetryVariable;

  /**
   * CarIdxPaceFlags
   *
   * @description
   * Pacing status flags for each car
   * Unit of the variable: irsdk_PaceFlags
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxPaceFlags: TelemetryVariable;

  /**
   * OnPitRoad
   *
   * @description
   * Is the player car on pit road between the cones
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  OnPitRoad: TelemetryVariable<boolean[]>;

  /**
   * CarIdxSteer
   *
   * @description
   * Steering wheel angle by car index
   * Unit of the variable: rad
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxSteer: TelemetryVariable;

  /**
   * CarIdxRPM
   *
   * @description
   * Engine rpm by car index
   * Unit of the variable: revs/min
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxRPM: TelemetryVariable;

  /**
   * CarIdxGear
   *
   * @description
   * -1=reverse  0=neutral  1..n=current gear by car index
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxGear: TelemetryVariable;

  /**
   * SteeringWheelAngle
   *
   * @description
   * Steering wheel angle
   * Unit of the variable: rad
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SteeringWheelAngle: TelemetryVariable;

  /**
   * Throttle
   *
   * @description
   * 0=off throttle to 1=full throttle
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  Throttle: TelemetryVariable;

  /**
   * Brake
   *
   * @description
   * 0=brake released to 1=max pedal force
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  Brake: TelemetryVariable;

  /**
   * Clutch
   *
   * @description
   * 0=disengaged to 1=fully engaged
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  Clutch: TelemetryVariable;

  /**
   * Gear
   *
   * @description
   * -1=reverse  0=neutral  1..n=current gear
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  Gear: TelemetryVariable;

  /**
   * RPM
   *
   * @description
   * Engine rpm
   * Unit of the variable: revs/min
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RPM: TelemetryVariable;

  /**
   * PlayerCarSLFirstRPM
   *
   * @description
   * Shift light first light rpm
   * Unit of the variable: revs/min
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarSLFirstRPM: TelemetryVariable;

  /**
   * PlayerCarSLShiftRPM
   *
   * @description
   * Shift light shift rpm
   * Unit of the variable: revs/min
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarSLShiftRPM: TelemetryVariable;

  /**
   * PlayerCarSLLastRPM
   *
   * @description
   * Shift light last light rpm
   * Unit of the variable: revs/min
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarSLLastRPM: TelemetryVariable;

  /**
   * PlayerCarSLBlinkRPM
   *
   * @description
   * Shift light blink rpm
   * Unit of the variable: revs/min
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerCarSLBlinkRPM: TelemetryVariable;

  /**
   * Lap
   *
   * @description
   * Laps started count
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  Lap: TelemetryVariable;

  /**
   * LapCompleted
   *
   * @description
   * Laps completed count
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapCompleted: TelemetryVariable;

  /**
   * LapDist
   *
   * @description
   * Meters traveled from S/F this lap
   * Unit of the variable: m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDist: TelemetryVariable;

  /**
   * LapDistPct
   *
   * @description
   * Percentage distance around lap
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDistPct: TelemetryVariable;

  /**
   * RaceLaps
   *
   * @description
   * Laps completed in race
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RaceLaps: TelemetryVariable;

  /**
   * CarDistAhead
   *
   * @description
   * Distance to first car in front of player in meters
   * Unit of the variable: m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  CarDistAhead: TelemetryVariable;

  /**
   * CarDistBehind
   *
   * @description
   * Distance to first car behind player in meters
   * Unit of the variable: m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  CarDistBehind: TelemetryVariable;

  /**
   * LapBestLap
   *
   * @description
   * Players best lap number
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapBestLap: TelemetryVariable;

  /**
   * LapBestLapTime
   *
   * @description
   * Players best lap time
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapBestLapTime: TelemetryVariable;

  /**
   * LapLastLapTime
   *
   * @description
   * Players last lap time
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapLastLapTime: TelemetryVariable;

  /**
   * LapCurrentLapTime
   *
   * @description
   * Estimate of players current lap time as shown in F3 box
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapCurrentLapTime: TelemetryVariable;

  /**
   * LapLasNLapSeq
   *
   * @description
   * Player num consecutive clean laps completed for N average
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapLasNLapSeq: TelemetryVariable;

  /**
   * LapLastNLapTime
   *
   * @description
   * Player last N average lap time
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapLastNLapTime: TelemetryVariable;

  /**
   * LapBestNLapLap
   *
   * @description
   * Player last lap in best N average lap time
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapBestNLapLap: TelemetryVariable;

  /**
   * LapBestNLapTime
   *
   * @description
   * Player best N average lap time
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapBestNLapTime: TelemetryVariable;

  /**
   * LapDeltaToBestLap
   *
   * @description
   * Delta time for best lap
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDeltaToBestLap: TelemetryVariable;

  /**
   * LapDeltaToBestLap_DD
   *
   * @description
   * Rate of change of delta time for best lap
   * Unit of the variable: s/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDeltaToBestLap_DD: TelemetryVariable;

  /**
   * LapDeltaToBestLap_OK
   *
   * @description
   * Delta time for best lap is valid
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDeltaToBestLap_OK: TelemetryVariable<boolean[]>;

  /**
   * LapDeltaToOptimalLap
   *
   * @description
   * Delta time for optimal lap
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDeltaToOptimalLap: TelemetryVariable;

  /**
   * LapDeltaToOptimalLap_DD
   *
   * @description
   * Rate of change of delta time for optimal lap
   * Unit of the variable: s/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDeltaToOptimalLap_DD: TelemetryVariable;

  /**
   * LapDeltaToOptimalLap_OK
   *
   * @description
   * Delta time for optimal lap is valid
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDeltaToOptimalLap_OK: TelemetryVariable<boolean[]>;

  /**
   * LapDeltaToSessionBestLap
   *
   * @description
   * Delta time for session best lap
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDeltaToSessionBestLap: TelemetryVariable;

  /**
   * LapDeltaToSessionBestLap_DD
   *
   * @description
   * Rate of change of delta time for session best lap
   * Unit of the variable: s/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDeltaToSessionBestLap_DD: TelemetryVariable;

  /**
   * LapDeltaToSessionBestLap_OK
   *
   * @description
   * Delta time for session best lap is valid
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDeltaToSessionBestLap_OK: TelemetryVariable<boolean[]>;

  /**
   * LapDeltaToSessionOptimalLap
   *
   * @description
   * Delta time for session optimal lap
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDeltaToSessionOptimalLap: TelemetryVariable;

  /**
   * LapDeltaToSessionOptimalLap_DD
   *
   * @description
   * Rate of change of delta time for session optimal lap
   * Unit of the variable: s/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDeltaToSessionOptimalLap_DD: TelemetryVariable;

  /**
   * LapDeltaToSessionOptimalLap_OK
   *
   * @description
   * Delta time for session optimal lap is valid
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDeltaToSessionOptimalLap_OK: TelemetryVariable<boolean[]>;

  /**
   * LapDeltaToSessionLastlLap
   *
   * @description
   * Delta time for session last lap
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDeltaToSessionLastlLap: TelemetryVariable;

  /**
   * LapDeltaToSessionLastlLap_DD
   *
   * @description
   * Rate of change of delta time for session last lap
   * Unit of the variable: s/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDeltaToSessionLastlLap_DD: TelemetryVariable;

  /**
   * LapDeltaToSessionLastlLap_OK
   *
   * @description
   * Delta time for session last lap is valid
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LapDeltaToSessionLastlLap_OK: TelemetryVariable<boolean[]>;

  /**
   * Speed
   *
   * @description
   * GPS vehicle speed
   * Unit of the variable: m/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  Speed: TelemetryVariable;

  /**
   * Yaw
   *
   * @description
   * Yaw orientation
   * Unit of the variable: rad
   * This variable does not count as a time.
   * Expected data length: 1
   */
  Yaw: TelemetryVariable;

  /**
   * YawNorth
   *
   * @description
   * Yaw orientation relative to north
   * Unit of the variable: rad
   * This variable does not count as a time.
   * Expected data length: 1
   */
  YawNorth: TelemetryVariable;

  /**
   * Pitch
   *
   * @description
   * Pitch orientation
   * Unit of the variable: rad
   * This variable does not count as a time.
   * Expected data length: 1
   */
  Pitch: TelemetryVariable;

  /**
   * Roll
   *
   * @description
   * Roll orientation
   * Unit of the variable: rad
   * This variable does not count as a time.
   * Expected data length: 1
   */
  Roll: TelemetryVariable;

  /**
   * EnterExitReset
   *
   * @description
   * Indicate action the reset key will take 0 enter 1 exit 2 reset
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  EnterExitReset: TelemetryVariable;

  /**
   * TrackTemp
   *
   * @description
   * Deprecated  set to TrackTempCrew
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  TrackTemp: TelemetryVariable;

  /**
   * TrackTempCrew
   *
   * @description
   * Temperature of track measured by crew around track
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  TrackTempCrew: TelemetryVariable;

  /**
   * AirTemp
   *
   * @description
   * Temperature of air at start/finish line
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  AirTemp: TelemetryVariable;

  /**
   * TrackWetness
   *
   * @description
   * How wet is the average track surface
   * Unit of the variable: irsdk_TrackWetness
   * This variable does not count as a time.
   * Expected data length: 1
   */
  TrackWetness: TelemetryVariable;

  /**
   * Skies
   *
   * @description
   * Skies (0=clear/1=p cloudy/2=m cloudy/3=overcast)
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  Skies: TelemetryVariable;

  /**
   * AirDensity
   *
   * @description
   * Density of air at start/finish line
   * Unit of the variable: kg/m^3
   * This variable does not count as a time.
   * Expected data length: 1
   */
  AirDensity: TelemetryVariable;

  /**
   * AirPressure
   *
   * @description
   * Pressure of air at start/finish line
   * Unit of the variable: Pa
   * This variable does not count as a time.
   * Expected data length: 1
   */
  AirPressure: TelemetryVariable;

  /**
   * WindVel
   *
   * @description
   * Wind velocity at start/finish line
   * Unit of the variable: m/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  WindVel: TelemetryVariable;

  /**
   * WindDir
   *
   * @description
   * Wind direction at start/finish line
   * Unit of the variable: rad
   * This variable does not count as a time.
   * Expected data length: 1
   */
  WindDir: TelemetryVariable;

  /**
   * RelativeHumidity
   *
   * @description
   * Relative Humidity at start/finish line
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RelativeHumidity: TelemetryVariable;

  /**
   * FogLevel
   *
   * @description
   * Fog level at start/finish line
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  FogLevel: TelemetryVariable;

  /**
   * Precipitation
   *
   * @description
   * Precipitation at start/finish line
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  Precipitation: TelemetryVariable;

  /**
   * SolarAltitude
   *
   * @description
   * Sun angle above horizon in radians
   * Unit of the variable: rad
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SolarAltitude: TelemetryVariable;

  /**
   * SolarAzimuth
   *
   * @description
   * Sun angle clockwise from north in radians
   * Unit of the variable: rad
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SolarAzimuth: TelemetryVariable;

  /**
   * WeatherDeclaredWet
   *
   * @description
   * The steward says rain tires can be used
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  WeatherDeclaredWet: TelemetryVariable<boolean[]>;

  /**
   * SteeringFFBEnabled
   *
   * @description
   * Force feedback is enabled
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SteeringFFBEnabled: TelemetryVariable<boolean[]>;

  /**
   * DCLapStatus
   *
   * @description
   * Status of driver change lap requirements
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  DCLapStatus: TelemetryVariable;

  /**
   * DCDriversSoFar
   *
   * @description
   * Number of team drivers who have run a stint
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  DCDriversSoFar: TelemetryVariable;

  /**
   * OkToReloadTextures
   *
   * @description
   * True if it is ok to reload car textures at this time
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  OkToReloadTextures: TelemetryVariable<boolean[]>;

  /**
   * LoadNumTextures
   *
   * @description
   * True if the car_num texture will be loaded
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LoadNumTextures: TelemetryVariable<boolean[]>;

  /**
   * CarLeftRight
   *
   * @description
   * Notify if car is to the left or right of driver
   * Unit of the variable: irsdk_CarLeftRight
   * This variable does not count as a time.
   * Expected data length: 1
   */
  CarLeftRight: TelemetryVariable;

  /**
   * PitsOpen
   *
   * @description
   * True if pit stop is allowed for the current player
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PitsOpen: TelemetryVariable<boolean[]>;

  /**
   * VidCapEnabled
   *
   * @description
   * True if video capture system is enabled
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  VidCapEnabled: TelemetryVariable<boolean[]>;

  /**
   * VidCapActive
   *
   * @description
   * True if video currently being captured
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  VidCapActive: TelemetryVariable<boolean[]>;

  /**
   * PlayerIncidents
   *
   * @description
   * Log incidents that the player recieved
   * Unit of the variable: irsdk_IncidentFlags
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PlayerIncidents: TelemetryVariable;

  /**
   * PitRepairLeft
   *
   * @description
   * Time left for mandatory pit repairs if repairs are active
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PitRepairLeft: TelemetryVariable;

  /**
   * PitOptRepairLeft
   *
   * @description
   * Time left for optional repairs if repairs are active
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PitOptRepairLeft: TelemetryVariable;

  /**
   * PitstopActive
   *
   * @description
   * Is the player getting pit stop service
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PitstopActive: TelemetryVariable<boolean[]>;

  /**
   * FastRepairUsed
   *
   * @description
   * How many fast repairs used so far
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  FastRepairUsed: TelemetryVariable;

  /**
   * FastRepairAvailable
   *
   * @description
   * How many fast repairs left  255 is unlimited
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  FastRepairAvailable: TelemetryVariable;

  /**
   * LFTiresUsed
   *
   * @description
   * How many left front tires used so far
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LFTiresUsed: TelemetryVariable;

  /**
   * RFTiresUsed
   *
   * @description
   * How many right front tires used so far
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RFTiresUsed: TelemetryVariable;

  /**
   * LRTiresUsed
   *
   * @description
   * How many left rear tires used so far
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LRTiresUsed: TelemetryVariable;

  /**
   * RRTiresUsed
   *
   * @description
   * How many right rear tires used so far
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RRTiresUsed: TelemetryVariable;

  /**
   * LeftTireSetsUsed
   *
   * @description
   * How many left tire sets used so far
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LeftTireSetsUsed: TelemetryVariable;

  /**
   * RightTireSetsUsed
   *
   * @description
   * How many right tire sets used so far
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RightTireSetsUsed: TelemetryVariable;

  /**
   * FrontTireSetsUsed
   *
   * @description
   * How many front tire sets used so far
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  FrontTireSetsUsed: TelemetryVariable;

  /**
   * RearTireSetsUsed
   *
   * @description
   * How many rear tire sets used so far
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RearTireSetsUsed: TelemetryVariable;

  /**
   * TireSetsUsed
   *
   * @description
   * How many tire sets used so far
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  TireSetsUsed: TelemetryVariable;

  /**
   * LFTiresAvailable
   *
   * @description
   * How many left front tires are remaining  255 is unlimited
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LFTiresAvailable: TelemetryVariable;

  /**
   * RFTiresAvailable
   *
   * @description
   * How many right front tires are remaining  255 is unlimited
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RFTiresAvailable: TelemetryVariable;

  /**
   * LRTiresAvailable
   *
   * @description
   * How many left rear tires are remaining  255 is unlimited
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LRTiresAvailable: TelemetryVariable;

  /**
   * RRTiresAvailable
   *
   * @description
   * How many right rear tires are remaining  255 is unlimited
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RRTiresAvailable: TelemetryVariable;

  /**
   * LeftTireSetsAvailable
   *
   * @description
   * How many left tire sets are remaining  255 is unlimited
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LeftTireSetsAvailable: TelemetryVariable;

  /**
   * RightTireSetsAvailable
   *
   * @description
   * How many right tire sets are remaining  255 is unlimited
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RightTireSetsAvailable: TelemetryVariable;

  /**
   * FrontTireSetsAvailable
   *
   * @description
   * How many front tire sets are remaining  255 is unlimited
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  FrontTireSetsAvailable: TelemetryVariable;

  /**
   * RearTireSetsAvailable
   *
   * @description
   * How many rear tire sets are remaining  255 is unlimited
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RearTireSetsAvailable: TelemetryVariable;

  /**
   * TireSetsAvailable
   *
   * @description
   * How many tire sets are remaining  255 is unlimited
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  TireSetsAvailable: TelemetryVariable;

  /**
   * CamCarIdx
   *
   * @description
   * Active camera's focus car index
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  CamCarIdx: TelemetryVariable;

  /**
   * CamCameraNumber
   *
   * @description
   * Active camera number
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  CamCameraNumber: TelemetryVariable;

  /**
   * CamGroupNumber
   *
   * @description
   * Active camera group number
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  CamGroupNumber: TelemetryVariable;

  /**
   * CamCameraState
   *
   * @description
   * State of camera system
   * Unit of the variable: irsdk_CameraState
   * This variable does not count as a time.
   * Expected data length: 1
   */
  CamCameraState: TelemetryVariable;

  /**
   * IsOnTrackCar
   *
   * @description
   * 1=Car on track physics running
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  IsOnTrackCar: TelemetryVariable<boolean[]>;

  /**
   * IsInGarage
   *
   * @description
   * 1=Car in garage physics running
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  IsInGarage: TelemetryVariable<boolean[]>;

  /**
   * SteeringWheelAngleMax
   *
   * @description
   * Steering wheel max angle
   * Unit of the variable: rad
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SteeringWheelAngleMax: TelemetryVariable;

  /**
   * ShiftPowerPct
   *
   * @description
   * Friction torque applied to gears when shifting or grinding
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ShiftPowerPct: TelemetryVariable;

  /**
   * ShiftGrindRPM
   *
   * @description
   * RPM of shifter grinding noise
   * Unit of the variable: RPM
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ShiftGrindRPM: TelemetryVariable;

  /**
   * ThrottleRaw
   *
   * @description
   * Raw throttle input 0=off throttle to 1=full throttle
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ThrottleRaw: TelemetryVariable;

  /**
   * BrakeRaw
   *
   * @description
   * Raw brake input 0=brake released to 1=max pedal force
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  BrakeRaw: TelemetryVariable;

  /**
   * ClutchRaw
   *
   * @description
   * Raw clutch input 0=disengaged to 1=fully engaged
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ClutchRaw: TelemetryVariable;

  /**
   * HandbrakeRaw
   *
   * @description
   * Raw handbrake input 0=handbrake released to 1=max force
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  HandbrakeRaw: TelemetryVariable;

  /**
   * BrakeABSactive
   *
   * @description
   * true if abs is currently reducing brake force pressure
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  BrakeABSactive: TelemetryVariable<boolean[]>;

  /**
   * Shifter
   *
   * @description
   * Log inputs from the players shifter control
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  Shifter: TelemetryVariable;

  /**
   * EngineWarnings
   *
   * @description
   * Bitfield for warning lights
   * Unit of the variable: irsdk_EngineWarnings
   * This variable does not count as a time.
   * Expected data length: 1
   */
  EngineWarnings: TelemetryVariable;

  /**
   * FuelLevelPct
   *
   * @description
   * Percent fuel remaining
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  FuelLevelPct: TelemetryVariable;

  /**
   * PitSvFlags
   *
   * @description
   * Bitfield of pit service checkboxes
   * Unit of the variable: irsdk_PitSvFlags
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PitSvFlags: TelemetryVariable;

  /**
   * PitSvLFP
   *
   * @description
   * Pit service left front tire pressure
   * Unit of the variable: kPa
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PitSvLFP: TelemetryVariable;

  /**
   * PitSvRFP
   *
   * @description
   * Pit service right front tire pressure
   * Unit of the variable: kPa
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PitSvRFP: TelemetryVariable;

  /**
   * PitSvLRP
   *
   * @description
   * Pit service left rear tire pressure
   * Unit of the variable: kPa
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PitSvLRP: TelemetryVariable;

  /**
   * PitSvRRP
   *
   * @description
   * Pit service right rear tire pressure
   * Unit of the variable: kPa
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PitSvRRP: TelemetryVariable;

  /**
   * PitSvFuel
   *
   * @description
   * Pit service fuel add amount
   * Unit of the variable: l or kWh
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PitSvFuel: TelemetryVariable;

  /**
   * PitSvTireCompound
   *
   * @description
   * Pit service pending tire compound
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PitSvTireCompound: TelemetryVariable;

  /**
   * CarIdxP2P_Status
   *
   * @description
   * Push2Pass active or not
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxP2P_Status: TelemetryVariable<boolean[]>;

  /**
   * CarIdxP2P_Count
   *
   * @description
   * Push2Pass count of usage (or remaining in Race)
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 64
   */
  CarIdxP2P_Count: TelemetryVariable;

  /**
   * P2P_Status
   *
   * @description
   * Push2Pass active or not on your car
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  P2P_Status: TelemetryVariable<boolean[]>;

  /**
   * P2P_Count
   *
   * @description
   * Push2Pass count of usage (or remaining in Race) on your car
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  P2P_Count: TelemetryVariable;

  /**
   * SteeringWheelPctTorque
   *
   * @description
   * Force feedback % max torque on steering shaft unsigned
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SteeringWheelPctTorque: TelemetryVariable;

  /**
   * SteeringWheelPctTorqueSign
   *
   * @description
   * Force feedback % max torque on steering shaft signed
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SteeringWheelPctTorqueSign: TelemetryVariable;

  /**
   * SteeringWheelPctTorqueSignStops
   *
   * @description
   * Force feedback % max torque on steering shaft signed stops
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SteeringWheelPctTorqueSignStops: TelemetryVariable;

  /**
   * SteeringWheelPctIntensity
   *
   * @description
   * Force feedback % max intensity
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SteeringWheelPctIntensity: TelemetryVariable;

  /**
   * SteeringWheelPctSmoothing
   *
   * @description
   * Force feedback % max smoothing
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SteeringWheelPctSmoothing: TelemetryVariable;

  /**
   * SteeringWheelPctDamper
   *
   * @description
   * Force feedback % max damping
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SteeringWheelPctDamper: TelemetryVariable;

  /**
   * SteeringWheelLimiter
   *
   * @description
   * Force feedback limiter strength limits impacts and oscillation
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SteeringWheelLimiter: TelemetryVariable;

  /**
   * SteeringWheelMaxForceNm
   *
   * @description
   * Value of strength or max force slider in Nm for FFB
   * Unit of the variable: N*m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SteeringWheelMaxForceNm: TelemetryVariable;

  /**
   * SteeringWheelPeakForceNm
   *
   * @description
   * Peak torque mapping to direct input units for FFB
   * Unit of the variable: N*m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SteeringWheelPeakForceNm: TelemetryVariable;

  /**
   * SteeringWheelUseLinear
   *
   * @description
   * True if steering wheel force is using linear mode
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SteeringWheelUseLinear: TelemetryVariable<boolean[]>;

  /**
   * ShiftIndicatorPct
   *
   * @description
   * DEPRECATED use DriverCarSLBlinkRPM instead
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ShiftIndicatorPct: TelemetryVariable;

  /**
   * IsGarageVisible
   *
   * @description
   * 1=Garage screen is visible
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  IsGarageVisible: TelemetryVariable<boolean[]>;

  /**
   * ReplayPlaySpeed
   *
   * @description
   * Replay playback speed
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ReplayPlaySpeed: TelemetryVariable;

  /**
   * ReplayPlaySlowMotion
   *
   * @description
   * 0=not slow motion  1=replay is in slow motion
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ReplayPlaySlowMotion: TelemetryVariable<boolean[]>;

  /**
   * ReplaySessionTime
   *
   * @description
   * Seconds since replay session start
   * Unit of the variable: s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ReplaySessionTime: TelemetryVariable;

  /**
   * ReplaySessionNum
   *
   * @description
   * Replay session number
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ReplaySessionNum: TelemetryVariable;

  /**
   * TireLF_RumblePitch
   *
   * @description
   * Players LF Tire Sound rumblestrip pitch
   * Unit of the variable: Hz
   * This variable does not count as a time.
   * Expected data length: 1
   */
  TireLF_RumblePitch: TelemetryVariable;

  /**
   * TireRF_RumblePitch
   *
   * @description
   * Players RF Tire Sound rumblestrip pitch
   * Unit of the variable: Hz
   * This variable does not count as a time.
   * Expected data length: 1
   */
  TireRF_RumblePitch: TelemetryVariable;

  /**
   * TireLR_RumblePitch
   *
   * @description
   * Players LR Tire Sound rumblestrip pitch
   * Unit of the variable: Hz
   * This variable does not count as a time.
   * Expected data length: 1
   */
  TireLR_RumblePitch: TelemetryVariable;

  /**
   * TireRR_RumblePitch
   *
   * @description
   * Players RR Tire Sound rumblestrip pitch
   * Unit of the variable: Hz
   * This variable does not count as a time.
   * Expected data length: 1
   */
  TireRR_RumblePitch: TelemetryVariable;

  /**
   * SteeringWheelTorque_ST
   *
   * @description
   * Output torque on steering shaft at 360 Hz
   * Unit of the variable: N*m
   * This variable counts as a time.
   * Expected data length: 6
   */
  SteeringWheelTorque_ST: TelemetryVariable;

  /**
   * SteeringWheelTorque
   *
   * @description
   * Output torque on steering shaft
   * Unit of the variable: N*m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  SteeringWheelTorque: TelemetryVariable;

  /**
   * VelocityZ_ST
   *
   * @description
   * Z velocity
   * Unit of the variable: m/s at 360 Hz
   * This variable counts as a time.
   * Expected data length: 6
   */
  VelocityZ_ST: TelemetryVariable;

  /**
   * VelocityY_ST
   *
   * @description
   * Y velocity
   * Unit of the variable: m/s at 360 Hz
   * This variable counts as a time.
   * Expected data length: 6
   */
  VelocityY_ST: TelemetryVariable;

  /**
   * VelocityX_ST
   *
   * @description
   * X velocity
   * Unit of the variable: m/s at 360 Hz
   * This variable counts as a time.
   * Expected data length: 6
   */
  VelocityX_ST: TelemetryVariable;

  /**
   * VelocityZ
   *
   * @description
   * Z velocity
   * Unit of the variable: m/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  VelocityZ: TelemetryVariable;

  /**
   * VelocityY
   *
   * @description
   * Y velocity
   * Unit of the variable: m/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  VelocityY: TelemetryVariable;

  /**
   * VelocityX
   *
   * @description
   * X velocity
   * Unit of the variable: m/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  VelocityX: TelemetryVariable;

  /**
   * YawRate_ST
   *
   * @description
   * Yaw rate at 360 Hz
   * Unit of the variable: rad/s
   * This variable counts as a time.
   * Expected data length: 6
   */
  YawRate_ST: TelemetryVariable;

  /**
   * PitchRate_ST
   *
   * @description
   * Pitch rate at 360 Hz
   * Unit of the variable: rad/s
   * This variable counts as a time.
   * Expected data length: 6
   */
  PitchRate_ST: TelemetryVariable;

  /**
   * RollRate_ST
   *
   * @description
   * Roll rate at 360 Hz
   * Unit of the variable: rad/s
   * This variable counts as a time.
   * Expected data length: 6
   */
  RollRate_ST: TelemetryVariable;

  /**
   * YawRate
   *
   * @description
   * Yaw rate
   * Unit of the variable: rad/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  YawRate: TelemetryVariable;

  /**
   * PitchRate
   *
   * @description
   * Pitch rate
   * Unit of the variable: rad/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PitchRate: TelemetryVariable;

  /**
   * RollRate
   *
   * @description
   * Roll rate
   * Unit of the variable: rad/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RollRate: TelemetryVariable;

  /**
   * VertAccel_ST
   *
   * @description
   * Vertical acceleration (including gravity) at 360 Hz
   * Unit of the variable: m/s^2
   * This variable counts as a time.
   * Expected data length: 6
   */
  VertAccel_ST: TelemetryVariable;

  /**
   * LatAccel_ST
   *
   * @description
   * Lateral acceleration (including gravity) at 360 Hz
   * Unit of the variable: m/s^2
   * This variable counts as a time.
   * Expected data length: 6
   */
  LatAccel_ST: TelemetryVariable;

  /**
   * LongAccel_ST
   *
   * @description
   * Longitudinal acceleration (including gravity) at 360 Hz
   * Unit of the variable: m/s^2
   * This variable counts as a time.
   * Expected data length: 6
   */
  LongAccel_ST: TelemetryVariable;

  /**
   * VertAccel
   *
   * @description
   * Vertical acceleration (including gravity)
   * Unit of the variable: m/s^2
   * This variable does not count as a time.
   * Expected data length: 1
   */
  VertAccel: TelemetryVariable;

  /**
   * LatAccel
   *
   * @description
   * Lateral acceleration (including gravity)
   * Unit of the variable: m/s^2
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LatAccel: TelemetryVariable;

  /**
   * LongAccel
   *
   * @description
   * Longitudinal acceleration (including gravity)
   * Unit of the variable: m/s^2
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LongAccel: TelemetryVariable;

  /**
   * dcStarter
   *
   * @description
   * In car trigger car starter
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcStarter: TelemetryVariable<boolean[]>;

  /**
   * dcPitSpeedLimiterToggle
   *
   * @description
   * Track if pit speed limiter system is enabled
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcPitSpeedLimiterToggle: TelemetryVariable<boolean[]>;

  /**
   * dcTractionControlToggle
   *
   * @description
   * In car traction control active
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcTractionControlToggle: TelemetryVariable<boolean[]>;

  /**
   * dcHeadlightFlash
   *
   * @description
   * In car headlight flash control active
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcHeadlightFlash: TelemetryVariable<boolean[]>;

  /**
   * dcLowFuelAccept
   *
   * @description
   * In car low fuel accept
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcLowFuelAccept: TelemetryVariable<boolean[]>;

  /**
   * dpRFTireChange
   *
   * @description
   * Pitstop rf tire change request
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dpRFTireChange: TelemetryVariable;

  /**
   * dpLFTireChange
   *
   * @description
   * Pitstop lf tire change request
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dpLFTireChange: TelemetryVariable;

  /**
   * dpRRTireChange
   *
   * @description
   * Pitstop rr tire change request
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dpRRTireChange: TelemetryVariable;

  /**
   * dpLRTireChange
   *
   * @description
   * Pitstop lr tire change request
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dpLRTireChange: TelemetryVariable;

  /**
   * dpFuelFill
   *
   * @description
   * Pitstop fuel fill flag
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dpFuelFill: TelemetryVariable;

  /**
   * dpFuelAutoFillEnabled
   *
   * @description
   * Pitstop auto fill fuel system enabled
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dpFuelAutoFillEnabled: TelemetryVariable;

  /**
   * dpFuelAutoFillActive
   *
   * @description
   * Pitstop auto fill fuel next stop flag
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dpFuelAutoFillActive: TelemetryVariable;

  /**
   * dpWindshieldTearoff
   *
   * @description
   * Pitstop windshield tearoff
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dpWindshieldTearoff: TelemetryVariable;

  /**
   * dpFuelAddKg
   *
   * @description
   * Pitstop fuel add amount
   * Unit of the variable: kg
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dpFuelAddKg: TelemetryVariable;

  /**
   * dpFastRepair
   *
   * @description
   * Pitstop fast repair set
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dpFastRepair: TelemetryVariable;

  /**
   * dcDashPage
   *
   * @description
   * In car dash display page adjustment
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcDashPage: TelemetryVariable;

  /**
   * dcPowerSteering
   *
   * @description
   * In car power steering adjustment
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcPowerSteering: TelemetryVariable;

  /**
   * dcBrakeBias
   *
   * @description
   * In car brake bias adjustment
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcBrakeBias: TelemetryVariable;

  /**
   * dpLFTireColdPress
   *
   * @description
   * Pitstop lf tire cold pressure adjustment
   * Unit of the variable: Pa
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dpLFTireColdPress: TelemetryVariable;

  /**
   * dpRFTireColdPress
   *
   * @description
   * Pitstop rf cold tire pressure adjustment
   * Unit of the variable: Pa
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dpRFTireColdPress: TelemetryVariable;

  /**
   * dpLRTireColdPress
   *
   * @description
   * Pitstop lr tire cold pressure adjustment
   * Unit of the variable: Pa
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dpLRTireColdPress: TelemetryVariable;

  /**
   * dpRRTireColdPress
   *
   * @description
   * Pitstop rr cold tire pressure adjustment
   * Unit of the variable: Pa
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dpRRTireColdPress: TelemetryVariable;

  /**
   * dcTractionControl
   *
   * @description
   * In car traction control adjustment
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcTractionControl: TelemetryVariable;

  /**
   * dcABS
   *
   * @description
   * In car abs adjustment
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcABS: TelemetryVariable;

  /**
   * dcThrottleShape
   *
   * @description
   * In car throttle shape adjustment
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcThrottleShape: TelemetryVariable;

  /**
   * dcToggleWindshieldWipers
   *
   * @description
   * In car turn wipers on or off
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcToggleWindshieldWipers: TelemetryVariable<boolean[]>;

  /**
   * dcTriggerWindshieldWipers
   *
   * @description
   * In car momentarily turn on wipers
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcTriggerWindshieldWipers: TelemetryVariable<boolean[]>;

  /**
   * RFbrakeLinePress
   *
   * @description
   * RF brake line pressure
   * Unit of the variable: bar
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RFbrakeLinePress: TelemetryVariable;

  /**
   * RFcoldPressure
   *
   * @description
   * RF tire cold pressure  as set in the garage
   * Unit of the variable: kPa
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RFcoldPressure: TelemetryVariable;

  /**
   * RFodometer
   *
   * @description
   * RF distance tire traveled since being placed on car
   * Unit of the variable: m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RFodometer: TelemetryVariable;

  /**
   * RFtempCL
   *
   * @description
   * RF tire left carcass temperature
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RFtempCL: TelemetryVariable;

  /**
   * RFtempCM
   *
   * @description
   * RF tire middle carcass temperature
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RFtempCM: TelemetryVariable;

  /**
   * RFtempCR
   *
   * @description
   * RF tire right carcass temperature
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RFtempCR: TelemetryVariable;

  /**
   * RFwearL
   *
   * @description
   * RF tire left percent tread remaining
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RFwearL: TelemetryVariable;

  /**
   * RFwearM
   *
   * @description
   * RF tire middle percent tread remaining
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RFwearM: TelemetryVariable;

  /**
   * RFwearR
   *
   * @description
   * RF tire right percent tread remaining
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RFwearR: TelemetryVariable;

  /**
   * LFbrakeLinePress
   *
   * @description
   * LF brake line pressure
   * Unit of the variable: bar
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LFbrakeLinePress: TelemetryVariable;

  /**
   * LFcoldPressure
   *
   * @description
   * LF tire cold pressure  as set in the garage
   * Unit of the variable: kPa
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LFcoldPressure: TelemetryVariable;

  /**
   * LFodometer
   *
   * @description
   * LF distance tire traveled since being placed on car
   * Unit of the variable: m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LFodometer: TelemetryVariable;

  /**
   * LFtempCL
   *
   * @description
   * LF tire left carcass temperature
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LFtempCL: TelemetryVariable;

  /**
   * LFtempCM
   *
   * @description
   * LF tire middle carcass temperature
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LFtempCM: TelemetryVariable;

  /**
   * LFtempCR
   *
   * @description
   * LF tire right carcass temperature
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LFtempCR: TelemetryVariable;

  /**
   * LFwearL
   *
   * @description
   * LF tire left percent tread remaining
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LFwearL: TelemetryVariable;

  /**
   * LFwearM
   *
   * @description
   * LF tire middle percent tread remaining
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LFwearM: TelemetryVariable;

  /**
   * LFwearR
   *
   * @description
   * LF tire right percent tread remaining
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LFwearR: TelemetryVariable;

  /**
   * FuelUsePerHour
   *
   * @description
   * Engine fuel used instantaneous
   * Unit of the variable: kg/h
   * This variable does not count as a time.
   * Expected data length: 1
   */
  FuelUsePerHour: TelemetryVariable;

  /**
   * Voltage
   *
   * @description
   * Engine voltage
   * Unit of the variable: V
   * This variable does not count as a time.
   * Expected data length: 1
   */
  Voltage: TelemetryVariable;

  /**
   * WaterTemp
   *
   * @description
   * Engine coolant temp
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  WaterTemp: TelemetryVariable;

  /**
   * WaterLevel
   *
   * @description
   * Engine coolant level
   * Unit of the variable: l
   * This variable does not count as a time.
   * Expected data length: 1
   */
  WaterLevel: TelemetryVariable;

  /**
   * FuelPress
   *
   * @description
   * Engine fuel pressure
   * Unit of the variable: bar
   * This variable does not count as a time.
   * Expected data length: 1
   */
  FuelPress: TelemetryVariable;

  /**
   * OilTemp
   *
   * @description
   * Engine oil temperature
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  OilTemp: TelemetryVariable;

  /**
   * OilPress
   *
   * @description
   * Engine oil pressure
   * Unit of the variable: bar
   * This variable does not count as a time.
   * Expected data length: 1
   */
  OilPress: TelemetryVariable;

  /**
   * OilLevel
   *
   * @description
   * Engine oil level
   * Unit of the variable: l
   * This variable does not count as a time.
   * Expected data length: 1
   */
  OilLevel: TelemetryVariable;

  /**
   * ManifoldPress
   *
   * @description
   * Engine manifold pressure
   * Unit of the variable: bar
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ManifoldPress: TelemetryVariable;

  /**
   * FuelLevel
   *
   * @description
   * Liters of fuel remaining
   * Unit of the variable: l
   * This variable does not count as a time.
   * Expected data length: 1
   */
  FuelLevel: TelemetryVariable;

  /**
   * Engine0_RPM
   *
   * @description
   * Engine0Engine rpm
   * Unit of the variable: revs/min
   * This variable does not count as a time.
   * Expected data length: 1
   */
  Engine0_RPM: TelemetryVariable;

  /**
   * RRbrakeLinePress
   *
   * @description
   * RR brake line pressure
   * Unit of the variable: bar
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RRbrakeLinePress: TelemetryVariable;

  /**
   * RRcoldPressure
   *
   * @description
   * RR tire cold pressure  as set in the garage
   * Unit of the variable: kPa
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RRcoldPressure: TelemetryVariable;

  /**
   * RRodometer
   *
   * @description
   * RR distance tire traveled since being placed on car
   * Unit of the variable: m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RRodometer: TelemetryVariable;

  /**
   * RRtempCL
   *
   * @description
   * RR tire left carcass temperature
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RRtempCL: TelemetryVariable;

  /**
   * RRtempCM
   *
   * @description
   * RR tire middle carcass temperature
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RRtempCM: TelemetryVariable;

  /**
   * RRtempCR
   *
   * @description
   * RR tire right carcass temperature
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RRtempCR: TelemetryVariable;

  /**
   * RRwearL
   *
   * @description
   * RR tire left percent tread remaining
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RRwearL: TelemetryVariable;

  /**
   * RRwearM
   *
   * @description
   * RR tire middle percent tread remaining
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RRwearM: TelemetryVariable;

  /**
   * RRwearR
   *
   * @description
   * RR tire right percent tread remaining
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RRwearR: TelemetryVariable;

  /**
   * LRbrakeLinePress
   *
   * @description
   * LR brake line pressure
   * Unit of the variable: bar
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LRbrakeLinePress: TelemetryVariable;

  /**
   * LRcoldPressure
   *
   * @description
   * LR tire cold pressure  as set in the garage
   * Unit of the variable: kPa
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LRcoldPressure: TelemetryVariable;

  /**
   * LRodometer
   *
   * @description
   * LR distance tire traveled since being placed on car
   * Unit of the variable: m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LRodometer: TelemetryVariable;

  /**
   * LRtempCL
   *
   * @description
   * LR tire left carcass temperature
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LRtempCL: TelemetryVariable;

  /**
   * LRtempCM
   *
   * @description
   * LR tire middle carcass temperature
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LRtempCM: TelemetryVariable;

  /**
   * LRtempCR
   *
   * @description
   * LR tire right carcass temperature
   * Unit of the variable: C
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LRtempCR: TelemetryVariable;

  /**
   * LRwearL
   *
   * @description
   * LR tire left percent tread remaining
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LRwearL: TelemetryVariable;

  /**
   * LRwearM
   *
   * @description
   * LR tire middle percent tread remaining
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LRwearM: TelemetryVariable;

  /**
   * LRwearR
   *
   * @description
   * LR tire right percent tread remaining
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LRwearR: TelemetryVariable;

  /**
   * LRshockDefl
   *
   * @description
   * LR shock deflection
   * Unit of the variable: m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LRshockDefl: TelemetryVariable;

  /**
   * LRshockDefl_ST
   *
   * @description
   * LR shock deflection at 360 Hz
   * Unit of the variable: m
   * This variable counts as a time.
   * Expected data length: 6
   */
  LRshockDefl_ST: TelemetryVariable;

  /**
   * LRshockVel
   *
   * @description
   * LR shock velocity
   * Unit of the variable: m/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LRshockVel: TelemetryVariable;

  /**
   * LRshockVel_ST
   *
   * @description
   * LR shock velocity at 360 Hz
   * Unit of the variable: m/s
   * This variable counts as a time.
   * Expected data length: 6
   */
  LRshockVel_ST: TelemetryVariable;

  /**
   * RRshockDefl
   *
   * @description
   * RR shock deflection
   * Unit of the variable: m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RRshockDefl: TelemetryVariable;

  /**
   * RRshockDefl_ST
   *
   * @description
   * RR shock deflection at 360 Hz
   * Unit of the variable: m
   * This variable counts as a time.
   * Expected data length: 6
   */
  RRshockDefl_ST: TelemetryVariable;

  /**
   * RRshockVel
   *
   * @description
   * RR shock velocity
   * Unit of the variable: m/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RRshockVel: TelemetryVariable;

  /**
   * RRshockVel_ST
   *
   * @description
   * RR shock velocity at 360 Hz
   * Unit of the variable: m/s
   * This variable counts as a time.
   * Expected data length: 6
   */
  RRshockVel_ST: TelemetryVariable;

  /**
   * LFshockDefl
   *
   * @description
   * LF shock deflection
   * Unit of the variable: m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LFshockDefl: TelemetryVariable;

  /**
   * LFshockDefl_ST
   *
   * @description
   * LF shock deflection at 360 Hz
   * Unit of the variable: m
   * This variable counts as a time.
   * Expected data length: 6
   */
  LFshockDefl_ST: TelemetryVariable;

  /**
   * LFshockVel
   *
   * @description
   * LF shock velocity
   * Unit of the variable: m/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  LFshockVel: TelemetryVariable;

  /**
   * LFshockVel_ST
   *
   * @description
   * LF shock velocity at 360 Hz
   * Unit of the variable: m/s
   * This variable counts as a time.
   * Expected data length: 6
   */
  LFshockVel_ST: TelemetryVariable;

  /**
   * RFshockDefl
   *
   * @description
   * RF shock deflection
   * Unit of the variable: m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RFshockDefl: TelemetryVariable;

  /**
   * RFshockDefl_ST
   *
   * @description
   * RF shock deflection at 360 Hz
   * Unit of the variable: m
   * This variable counts as a time.
   * Expected data length: 6
   */
  RFshockDefl_ST: TelemetryVariable;

  /**
   * RFshockVel
   *
   * @description
   * RF shock velocity
   * Unit of the variable: m/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  RFshockVel: TelemetryVariable;

  /**
   * RFshockVel_ST
   *
   * @description
   * RF shock velocity at 360 Hz
   * Unit of the variable: m/s
   * This variable counts as a time.
   * Expected data length: 6
   */
  RFshockVel_ST: TelemetryVariable;

  /**
   * dcDRSToggle
   *
   * @description
   * In car toggle DRS
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcDRSToggle: TelemetryVariable<boolean[]>;

  /**
   * dcTearOffVisor
   *
   * @description
   * In car tear off visor film
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcTearOffVisor: TelemetryVariable<boolean[]>;

  /**
   * dpTireChange
   *
   * @description
   * Pitstop all tire change request
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dpTireChange: TelemetryVariable;

  /**
   * dpWingFront
   *
   * @description
   * Pitstop front wing adjustment
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dpWingFront: TelemetryVariable;

  /**
   * dcBrakeBiasFine
   *
   * @description
   * In car brake bias fine adjustment
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcBrakeBiasFine: TelemetryVariable;

  /**
   * dcPeakBrakeBias
   *
   * @description
   * In car peak brake bias adjustment
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcPeakBrakeBias: TelemetryVariable;

  /**
   * dcBrakeMisc
   *
   * @description
   * In car brake misc adjustment
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcBrakeMisc: TelemetryVariable;

  /**
   * dcEngineBraking
   *
   * @description
   * In car engine braking adjustment
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcEngineBraking: TelemetryVariable;

  /**
   * dcMGUKDeployMode
   *
   * @description
   * In car MGU-K deployment mode level adjustment
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcMGUKDeployMode: TelemetryVariable;

  /**
   * dcMGUKRegenGain
   *
   * @description
   * In car MUG-K re-gen gain adjustment
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcMGUKRegenGain: TelemetryVariable;

  /**
   * dcDiffEntry
   *
   * @description
   * In car diff entry adjustment
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcDiffEntry: TelemetryVariable;

  /**
   * dcDiffMiddle
   *
   * @description
   * In car diff middle adjustment
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcDiffMiddle: TelemetryVariable;

  /**
   * dcDiffExit
   *
   * @description
   * In car diff exit adjustment
   * Variable does not have a unit.
   * This variable does not count as a time.
   * Expected data length: 1
   */
  dcDiffExit: TelemetryVariable;

  /**
   * DRS_Status
   *
   * @description
   * Drag Reduction System Status
   * Unit of the variable:  
   * This variable does not count as a time.
   * Expected data length: 1
   */
  DRS_Status: TelemetryVariable;

  /**
   * PowerMGU_K
   *
   * @description
   * Engine MGU-K mechanical power
   * Unit of the variable: W
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PowerMGU_K: TelemetryVariable;

  /**
   * TorqueMGU_K
   *
   * @description
   * Engine MGU-K mechanical torque
   * Unit of the variable: Nm
   * This variable does not count as a time.
   * Expected data length: 1
   */
  TorqueMGU_K: TelemetryVariable;

  /**
   * PowerMGU_H
   *
   * @description
   * Engine MGU-H mechanical power
   * Unit of the variable: W
   * This variable does not count as a time.
   * Expected data length: 1
   */
  PowerMGU_H: TelemetryVariable;

  /**
   * EnergyERSBattery
   *
   * @description
   * Engine ERS battery charge
   * Unit of the variable: J
   * This variable does not count as a time.
   * Expected data length: 1
   */
  EnergyERSBattery: TelemetryVariable;

  /**
   * EnergyERSBatteryPct
   *
   * @description
   * Engine ERS battery charge as a percent
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  EnergyERSBatteryPct: TelemetryVariable;

  /**
   * EnergyBatteryToMGU_KLap
   *
   * @description
   * Electrical energy from battery to MGU-K per lap
   * Unit of the variable: J
   * This variable does not count as a time.
   * Expected data length: 1
   */
  EnergyBatteryToMGU_KLap: TelemetryVariable;

  /**
   * EnergyMGU_KLapDeployPct
   *
   * @description
   * Electrical energy available to MGU-K per lap as a percent
   * Unit of the variable: %
   * This variable does not count as a time.
   * Expected data length: 1
   */
  EnergyMGU_KLapDeployPct: TelemetryVariable;

  /**
   * Engine1_RPM
   *
   * @description
   * Engine1Engine rpm
   * Unit of the variable: revs/min
   * This variable does not count as a time.
   * Expected data length: 1
   */
  Engine1_RPM: TelemetryVariable;

  /**
   * CFshockDefl
   *
   * @description
   * CF shock deflection
   * Unit of the variable: m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  CFshockDefl: TelemetryVariable;

  /**
   * CFshockDefl_ST
   *
   * @description
   * CF shock deflection at 360 Hz
   * Unit of the variable: m
   * This variable counts as a time.
   * Expected data length: 6
   */
  CFshockDefl_ST: TelemetryVariable;

  /**
   * CFshockVel
   *
   * @description
   * CF shock velocity
   * Unit of the variable: m/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  CFshockVel: TelemetryVariable;

  /**
   * CFshockVel_ST
   *
   * @description
   * CF shock velocity at 360 Hz
   * Unit of the variable: m/s
   * This variable counts as a time.
   * Expected data length: 6
   */
  CFshockVel_ST: TelemetryVariable;

  /**
   * ROLLFshockDefl
   *
   * @description
   * ROLLF shock deflection
   * Unit of the variable: m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ROLLFshockDefl: TelemetryVariable;

  /**
   * ROLLFshockDefl_ST
   *
   * @description
   * ROLLF shock deflection at 360 Hz
   * Unit of the variable: m
   * This variable counts as a time.
   * Expected data length: 6
   */
  ROLLFshockDefl_ST: TelemetryVariable;

  /**
   * ROLLFshockVel
   *
   * @description
   * ROLLF shock velocity
   * Unit of the variable: m/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ROLLFshockVel: TelemetryVariable;

  /**
   * ROLLFshockVel_ST
   *
   * @description
   * ROLLF shock velocity at 360 Hz
   * Unit of the variable: m/s
   * This variable counts as a time.
   * Expected data length: 6
   */
  ROLLFshockVel_ST: TelemetryVariable;

  /**
   * CRshockDefl
   *
   * @description
   * CR shock deflection
   * Unit of the variable: m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  CRshockDefl: TelemetryVariable;

  /**
   * CRshockDefl_ST
   *
   * @description
   * CR shock deflection at 360 Hz
   * Unit of the variable: m
   * This variable counts as a time.
   * Expected data length: 6
   */
  CRshockDefl_ST: TelemetryVariable;

  /**
   * CRshockVel
   *
   * @description
   * CR shock velocity
   * Unit of the variable: m/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  CRshockVel: TelemetryVariable;

  /**
   * CRshockVel_ST
   *
   * @description
   * CR shock velocity at 360 Hz
   * Unit of the variable: m/s
   * This variable counts as a time.
   * Expected data length: 6
   */
  CRshockVel_ST: TelemetryVariable;

  /**
   * ROLLRshockDefl
   *
   * @description
   * ROLLR shock deflection
   * Unit of the variable: m
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ROLLRshockDefl: TelemetryVariable;

  /**
   * ROLLRshockDefl_ST
   *
   * @description
   * ROLLR shock deflection at 360 Hz
   * Unit of the variable: m
   * This variable counts as a time.
   * Expected data length: 6
   */
  ROLLRshockDefl_ST: TelemetryVariable;

  /**
   * ROLLRshockVel
   *
   * @description
   * ROLLR shock velocity
   * Unit of the variable: m/s
   * This variable does not count as a time.
   * Expected data length: 1
   */
  ROLLRshockVel: TelemetryVariable;

  /**
   * ROLLRshockVel_ST
   *
   * @description
   * ROLLR shock velocity at 360 Hz
   * Unit of the variable: m/s
   * This variable counts as a time.
   * Expected data length: 6
   */
  ROLLRshockVel_ST: TelemetryVariable;
}
