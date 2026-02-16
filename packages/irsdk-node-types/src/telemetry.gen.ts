// ! THIS FILE IS AUTO-GENERATED, EDITS WILL BE NOT PERSIST !
// ! To generate, run `pnpm types:generate` in the irsdk-node package !
// Last updated 2026-02-16T23:12:27.397Z

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
   * SessionTime - Seconds since session start
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SessionTime: TelemetryVariable;

  /**
   * SessionTick - Current update number
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SessionTick: TelemetryVariable;

  /**
   * SessionNum - Session number
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SessionNum: TelemetryVariable;

  /**
   * SessionState - Session state
   *
   * @remarks
   *
   * - Unit of the variable: irsdk_SessionState
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SessionState: TelemetryVariable;

  /**
   * SessionUniqueID - Session ID
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SessionUniqueID: TelemetryVariable;

  /**
   * SessionFlags - Session flags
   *
   * @remarks
   *
   * - Unit of the variable: irsdk_Flags
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SessionFlags: TelemetryVariable;

  /**
   * SessionTimeRemain - Seconds left till session ends
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SessionTimeRemain: TelemetryVariable;

  /**
   * SessionLapsRemain - Old laps left till session ends use SessionLapsRemainEx
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SessionLapsRemain: TelemetryVariable;

  /**
   * SessionLapsRemainEx - New improved laps left till session ends
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SessionLapsRemainEx: TelemetryVariable;

  /**
   * SessionTimeTotal - Total number of seconds in session
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SessionTimeTotal: TelemetryVariable;

  /**
   * SessionLapsTotal - Total number of laps in session
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SessionLapsTotal: TelemetryVariable;

  /**
   * SessionJokerLapsRemain - Joker laps remaining to be taken
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SessionJokerLapsRemain: TelemetryVariable;

  /**
   * SessionOnJokerLap - Player is currently completing a joker lap
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SessionOnJokerLap: TelemetryVariable<boolean[]>;

  /**
   * SessionTimeOfDay - Time of day in seconds
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SessionTimeOfDay: TelemetryVariable;

  /**
   * RadioTransmitCarIdx - The car index of the current person speaking on the radio
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RadioTransmitCarIdx: TelemetryVariable;

  /**
   * RadioTransmitRadioIdx - The radio index of the current person speaking on the radio
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RadioTransmitRadioIdx: TelemetryVariable;

  /**
   * RadioTransmitFrequencyIdx - The frequency index of the current person speaking on the radio
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RadioTransmitFrequencyIdx: TelemetryVariable;

  /**
   * DisplayUnits - Default units for the user interface 0 = english 1 = metric
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  DisplayUnits: TelemetryVariable;

  /**
   * DriverMarker - Driver activated flag
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  DriverMarker: TelemetryVariable<boolean[]>;

  /**
   * PushToTalk - Push to talk button state
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PushToTalk: TelemetryVariable<boolean[]>;

  /**
   * PushToPass - Push to pass button state
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PushToPass: TelemetryVariable<boolean[]>;

  /**
   * ManualBoost - Hybrid manual boost state
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ManualBoost: TelemetryVariable<boolean[]>;

  /**
   * ManualNoBoost - Hybrid manual no boost state
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ManualNoBoost: TelemetryVariable<boolean[]>;

  /**
   * IsOnTrack - 1=Car on track physics running with player in car
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  IsOnTrack: TelemetryVariable<boolean[]>;

  /**
   * IsReplayPlaying - 0=replay not playing  1=replay playing
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  IsReplayPlaying: TelemetryVariable<boolean[]>;

  /**
   * ReplayFrameNum - Integer replay frame number (60 per second)
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ReplayFrameNum: TelemetryVariable;

  /**
   * ReplayFrameNumEnd - Integer replay frame number from end of tape
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ReplayFrameNumEnd: TelemetryVariable;

  /**
   * IsDiskLoggingEnabled - 0=disk based telemetry turned off  1=turned on
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  IsDiskLoggingEnabled: TelemetryVariable<boolean[]>;

  /**
   * IsDiskLoggingActive - 0=disk based telemetry file not being written  1=being written
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  IsDiskLoggingActive: TelemetryVariable<boolean[]>;

  /**
   * FrameRate - Average frames per second
   *
   * @remarks
   *
   * - Unit of the variable: fps
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  FrameRate: TelemetryVariable;

  /**
   * CpuUsageFG - Percent of available time fg thread took with a 1 sec avg
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  CpuUsageFG: TelemetryVariable;

  /**
   * GpuUsage - Percent of available time gpu took with a 1 sec avg
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  GpuUsage: TelemetryVariable;

  /**
   * ChanAvgLatency - Communications average latency
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ChanAvgLatency: TelemetryVariable;

  /**
   * ChanLatency - Communications latency
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ChanLatency: TelemetryVariable;

  /**
   * ChanQuality - Communications quality
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ChanQuality: TelemetryVariable;

  /**
   * ChanPartnerQuality - Partner communications quality
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ChanPartnerQuality: TelemetryVariable;

  /**
   * CpuUsageBG - Percent of available time bg thread took with a 1 sec avg
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  CpuUsageBG: TelemetryVariable;

  /**
   * ChanClockSkew - Communications server clock skew
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ChanClockSkew: TelemetryVariable;

  /**
   * MemPageFaultSec - Memory page faults per second
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  MemPageFaultSec: TelemetryVariable;

  /**
   * MemSoftPageFaultSec - Memory soft page faults per second
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  MemSoftPageFaultSec: TelemetryVariable;

  /**
   * PlayerCarPosition - Players position in race
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarPosition: TelemetryVariable;

  /**
   * PlayerCarClassPosition - Players class position in race
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarClassPosition: TelemetryVariable;

  /**
   * PlayerCarClass - Player car class id
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarClass: TelemetryVariable;

  /**
   * PlayerTrackSurface - Players car track surface type
   *
   * @remarks
   *
   * - Unit of the variable: irsdk_TrkLoc
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerTrackSurface: TelemetryVariable;

  /**
   * PlayerTrackSurfaceMaterial - Players car track surface material type
   *
   * @remarks
   *
   * - Unit of the variable: irsdk_TrkSurf
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerTrackSurfaceMaterial: TelemetryVariable;

  /**
   * PlayerCarIdx - Players carIdx
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarIdx: TelemetryVariable;

  /**
   * PlayerCarTeamIncidentCount - Players team incident count for this session
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarTeamIncidentCount: TelemetryVariable;

  /**
   * PlayerCarMyIncidentCount - Players own incident count for this session
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarMyIncidentCount: TelemetryVariable;

  /**
   * PlayerCarDriverIncidentCount - Teams current drivers incident count for this session
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarDriverIncidentCount: TelemetryVariable;

  /**
   * PlayerCarWeightPenalty - Players weight penalty
   *
   * @remarks
   *
   * - Unit of the variable: kg
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarWeightPenalty: TelemetryVariable;

  /**
   * PlayerCarPowerAdjust - Players power adjust
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarPowerAdjust: TelemetryVariable;

  /**
   * PlayerCarDryTireSetLimit - Players dry tire set limit
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarDryTireSetLimit: TelemetryVariable;

  /**
   * PlayerCarTowTime - Players car is being towed if time is greater than zero
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarTowTime: TelemetryVariable;

  /**
   * PlayerCarInPitStall - Players car is properly in their pitstall
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarInPitStall: TelemetryVariable<boolean[]>;

  /**
   * PlayerCarPitSvStatus - Players car pit service status bits
   *
   * @remarks
   *
   * - Unit of the variable: irsdk_PitSvStatus
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarPitSvStatus: TelemetryVariable;

  /**
   * PlayerTireCompound - Players car current tire compound
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerTireCompound: TelemetryVariable;

  /**
   * PlayerFastRepairsUsed - Players car number of fast repairs used
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerFastRepairsUsed: TelemetryVariable;

  /**
   * CarIdxLap - Laps started by car index
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxLap: TelemetryVariable;

  /**
   * CarIdxLapCompleted - Laps completed by car index
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxLapCompleted: TelemetryVariable;

  /**
   * CarIdxLapDistPct - Percentage distance around lap by car index
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxLapDistPct: TelemetryVariable;

  /**
   * CarIdxTrackSurface - Track surface type by car index
   *
   * @remarks
   *
   * - Unit of the variable: irsdk_TrkLoc
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxTrackSurface: TelemetryVariable;

  /**
   * CarIdxTrackSurfaceMaterial - Track surface material type by car index
   *
   * @remarks
   *
   * - Unit of the variable: irsdk_TrkSurf
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxTrackSurfaceMaterial: TelemetryVariable;

  /**
   * CarIdxOnPitRoad - On pit road between the cones by car index
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxOnPitRoad: TelemetryVariable<boolean[]>;

  /**
   * CarIdxPosition - Cars position in race by car index
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxPosition: TelemetryVariable;

  /**
   * CarIdxClassPosition - Cars class position in race by car index
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxClassPosition: TelemetryVariable;

  /**
   * CarIdxClass - Cars class id by car index
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxClass: TelemetryVariable;

  /**
   * CarIdxF2Time - Race time behind leader or fastest lap time otherwise
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxF2Time: TelemetryVariable;

  /**
   * CarIdxEstTime - Estimated time to reach current location on track
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxEstTime: TelemetryVariable;

  /**
   * CarIdxLastLapTime - Cars last lap time
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxLastLapTime: TelemetryVariable;

  /**
   * CarIdxBestLapTime - Cars best lap time
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxBestLapTime: TelemetryVariable;

  /**
   * CarIdxBestLapNum - Cars best lap number
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxBestLapNum: TelemetryVariable;

  /**
   * CarIdxTireCompound - Cars current tire compound
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxTireCompound: TelemetryVariable;

  /**
   * CarIdxQualTireCompound - Cars Qual tire compound
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxQualTireCompound: TelemetryVariable;

  /**
   * CarIdxQualTireCompoundLocked - Cars Qual tire compound is locked-in
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxQualTireCompoundLocked: TelemetryVariable<boolean[]>;

  /**
   * CarIdxFastRepairsUsed - How many fast repairs each car has used
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxFastRepairsUsed: TelemetryVariable;

  /**
   * CarIdxSessionFlags - Session flags for each player
   *
   * @remarks
   *
   * - Unit of the variable: irsdk_Flags
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxSessionFlags: TelemetryVariable;

  /**
   * PaceMode - Are we pacing or not
   *
   * @remarks
   *
   * - Unit of the variable: irsdk_PaceMode
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PaceMode: TelemetryVariable;

  /**
   * CarIdxPaceLine - What line cars are pacing in  or -1 if not pacing
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxPaceLine: TelemetryVariable;

  /**
   * CarIdxPaceRow - What row cars are pacing in  or -1 if not pacing
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxPaceRow: TelemetryVariable;

  /**
   * CarIdxPaceFlags - Pacing status flags for each car
   *
   * @remarks
   *
   * - Unit of the variable: irsdk_PaceFlags
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxPaceFlags: TelemetryVariable;

  /**
   * OnPitRoad - Is the player car on pit road between the cones
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  OnPitRoad: TelemetryVariable<boolean[]>;

  /**
   * CarIdxSteer - Steering wheel angle by car index
   *
   * @remarks
   *
   * - Unit of the variable: rad
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxSteer: TelemetryVariable;

  /**
   * CarIdxRPM - Engine rpm by car index
   *
   * @remarks
   *
   * - Unit of the variable: revs/min
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxRPM: TelemetryVariable;

  /**
   * CarIdxGear - -1=reverse  0=neutral  1..n=current gear by car index
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxGear: TelemetryVariable;

  /**
   * SteeringWheelAngle - Steering wheel angle
   *
   * @remarks
   *
   * - Unit of the variable: rad
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SteeringWheelAngle: TelemetryVariable;

  /**
   * Throttle - 0=off throttle to 1=full throttle
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  Throttle: TelemetryVariable;

  /**
   * Brake - 0=brake released to 1=max pedal force
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  Brake: TelemetryVariable;

  /**
   * Clutch - 0=disengaged to 1=fully engaged
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  Clutch: TelemetryVariable;

  /**
   * Gear - -1=reverse  0=neutral  1..n=current gear
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  Gear: TelemetryVariable;

  /**
   * RPM - Engine rpm
   *
   * @remarks
   *
   * - Unit of the variable: revs/min
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RPM: TelemetryVariable;

  /**
   * PlayerCarSLFirstRPM - Shift light first light rpm
   *
   * @remarks
   *
   * - Unit of the variable: revs/min
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarSLFirstRPM: TelemetryVariable;

  /**
   * PlayerCarSLShiftRPM - Shift light shift rpm
   *
   * @remarks
   *
   * - Unit of the variable: revs/min
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarSLShiftRPM: TelemetryVariable;

  /**
   * PlayerCarSLLastRPM - Shift light last light rpm
   *
   * @remarks
   *
   * - Unit of the variable: revs/min
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarSLLastRPM: TelemetryVariable;

  /**
   * PlayerCarSLBlinkRPM - Shift light blink rpm
   *
   * @remarks
   *
   * - Unit of the variable: revs/min
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerCarSLBlinkRPM: TelemetryVariable;

  /**
   * Lap - Laps started count
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  Lap: TelemetryVariable;

  /**
   * LapCompleted - Laps completed count
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapCompleted: TelemetryVariable;

  /**
   * LapDist - Meters traveled from S/F this lap
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDist: TelemetryVariable;

  /**
   * LapDistPct - Percentage distance around lap
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDistPct: TelemetryVariable;

  /**
   * RaceLaps - Laps completed in race
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RaceLaps: TelemetryVariable;

  /**
   * CarDistAhead - Distance to first car in front of player in meters
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  CarDistAhead: TelemetryVariable;

  /**
   * CarDistBehind - Distance to first car behind player in meters
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  CarDistBehind: TelemetryVariable;

  /**
   * LapBestLap - Players best lap number
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapBestLap: TelemetryVariable;

  /**
   * LapBestLapTime - Players best lap time
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapBestLapTime: TelemetryVariable;

  /**
   * LapLastLapTime - Players last lap time
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapLastLapTime: TelemetryVariable;

  /**
   * LapCurrentLapTime - Estimate of players current lap time as shown in F3 box
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapCurrentLapTime: TelemetryVariable;

  /**
   * LapLasNLapSeq - Player num consecutive clean laps completed for N average
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapLasNLapSeq: TelemetryVariable;

  /**
   * LapLastNLapTime - Player last N average lap time
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapLastNLapTime: TelemetryVariable;

  /**
   * LapBestNLapLap - Player last lap in best N average lap time
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapBestNLapLap: TelemetryVariable;

  /**
   * LapBestNLapTime - Player best N average lap time
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapBestNLapTime: TelemetryVariable;

  /**
   * LapDeltaToBestLap - Delta time for best lap
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDeltaToBestLap: TelemetryVariable;

  /**
   * LapDeltaToBestLap_DD - Rate of change of delta time for best lap
   *
   * @remarks
   *
   * - Unit of the variable: s/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDeltaToBestLap_DD: TelemetryVariable;

  /**
   * LapDeltaToBestLap_OK - Delta time for best lap is valid
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDeltaToBestLap_OK: TelemetryVariable<boolean[]>;

  /**
   * LapDeltaToOptimalLap - Delta time for optimal lap
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDeltaToOptimalLap: TelemetryVariable;

  /**
   * LapDeltaToOptimalLap_DD - Rate of change of delta time for optimal lap
   *
   * @remarks
   *
   * - Unit of the variable: s/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDeltaToOptimalLap_DD: TelemetryVariable;

  /**
   * LapDeltaToOptimalLap_OK - Delta time for optimal lap is valid
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDeltaToOptimalLap_OK: TelemetryVariable<boolean[]>;

  /**
   * LapDeltaToSessionBestLap - Delta time for session best lap
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDeltaToSessionBestLap: TelemetryVariable;

  /**
   * LapDeltaToSessionBestLap_DD - Rate of change of delta time for session best lap
   *
   * @remarks
   *
   * - Unit of the variable: s/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDeltaToSessionBestLap_DD: TelemetryVariable;

  /**
   * LapDeltaToSessionBestLap_OK - Delta time for session best lap is valid
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDeltaToSessionBestLap_OK: TelemetryVariable<boolean[]>;

  /**
   * LapDeltaToSessionOptimalLap - Delta time for session optimal lap
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDeltaToSessionOptimalLap: TelemetryVariable;

  /**
   * LapDeltaToSessionOptimalLap_DD - Rate of change of delta time for session optimal lap
   *
   * @remarks
   *
   * - Unit of the variable: s/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDeltaToSessionOptimalLap_DD: TelemetryVariable;

  /**
   * LapDeltaToSessionOptimalLap_OK - Delta time for session optimal lap is valid
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDeltaToSessionOptimalLap_OK: TelemetryVariable<boolean[]>;

  /**
   * LapDeltaToSessionLastlLap - Delta time for session last lap
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDeltaToSessionLastlLap: TelemetryVariable;

  /**
   * LapDeltaToSessionLastlLap_DD - Rate of change of delta time for session last lap
   *
   * @remarks
   *
   * - Unit of the variable: s/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDeltaToSessionLastlLap_DD: TelemetryVariable;

  /**
   * LapDeltaToSessionLastlLap_OK - Delta time for session last lap is valid
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LapDeltaToSessionLastlLap_OK: TelemetryVariable<boolean[]>;

  /**
   * Speed - GPS vehicle speed
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  Speed: TelemetryVariable;

  /**
   * Yaw - Yaw orientation
   *
   * @remarks
   *
   * - Unit of the variable: rad
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  Yaw: TelemetryVariable;

  /**
   * YawNorth - Yaw orientation relative to north
   *
   * @remarks
   *
   * - Unit of the variable: rad
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  YawNorth: TelemetryVariable;

  /**
   * Pitch - Pitch orientation
   *
   * @remarks
   *
   * - Unit of the variable: rad
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  Pitch: TelemetryVariable;

  /**
   * Roll - Roll orientation
   *
   * @remarks
   *
   * - Unit of the variable: rad
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  Roll: TelemetryVariable;

  /**
   * EnterExitReset - Indicate action the reset key will take 0 enter 1 exit 2 reset
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  EnterExitReset: TelemetryVariable;

  /**
   * TrackTemp - Deprecated  set to TrackTempCrew
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  TrackTemp: TelemetryVariable;

  /**
   * TrackTempCrew - Temperature of track measured by crew around track
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  TrackTempCrew: TelemetryVariable;

  /**
   * AirTemp - Temperature of air at start/finish line
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  AirTemp: TelemetryVariable;

  /**
   * TrackWetness - How wet is the average track surface
   *
   * @remarks
   *
   * - Unit of the variable: irsdk_TrackWetness
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  TrackWetness: TelemetryVariable;

  /**
   * Skies - Skies (0=clear/1=p cloudy/2=m cloudy/3=overcast)
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  Skies: TelemetryVariable;

  /**
   * AirDensity - Density of air at start/finish line
   *
   * @remarks
   *
   * - Unit of the variable: kg/m^3
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  AirDensity: TelemetryVariable;

  /**
   * AirPressure - Pressure of air at start/finish line
   *
   * @remarks
   *
   * - Unit of the variable: Pa
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  AirPressure: TelemetryVariable;

  /**
   * WindVel - Wind velocity at start/finish line
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  WindVel: TelemetryVariable;

  /**
   * WindDir - Wind direction at start/finish line
   *
   * @remarks
   *
   * - Unit of the variable: rad
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  WindDir: TelemetryVariable;

  /**
   * RelativeHumidity - Relative Humidity at start/finish line
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RelativeHumidity: TelemetryVariable;

  /**
   * FogLevel - Fog level at start/finish line
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  FogLevel: TelemetryVariable;

  /**
   * Precipitation - Precipitation at start/finish line
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  Precipitation: TelemetryVariable;

  /**
   * SolarAltitude - Sun angle above horizon in radians
   *
   * @remarks
   *
   * - Unit of the variable: rad
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SolarAltitude: TelemetryVariable;

  /**
   * SolarAzimuth - Sun angle clockwise from north in radians
   *
   * @remarks
   *
   * - Unit of the variable: rad
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SolarAzimuth: TelemetryVariable;

  /**
   * WeatherDeclaredWet - The steward says rain tires can be used
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  WeatherDeclaredWet: TelemetryVariable<boolean[]>;

  /**
   * SteeringFFBEnabled - Force feedback is enabled
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SteeringFFBEnabled: TelemetryVariable<boolean[]>;

  /**
   * DCLapStatus - Status of driver change lap requirements
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  DCLapStatus: TelemetryVariable;

  /**
   * DCDriversSoFar - Number of team drivers who have run a stint
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  DCDriversSoFar: TelemetryVariable;

  /**
   * OkToReloadTextures - True if it is ok to reload car textures at this time
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  OkToReloadTextures: TelemetryVariable<boolean[]>;

  /**
   * LoadNumTextures - True if the car_num texture will be loaded
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LoadNumTextures: TelemetryVariable<boolean[]>;

  /**
   * CarLeftRight - Notify if car is to the left or right of driver
   *
   * @remarks
   *
   * - Unit of the variable: irsdk_CarLeftRight
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  CarLeftRight: TelemetryVariable;

  /**
   * PitsOpen - True if pit stop is allowed for the current player
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PitsOpen: TelemetryVariable<boolean[]>;

  /**
   * VidCapEnabled - True if video capture system is enabled
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  VidCapEnabled: TelemetryVariable<boolean[]>;

  /**
   * VidCapActive - True if video currently being captured
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  VidCapActive: TelemetryVariable<boolean[]>;

  /**
   * PlayerIncidents - Log incidents that the player recieved
   *
   * @remarks
   *
   * - Unit of the variable: irsdk_IncidentFlags
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PlayerIncidents: TelemetryVariable;

  /**
   * PitRepairLeft - Time left for mandatory pit repairs if repairs are active
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PitRepairLeft: TelemetryVariable;

  /**
   * PitOptRepairLeft - Time left for optional repairs if repairs are active
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PitOptRepairLeft: TelemetryVariable;

  /**
   * PitstopActive - Is the player getting pit stop service
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PitstopActive: TelemetryVariable<boolean[]>;

  /**
   * FastRepairUsed - How many fast repairs used so far
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  FastRepairUsed: TelemetryVariable;

  /**
   * FastRepairAvailable - How many fast repairs left  255 is unlimited
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  FastRepairAvailable: TelemetryVariable;

  /**
   * LFTiresUsed - How many left front tires used so far
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LFTiresUsed: TelemetryVariable;

  /**
   * RFTiresUsed - How many right front tires used so far
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RFTiresUsed: TelemetryVariable;

  /**
   * LRTiresUsed - How many left rear tires used so far
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LRTiresUsed: TelemetryVariable;

  /**
   * RRTiresUsed - How many right rear tires used so far
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RRTiresUsed: TelemetryVariable;

  /**
   * LeftTireSetsUsed - How many left tire sets used so far
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LeftTireSetsUsed: TelemetryVariable;

  /**
   * RightTireSetsUsed - How many right tire sets used so far
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RightTireSetsUsed: TelemetryVariable;

  /**
   * FrontTireSetsUsed - How many front tire sets used so far
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  FrontTireSetsUsed: TelemetryVariable;

  /**
   * RearTireSetsUsed - How many rear tire sets used so far
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RearTireSetsUsed: TelemetryVariable;

  /**
   * TireSetsUsed - How many tire sets used so far
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  TireSetsUsed: TelemetryVariable;

  /**
   * LFTiresAvailable - How many left front tires are remaining  255 is unlimited
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LFTiresAvailable: TelemetryVariable;

  /**
   * RFTiresAvailable - How many right front tires are remaining  255 is unlimited
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RFTiresAvailable: TelemetryVariable;

  /**
   * LRTiresAvailable - How many left rear tires are remaining  255 is unlimited
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LRTiresAvailable: TelemetryVariable;

  /**
   * RRTiresAvailable - How many right rear tires are remaining  255 is unlimited
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RRTiresAvailable: TelemetryVariable;

  /**
   * LeftTireSetsAvailable - How many left tire sets are remaining  255 is unlimited
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LeftTireSetsAvailable: TelemetryVariable;

  /**
   * RightTireSetsAvailable - How many right tire sets are remaining  255 is unlimited
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RightTireSetsAvailable: TelemetryVariable;

  /**
   * FrontTireSetsAvailable - How many front tire sets are remaining  255 is unlimited
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  FrontTireSetsAvailable: TelemetryVariable;

  /**
   * RearTireSetsAvailable - How many rear tire sets are remaining  255 is unlimited
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RearTireSetsAvailable: TelemetryVariable;

  /**
   * TireSetsAvailable - How many tire sets are remaining  255 is unlimited
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  TireSetsAvailable: TelemetryVariable;

  /**
   * CamCarIdx - Active camera's focus car index
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  CamCarIdx: TelemetryVariable;

  /**
   * CamCameraNumber - Active camera number
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  CamCameraNumber: TelemetryVariable;

  /**
   * CamGroupNumber - Active camera group number
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  CamGroupNumber: TelemetryVariable;

  /**
   * CamCameraState - State of camera system
   *
   * @remarks
   *
   * - Unit of the variable: irsdk_CameraState
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  CamCameraState: TelemetryVariable;

  /**
   * IsOnTrackCar - 1=Car on track physics running
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  IsOnTrackCar: TelemetryVariable<boolean[]>;

  /**
   * IsInGarage - 1=Car in garage physics running
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  IsInGarage: TelemetryVariable<boolean[]>;

  /**
   * SteeringWheelAngleMax - Steering wheel max angle
   *
   * @remarks
   *
   * - Unit of the variable: rad
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SteeringWheelAngleMax: TelemetryVariable;

  /**
   * ShiftPowerPct - Friction torque applied to gears when shifting or grinding
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ShiftPowerPct: TelemetryVariable;

  /**
   * ShiftGrindRPM - RPM of shifter grinding noise
   *
   * @remarks
   *
   * - Unit of the variable: RPM
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ShiftGrindRPM: TelemetryVariable;

  /**
   * ThrottleRaw - Raw throttle input 0=off throttle to 1=full throttle
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ThrottleRaw: TelemetryVariable;

  /**
   * BrakeRaw - Raw brake input 0=brake released to 1=max pedal force
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  BrakeRaw: TelemetryVariable;

  /**
   * ClutchRaw - Raw clutch input 0=disengaged to 1=fully engaged
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ClutchRaw: TelemetryVariable;

  /**
   * HandbrakeRaw - Raw handbrake input 0=handbrake released to 1=max force
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  HandbrakeRaw: TelemetryVariable;

  /**
   * BrakeABSactive - true if abs is currently reducing brake force pressure
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  BrakeABSactive: TelemetryVariable<boolean[]>;

  /**
   * Shifter - Log inputs from the players shifter control
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  Shifter: TelemetryVariable;

  /**
   * EngineWarnings - Bitfield for warning lights
   *
   * @remarks
   *
   * - Unit of the variable: irsdk_EngineWarnings
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  EngineWarnings: TelemetryVariable;

  /**
   * FuelLevelPct - Percent fuel remaining
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  FuelLevelPct: TelemetryVariable;

  /**
   * PitSvFlags - Bitfield of pit service checkboxes
   *
   * @remarks
   *
   * - Unit of the variable: irsdk_PitSvFlags
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PitSvFlags: TelemetryVariable;

  /**
   * PitSvLFP - Pit service left front tire pressure
   *
   * @remarks
   *
   * - Unit of the variable: kPa
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PitSvLFP: TelemetryVariable;

  /**
   * PitSvRFP - Pit service right front tire pressure
   *
   * @remarks
   *
   * - Unit of the variable: kPa
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PitSvRFP: TelemetryVariable;

  /**
   * PitSvLRP - Pit service left rear tire pressure
   *
   * @remarks
   *
   * - Unit of the variable: kPa
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PitSvLRP: TelemetryVariable;

  /**
   * PitSvRRP - Pit service right rear tire pressure
   *
   * @remarks
   *
   * - Unit of the variable: kPa
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PitSvRRP: TelemetryVariable;

  /**
   * PitSvFuel - Pit service fuel add amount
   *
   * @remarks
   *
   * - Unit of the variable: l or kWh
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PitSvFuel: TelemetryVariable;

  /**
   * PitSvTireCompound - Pit service pending tire compound
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PitSvTireCompound: TelemetryVariable;

  /**
   * CarIdxP2P_Status - Push2Pass active or not
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxP2P_Status: TelemetryVariable<boolean[]>;

  /**
   * CarIdxP2P_Count - Push2Pass count of usage (or remaining in Race)
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 64
   */
  CarIdxP2P_Count: TelemetryVariable;

  /**
   * P2P_Status - Push2Pass active or not on your car
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  P2P_Status: TelemetryVariable<boolean[]>;

  /**
   * P2P_Count - Push2Pass count of usage (or remaining in Race) on your car
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  P2P_Count: TelemetryVariable;

  /**
   * SteeringWheelPctTorque - Force feedback % max torque on steering shaft unsigned
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SteeringWheelPctTorque: TelemetryVariable;

  /**
   * SteeringWheelPctTorqueSign - Force feedback % max torque on steering shaft signed
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SteeringWheelPctTorqueSign: TelemetryVariable;

  /**
   * SteeringWheelPctTorqueSignStops - Force feedback % max torque on steering shaft signed stops
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SteeringWheelPctTorqueSignStops: TelemetryVariable;

  /**
   * SteeringWheelPctIntensity - Force feedback % max intensity
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SteeringWheelPctIntensity: TelemetryVariable;

  /**
   * SteeringWheelPctSmoothing - Force feedback % max smoothing
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SteeringWheelPctSmoothing: TelemetryVariable;

  /**
   * SteeringWheelPctDamper - Force feedback % max damping
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SteeringWheelPctDamper: TelemetryVariable;

  /**
   * SteeringWheelLimiter - Force feedback limiter strength limits impacts and oscillation
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SteeringWheelLimiter: TelemetryVariable;

  /**
   * SteeringWheelMaxForceNm - Value of strength or max force slider in Nm for FFB
   *
   * @remarks
   *
   * - Unit of the variable: N*m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SteeringWheelMaxForceNm: TelemetryVariable;

  /**
   * SteeringWheelPeakForceNm - Peak torque mapping to direct input units for FFB
   *
   * @remarks
   *
   * - Unit of the variable: N*m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SteeringWheelPeakForceNm: TelemetryVariable;

  /**
   * SteeringWheelUseLinear - True if steering wheel force is using linear mode
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SteeringWheelUseLinear: TelemetryVariable<boolean[]>;

  /**
   * ShiftIndicatorPct - DEPRECATED use DriverCarSLBlinkRPM instead
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ShiftIndicatorPct: TelemetryVariable;

  /**
   * IsGarageVisible - 1=Garage screen is visible
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  IsGarageVisible: TelemetryVariable<boolean[]>;

  /**
   * ReplayPlaySpeed - Replay playback speed
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ReplayPlaySpeed: TelemetryVariable;

  /**
   * ReplayPlaySlowMotion - 0=not slow motion  1=replay is in slow motion
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ReplayPlaySlowMotion: TelemetryVariable<boolean[]>;

  /**
   * ReplaySessionTime - Seconds since replay session start
   *
   * @remarks
   *
   * - Unit of the variable: s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ReplaySessionTime: TelemetryVariable;

  /**
   * ReplaySessionNum - Replay session number
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ReplaySessionNum: TelemetryVariable;

  /**
   * TireLF_RumblePitch - Players LF Tire Sound rumblestrip pitch
   *
   * @remarks
   *
   * - Unit of the variable: Hz
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  TireLF_RumblePitch: TelemetryVariable;

  /**
   * TireRF_RumblePitch - Players RF Tire Sound rumblestrip pitch
   *
   * @remarks
   *
   * - Unit of the variable: Hz
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  TireRF_RumblePitch: TelemetryVariable;

  /**
   * TireLR_RumblePitch - Players LR Tire Sound rumblestrip pitch
   *
   * @remarks
   *
   * - Unit of the variable: Hz
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  TireLR_RumblePitch: TelemetryVariable;

  /**
   * TireRR_RumblePitch - Players RR Tire Sound rumblestrip pitch
   *
   * @remarks
   *
   * - Unit of the variable: Hz
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  TireRR_RumblePitch: TelemetryVariable;

  /**
   * SteeringWheelTorque_ST - Output torque on steering shaft at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: N*m
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  SteeringWheelTorque_ST: TelemetryVariable;

  /**
   * SteeringWheelTorque - Output torque on steering shaft
   *
   * @remarks
   *
   * - Unit of the variable: N*m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  SteeringWheelTorque: TelemetryVariable;

  /**
   * VelocityZ_ST - Z velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s at 360 Hz
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  VelocityZ_ST: TelemetryVariable;

  /**
   * VelocityY_ST - Y velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s at 360 Hz
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  VelocityY_ST: TelemetryVariable;

  /**
   * VelocityX_ST - X velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s at 360 Hz
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  VelocityX_ST: TelemetryVariable;

  /**
   * VelocityZ - Z velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  VelocityZ: TelemetryVariable;

  /**
   * VelocityY - Y velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  VelocityY: TelemetryVariable;

  /**
   * VelocityX - X velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  VelocityX: TelemetryVariable;

  /**
   * YawRate_ST - Yaw rate at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: rad/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  YawRate_ST: TelemetryVariable;

  /**
   * PitchRate_ST - Pitch rate at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: rad/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  PitchRate_ST: TelemetryVariable;

  /**
   * RollRate_ST - Roll rate at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: rad/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  RollRate_ST: TelemetryVariable;

  /**
   * YawRate - Yaw rate
   *
   * @remarks
   *
   * - Unit of the variable: rad/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  YawRate: TelemetryVariable;

  /**
   * PitchRate - Pitch rate
   *
   * @remarks
   *
   * - Unit of the variable: rad/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PitchRate: TelemetryVariable;

  /**
   * RollRate - Roll rate
   *
   * @remarks
   *
   * - Unit of the variable: rad/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RollRate: TelemetryVariable;

  /**
   * VertAccel_ST - Vertical acceleration (including gravity) at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s^2
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  VertAccel_ST: TelemetryVariable;

  /**
   * LatAccel_ST - Lateral acceleration (including gravity) at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s^2
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  LatAccel_ST: TelemetryVariable;

  /**
   * LongAccel_ST - Longitudinal acceleration (including gravity) at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s^2
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  LongAccel_ST: TelemetryVariable;

  /**
   * VertAccel - Vertical acceleration (including gravity)
   *
   * @remarks
   *
   * - Unit of the variable: m/s^2
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  VertAccel: TelemetryVariable;

  /**
   * LatAccel - Lateral acceleration (including gravity)
   *
   * @remarks
   *
   * - Unit of the variable: m/s^2
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LatAccel: TelemetryVariable;

  /**
   * LongAccel - Longitudinal acceleration (including gravity)
   *
   * @remarks
   *
   * - Unit of the variable: m/s^2
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LongAccel: TelemetryVariable;

  /**
   * dcStarter - In car trigger car starter
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcStarter: TelemetryVariable<boolean[]>;

  /**
   * dcPitSpeedLimiterToggle - Track if pit speed limiter system is enabled
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcPitSpeedLimiterToggle: TelemetryVariable<boolean[]>;

  /**
   * dcTractionControlToggle - In car traction control active
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcTractionControlToggle: TelemetryVariable<boolean[]>;

  /**
   * dcHeadlightFlash - In car headlight flash control active
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcHeadlightFlash: TelemetryVariable<boolean[]>;

  /**
   * dcLowFuelAccept - In car low fuel accept
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcLowFuelAccept: TelemetryVariable<boolean[]>;

  /**
   * dpRFTireChange - Pitstop rf tire change request
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpRFTireChange: TelemetryVariable;

  /**
   * dpLFTireChange - Pitstop lf tire change request
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpLFTireChange: TelemetryVariable;

  /**
   * dpRRTireChange - Pitstop rr tire change request
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpRRTireChange: TelemetryVariable;

  /**
   * dpLRTireChange - Pitstop lr tire change request
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpLRTireChange: TelemetryVariable;

  /**
   * dpFuelFill - Pitstop fuel fill flag
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpFuelFill: TelemetryVariable;

  /**
   * dpFuelAutoFillEnabled - Pitstop auto fill fuel system enabled
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpFuelAutoFillEnabled: TelemetryVariable;

  /**
   * dpFuelAutoFillActive - Pitstop auto fill fuel next stop flag
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpFuelAutoFillActive: TelemetryVariable;

  /**
   * dpWindshieldTearoff - Pitstop windshield tearoff
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpWindshieldTearoff: TelemetryVariable;

  /**
   * dpFuelAddKg - Pitstop fuel add amount
   *
   * @remarks
   *
   * - Unit of the variable: kg
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpFuelAddKg: TelemetryVariable;

  /**
   * dpFastRepair - Pitstop fast repair set
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpFastRepair: TelemetryVariable;

  /**
   * dcDashPage - In car dash display page adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcDashPage: TelemetryVariable;

  /**
   * dcPowerSteering - In car power steering adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcPowerSteering: TelemetryVariable;

  /**
   * dcBrakeBias - In car brake bias adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcBrakeBias: TelemetryVariable;

  /**
   * dpLFTireColdPress - Pitstop lf tire cold pressure adjustment
   *
   * @remarks
   *
   * - Unit of the variable: Pa
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpLFTireColdPress: TelemetryVariable;

  /**
   * dpRFTireColdPress - Pitstop rf cold tire pressure adjustment
   *
   * @remarks
   *
   * - Unit of the variable: Pa
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpRFTireColdPress: TelemetryVariable;

  /**
   * dpLRTireColdPress - Pitstop lr tire cold pressure adjustment
   *
   * @remarks
   *
   * - Unit of the variable: Pa
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpLRTireColdPress: TelemetryVariable;

  /**
   * dpRRTireColdPress - Pitstop rr cold tire pressure adjustment
   *
   * @remarks
   *
   * - Unit of the variable: Pa
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpRRTireColdPress: TelemetryVariable;

  /**
   * dcTractionControl - In car traction control adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcTractionControl: TelemetryVariable;

  /**
   * dcABS - In car abs adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcABS: TelemetryVariable;

  /**
   * dcThrottleShape - In car throttle shape adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcThrottleShape: TelemetryVariable;

  /**
   * dcToggleWindshieldWipers - In car turn wipers on or off
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcToggleWindshieldWipers: TelemetryVariable<boolean[]>;

  /**
   * dcTriggerWindshieldWipers - In car momentarily turn on wipers
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcTriggerWindshieldWipers: TelemetryVariable<boolean[]>;

  /**
   * RFbrakeLinePress - RF brake line pressure
   *
   * @remarks
   *
   * - Unit of the variable: bar
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RFbrakeLinePress: TelemetryVariable;

  /**
   * RFcoldPressure - RF tire cold pressure  as set in the garage
   *
   * @remarks
   *
   * - Unit of the variable: kPa
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RFcoldPressure: TelemetryVariable;

  /**
   * RFodometer - RF distance tire traveled since being placed on car
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RFodometer: TelemetryVariable;

  /**
   * RFtempCL - RF tire left carcass temperature
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RFtempCL: TelemetryVariable;

  /**
   * RFtempCM - RF tire middle carcass temperature
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RFtempCM: TelemetryVariable;

  /**
   * RFtempCR - RF tire right carcass temperature
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RFtempCR: TelemetryVariable;

  /**
   * RFwearL - RF tire left percent tread remaining
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RFwearL: TelemetryVariable;

  /**
   * RFwearM - RF tire middle percent tread remaining
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RFwearM: TelemetryVariable;

  /**
   * RFwearR - RF tire right percent tread remaining
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RFwearR: TelemetryVariable;

  /**
   * LFbrakeLinePress - LF brake line pressure
   *
   * @remarks
   *
   * - Unit of the variable: bar
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LFbrakeLinePress: TelemetryVariable;

  /**
   * LFcoldPressure - LF tire cold pressure  as set in the garage
   *
   * @remarks
   *
   * - Unit of the variable: kPa
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LFcoldPressure: TelemetryVariable;

  /**
   * LFodometer - LF distance tire traveled since being placed on car
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LFodometer: TelemetryVariable;

  /**
   * LFtempCL - LF tire left carcass temperature
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LFtempCL: TelemetryVariable;

  /**
   * LFtempCM - LF tire middle carcass temperature
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LFtempCM: TelemetryVariable;

  /**
   * LFtempCR - LF tire right carcass temperature
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LFtempCR: TelemetryVariable;

  /**
   * LFwearL - LF tire left percent tread remaining
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LFwearL: TelemetryVariable;

  /**
   * LFwearM - LF tire middle percent tread remaining
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LFwearM: TelemetryVariable;

  /**
   * LFwearR - LF tire right percent tread remaining
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LFwearR: TelemetryVariable;

  /**
   * FuelUsePerHour - Engine fuel used instantaneous
   *
   * @remarks
   *
   * - Unit of the variable: kg/h
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  FuelUsePerHour: TelemetryVariable;

  /**
   * Voltage - Engine voltage
   *
   * @remarks
   *
   * - Unit of the variable: V
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  Voltage: TelemetryVariable;

  /**
   * WaterTemp - Engine coolant temp
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  WaterTemp: TelemetryVariable;

  /**
   * WaterLevel - Engine coolant level
   *
   * @remarks
   *
   * - Unit of the variable: l
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  WaterLevel: TelemetryVariable;

  /**
   * FuelPress - Engine fuel pressure
   *
   * @remarks
   *
   * - Unit of the variable: bar
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  FuelPress: TelemetryVariable;

  /**
   * OilTemp - Engine oil temperature
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  OilTemp: TelemetryVariable;

  /**
   * OilPress - Engine oil pressure
   *
   * @remarks
   *
   * - Unit of the variable: bar
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  OilPress: TelemetryVariable;

  /**
   * OilLevel - Engine oil level
   *
   * @remarks
   *
   * - Unit of the variable: l
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  OilLevel: TelemetryVariable;

  /**
   * ManifoldPress - Engine manifold pressure
   *
   * @remarks
   *
   * - Unit of the variable: bar
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ManifoldPress: TelemetryVariable;

  /**
   * FuelLevel - Liters of fuel remaining
   *
   * @remarks
   *
   * - Unit of the variable: l
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  FuelLevel: TelemetryVariable;

  /**
   * Engine0_RPM - Engine0Engine rpm
   *
   * @remarks
   *
   * - Unit of the variable: revs/min
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  Engine0_RPM: TelemetryVariable;

  /**
   * RRbrakeLinePress - RR brake line pressure
   *
   * @remarks
   *
   * - Unit of the variable: bar
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RRbrakeLinePress: TelemetryVariable;

  /**
   * RRcoldPressure - RR tire cold pressure  as set in the garage
   *
   * @remarks
   *
   * - Unit of the variable: kPa
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RRcoldPressure: TelemetryVariable;

  /**
   * RRodometer - RR distance tire traveled since being placed on car
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RRodometer: TelemetryVariable;

  /**
   * RRtempCL - RR tire left carcass temperature
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RRtempCL: TelemetryVariable;

  /**
   * RRtempCM - RR tire middle carcass temperature
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RRtempCM: TelemetryVariable;

  /**
   * RRtempCR - RR tire right carcass temperature
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RRtempCR: TelemetryVariable;

  /**
   * RRwearL - RR tire left percent tread remaining
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RRwearL: TelemetryVariable;

  /**
   * RRwearM - RR tire middle percent tread remaining
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RRwearM: TelemetryVariable;

  /**
   * RRwearR - RR tire right percent tread remaining
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RRwearR: TelemetryVariable;

  /**
   * LRbrakeLinePress - LR brake line pressure
   *
   * @remarks
   *
   * - Unit of the variable: bar
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LRbrakeLinePress: TelemetryVariable;

  /**
   * LRcoldPressure - LR tire cold pressure  as set in the garage
   *
   * @remarks
   *
   * - Unit of the variable: kPa
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LRcoldPressure: TelemetryVariable;

  /**
   * LRodometer - LR distance tire traveled since being placed on car
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LRodometer: TelemetryVariable;

  /**
   * LRtempCL - LR tire left carcass temperature
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LRtempCL: TelemetryVariable;

  /**
   * LRtempCM - LR tire middle carcass temperature
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LRtempCM: TelemetryVariable;

  /**
   * LRtempCR - LR tire right carcass temperature
   *
   * @remarks
   *
   * - Unit of the variable: C
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LRtempCR: TelemetryVariable;

  /**
   * LRwearL - LR tire left percent tread remaining
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LRwearL: TelemetryVariable;

  /**
   * LRwearM - LR tire middle percent tread remaining
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LRwearM: TelemetryVariable;

  /**
   * LRwearR - LR tire right percent tread remaining
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LRwearR: TelemetryVariable;

  /**
   * LRshockDefl - LR shock deflection
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LRshockDefl: TelemetryVariable;

  /**
   * LRshockDefl_ST - LR shock deflection at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  LRshockDefl_ST: TelemetryVariable;

  /**
   * LRshockVel - LR shock velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LRshockVel: TelemetryVariable;

  /**
   * LRshockVel_ST - LR shock velocity at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  LRshockVel_ST: TelemetryVariable;

  /**
   * RRshockDefl - RR shock deflection
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RRshockDefl: TelemetryVariable;

  /**
   * RRshockDefl_ST - RR shock deflection at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  RRshockDefl_ST: TelemetryVariable;

  /**
   * RRshockVel - RR shock velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RRshockVel: TelemetryVariable;

  /**
   * RRshockVel_ST - RR shock velocity at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  RRshockVel_ST: TelemetryVariable;

  /**
   * LFshockDefl - LF shock deflection
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LFshockDefl: TelemetryVariable;

  /**
   * LFshockDefl_ST - LF shock deflection at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  LFshockDefl_ST: TelemetryVariable;

  /**
   * LFshockVel - LF shock velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LFshockVel: TelemetryVariable;

  /**
   * LFshockVel_ST - LF shock velocity at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  LFshockVel_ST: TelemetryVariable;

  /**
   * RFshockDefl - RF shock deflection
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RFshockDefl: TelemetryVariable;

  /**
   * RFshockDefl_ST - RF shock deflection at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  RFshockDefl_ST: TelemetryVariable;

  /**
   * RFshockVel - RF shock velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RFshockVel: TelemetryVariable;

  /**
   * RFshockVel_ST - RF shock velocity at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  RFshockVel_ST: TelemetryVariable;

  /**
   * dcDRSToggle - In car toggle DRS
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcDRSToggle: TelemetryVariable<boolean[]>;

  /**
   * dcTearOffVisor - In car tear off visor film
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcTearOffVisor: TelemetryVariable<boolean[]>;

  /**
   * dpTireChange - Pitstop all tire change request
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpTireChange: TelemetryVariable;

  /**
   * dpWingFront - Pitstop front wing adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpWingFront: TelemetryVariable;

  /**
   * dcBrakeBiasFine - In car brake bias fine adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcBrakeBiasFine: TelemetryVariable;

  /**
   * dcPeakBrakeBias - In car peak brake bias adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcPeakBrakeBias: TelemetryVariable;

  /**
   * dcBrakeMisc - In car brake misc adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcBrakeMisc: TelemetryVariable;

  /**
   * dcEngineBraking - In car engine braking adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcEngineBraking: TelemetryVariable;

  /**
   * dcMGUKDeployMode - In car MGU-K deployment mode level adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcMGUKDeployMode: TelemetryVariable;

  /**
   * dcMGUKRegenGain - In car MUG-K re-gen gain adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcMGUKRegenGain: TelemetryVariable;

  /**
   * dcDiffEntry - In car diff entry adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcDiffEntry: TelemetryVariable;

  /**
   * dcDiffMiddle - In car diff middle adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcDiffMiddle: TelemetryVariable;

  /**
   * dcDiffExit - In car diff exit adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcDiffExit: TelemetryVariable;

  /**
   * DRS_Status - Drag Reduction System Status
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  DRS_Status: TelemetryVariable;

  /**
   * PowerMGU_K - Engine MGU-K mechanical power
   *
   * @remarks
   *
   * - Unit of the variable: W
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PowerMGU_K: TelemetryVariable;

  /**
   * TorqueMGU_K - Engine MGU-K mechanical torque
   *
   * @remarks
   *
   * - Unit of the variable: Nm
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  TorqueMGU_K: TelemetryVariable;

  /**
   * PowerMGU_H - Engine MGU-H mechanical power
   *
   * @remarks
   *
   * - Unit of the variable: W
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  PowerMGU_H: TelemetryVariable;

  /**
   * EnergyERSBattery - Engine ERS battery charge
   *
   * @remarks
   *
   * - Unit of the variable: J
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  EnergyERSBattery: TelemetryVariable;

  /**
   * EnergyERSBatteryPct - Engine ERS battery charge as a percent
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  EnergyERSBatteryPct: TelemetryVariable;

  /**
   * EnergyBatteryToMGU_KLap - Electrical energy from battery to MGU-K per lap
   *
   * @remarks
   *
   * - Unit of the variable: J
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  EnergyBatteryToMGU_KLap: TelemetryVariable;

  /**
   * EnergyMGU_KLapDeployPct - Electrical energy available to MGU-K per lap as a percent
   *
   * @remarks
   *
   * - Unit of the variable: %
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  EnergyMGU_KLapDeployPct: TelemetryVariable;

  /**
   * Engine1_RPM - Engine1Engine rpm
   *
   * @remarks
   *
   * - Unit of the variable: revs/min
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  Engine1_RPM: TelemetryVariable;

  /**
   * CFshockDefl - CF shock deflection
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  CFshockDefl: TelemetryVariable;

  /**
   * CFshockDefl_ST - CF shock deflection at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  CFshockDefl_ST: TelemetryVariable;

  /**
   * CFshockVel - CF shock velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  CFshockVel: TelemetryVariable;

  /**
   * CFshockVel_ST - CF shock velocity at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  CFshockVel_ST: TelemetryVariable;

  /**
   * ROLLFshockDefl - ROLLF shock deflection
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ROLLFshockDefl: TelemetryVariable;

  /**
   * ROLLFshockDefl_ST - ROLLF shock deflection at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  ROLLFshockDefl_ST: TelemetryVariable;

  /**
   * ROLLFshockVel - ROLLF shock velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ROLLFshockVel: TelemetryVariable;

  /**
   * ROLLFshockVel_ST - ROLLF shock velocity at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  ROLLFshockVel_ST: TelemetryVariable;

  /**
   * CRshockDefl - CR shock deflection
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  CRshockDefl: TelemetryVariable;

  /**
   * CRshockDefl_ST - CR shock deflection at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  CRshockDefl_ST: TelemetryVariable;

  /**
   * CRshockVel - CR shock velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  CRshockVel: TelemetryVariable;

  /**
   * CRshockVel_ST - CR shock velocity at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  CRshockVel_ST: TelemetryVariable;

  /**
   * ROLLRshockDefl - ROLLR shock deflection
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ROLLRshockDefl: TelemetryVariable;

  /**
   * ROLLRshockDefl_ST - ROLLR shock deflection at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  ROLLRshockDefl_ST: TelemetryVariable;

  /**
   * ROLLRshockVel - ROLLR shock velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  ROLLRshockVel: TelemetryVariable;

  /**
   * ROLLRshockVel_ST - ROLLR shock velocity at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  ROLLRshockVel_ST: TelemetryVariable;

  /**
   * dcTractionControl2 - In car traction control 2 adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcTractionControl2: TelemetryVariable;

  /**
   * LRSHshockDefl - LRSH shock deflection
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LRSHshockDefl: TelemetryVariable;

  /**
   * LRSHshockDefl_ST - LRSH shock deflection at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  LRSHshockDefl_ST: TelemetryVariable;

  /**
   * LRSHshockVel - LRSH shock velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LRSHshockVel: TelemetryVariable;

  /**
   * LRSHshockVel_ST - LRSH shock velocity at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  LRSHshockVel_ST: TelemetryVariable;

  /**
   * RRSHshockDefl - RRSH shock deflection
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RRSHshockDefl: TelemetryVariable;

  /**
   * RRSHshockDefl_ST - RRSH shock deflection at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  RRSHshockDefl_ST: TelemetryVariable;

  /**
   * RRSHshockVel - RRSH shock velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RRSHshockVel: TelemetryVariable;

  /**
   * RRSHshockVel_ST - RRSH shock velocity at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  RRSHshockVel_ST: TelemetryVariable;

  /**
   * dpRTireChange - Pitstop right tire change request
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpRTireChange: TelemetryVariable;

  /**
   * dpLTireChange - Pitstop left tire change request
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpLTireChange: TelemetryVariable;

  /**
   * LFSHshockDefl - LFSH shock deflection
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LFSHshockDefl: TelemetryVariable;

  /**
   * LFSHshockDefl_ST - LFSH shock deflection at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  LFSHshockDefl_ST: TelemetryVariable;

  /**
   * LFSHshockVel - LFSH shock velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LFSHshockVel: TelemetryVariable;

  /**
   * LFSHshockVel_ST - LFSH shock velocity at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  LFSHshockVel_ST: TelemetryVariable;

  /**
   * RFSHshockDefl - RFSH shock deflection
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RFSHshockDefl: TelemetryVariable;

  /**
   * RFSHshockDefl_ST - RFSH shock deflection at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  RFSHshockDefl_ST: TelemetryVariable;

  /**
   * RFSHshockVel - RFSH shock velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  RFSHshockVel: TelemetryVariable;

  /**
   * RFSHshockVel_ST - RFSH shock velocity at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  RFSHshockVel_ST: TelemetryVariable;

  /**
   * dcRFBrakeAttachedToggle - In car Right Front Brake attached(1) or detached(0)
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcRFBrakeAttachedToggle: TelemetryVariable<boolean[]>;

  /**
   * LR2shockDefl - LR2 shock deflection
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LR2shockDefl: TelemetryVariable;

  /**
   * LR2shockDefl_ST - LR2 shock deflection at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  LR2shockDefl_ST: TelemetryVariable;

  /**
   * LR2shockVel - LR2 shock velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  LR2shockVel: TelemetryVariable;

  /**
   * LR2shockVel_ST - LR2 shock velocity at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  LR2shockVel_ST: TelemetryVariable;

  /**
   * DRS_Count - Drag Reduction System count of usage
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  DRS_Count: TelemetryVariable;

  /**
   * dcLaunchRPM - In car launch rpm adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcLaunchRPM: TelemetryVariable;

  /**
   * dcAntiRollFront - In car front anti roll bar adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcAntiRollFront: TelemetryVariable;

  /**
   * dcAntiRollRear - In car rear anti roll bar adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcAntiRollRear: TelemetryVariable;

  /**
   * HFshockDefl - HF shock deflection
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  HFshockDefl: TelemetryVariable;

  /**
   * HFshockDefl_ST - HF shock deflection at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  HFshockDefl_ST: TelemetryVariable;

  /**
   * HFshockVel - HF shock velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  HFshockVel: TelemetryVariable;

  /**
   * HFshockVel_ST - HF shock velocity at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  HFshockVel_ST: TelemetryVariable;

  /**
   * HRshockDefl - HR shock deflection
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  HRshockDefl: TelemetryVariable;

  /**
   * HRshockDefl_ST - HR shock deflection at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  HRshockDefl_ST: TelemetryVariable;

  /**
   * HRshockVel - HR shock velocity
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  HRshockVel: TelemetryVariable;

  /**
   * HRshockVel_ST - HR shock velocity at 360 Hz
   *
   * @remarks
   *
   * - Unit of the variable: m/s
   * - This variable counts as a time.
   * - Expected data length: 6
   */
  HRshockVel_ST: TelemetryVariable;

  /**
   * dcPushToPass - In car trigger push to pass
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcPushToPass: TelemetryVariable<boolean[]>;

  /**
   * dpWingRear - Pitstop rear wing adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpWingRear: TelemetryVariable;

  /**
   * dcWeightJackerRight - In car right wedge/weight jacker adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcWeightJackerRight: TelemetryVariable;

  /**
   * dcFuelMixture - In car fuel mixture adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcFuelMixture: TelemetryVariable;

  /**
   * dcDashPage2 - In car second dash display page adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcDashPage2: TelemetryVariable;

  /**
   * dpQTape - Pitstop qualify tape adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpQTape: TelemetryVariable;

  /**
   * dpWeightJackerLeft - Pitstop left wedge/weight jacker adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpWeightJackerLeft: TelemetryVariable;

  /**
   * dpWeightJackerRight - Pitstop right wedge/weight jacker adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpWeightJackerRight: TelemetryVariable;

  /**
   * dcInLapToggle - In car toggle in lap settings
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcInLapToggle: TelemetryVariable<boolean[]>;

  /**
   * dcFCYToggle - In car toggle full course yellow mode
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcFCYToggle: TelemetryVariable<boolean[]>;

  /**
   * dcFuelCutPosition - In car adv end straight fuel cut
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcFuelCutPosition: TelemetryVariable;

  /**
   * dcFuelNoCutToggle - In car fuel cut on straight active
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcFuelNoCutToggle: TelemetryVariable<boolean[]>;

  /**
   * dcMGUKDeployFixed - In car MGU-K fixed deployment level adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcMGUKDeployFixed: TelemetryVariable;

  /**
   * dcHysBoostHold - In car hold HYS deploy
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcHysBoostHold: TelemetryVariable<boolean[]>;

  /**
   * dpPowerSteering - Pitstop power steering adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpPowerSteering: TelemetryVariable;

  /**
   * dcTractionControl4 - In car traction control 4 adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcTractionControl4: TelemetryVariable;

  /**
   * dcTractionControl3 - In car traction control 3 adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcTractionControl3: TelemetryVariable;

  /**
   * dpChargeAddKWh - Pitstop charge add amount
   *
   * @remarks
   *
   * - Unit of the variable: kWh
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dpChargeAddKWh: TelemetryVariable;

  /**
   * dcEnginePower - In car engine power adjustment
   *
   * @remarks
   *
   * - Variable does not have a unit.
   * - This variable does not count as a time.
   * - Expected data length: 1
   */
  dcEnginePower: TelemetryVariable;
}
