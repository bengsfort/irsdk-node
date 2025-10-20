// irsdk_defines.h mapping module.
// The schemas in this module should be defined in the same order as in the
// sdk header file. This makes it easier to update and maintain.

// --- Constants

/** Value used to indicate unlimited laps in a session. */
export const UNLIMITED_LAPS_COUNT = 32767;

/** Value used to indicate unlimited time in a session. */
export const UNLIMITED_TIME_VALUE = 604800;

// --- Utility

export enum StatusField {
  Connected = 1,
}

/**
 * Telemetry Variable type map.
 * Maps human-friendly names to the number ID for a telemetry variable.
 *
 * Represents irsdk_VarType
 */
export enum VarTypes {
  Character = 0,
  Boolean,
  Integer,
  BitField,
  Float,
  Double,
  ETCount,
}

interface VarTypesMap {
  [VarTypes.Character]: string;
  [VarTypes.Boolean]: boolean;
  [VarTypes.Integer]: number;
  [VarTypes.BitField]: number;
  [VarTypes.Float]: number;
  [VarTypes.Double]: number;
  [VarTypes.ETCount]: never;
}

/**
 * Utility type for getting the Typescript type of a telemetry variable type.
 */
export type VarType<T extends VarTypes = VarTypes> = VarTypesMap[T];

/**
 * The number of bytes making up each telemetry variable type (VarTypes).
 *
 * Represents irsdk_VarTypeBytes
 */
export const VarTypeBytes = {
  [VarTypes.Character]: 1,
  [VarTypes.Boolean]: 1,

  [VarTypes.Integer]: 4,
  [VarTypes.BitField]: 4,
  [VarTypes.Float]: 4,

  [VarTypes.Double]: 4,
  [VarTypes.ETCount]: VarTypes.ETCount,
} as const;

// --- Status

/**
 * Maps the general location within the world a car/driver might be.
 *
 * Represents irsdk_TrkLoc
 */
export enum TrackLocation {
  NotInWorld = -1,
  OffTrack = 0,
  InPitStall,
  /**
   * Indicates the lead in to pit road, as well as pit road itself (where limits
   * are enforced). If you just want to know that your on the pit road surface,
   * look at the 'OnPitRoad' telemetry variable.
   */
  ApproachingPits,
  OnTrack,
}

/**
 * Maps the track surfaces.
 *
 * Represents irsdk_TrkSurf
 */
export enum TrackSurface {
  SurfaceNotInWorld = -1,
  UndefinedMaterial = 0,

  Asphalt1Material,
  Asphalt2Material,
  Asphalt3Material,
  Asphalt4Material,
  Concrete1Material,
  Concrete2Material,
  RacingDirt1Material,
  RacingDirt2Material,
  Paint1Material,
  Paint2Material,
  Rumble1Material,
  Rumble2Material,
  Rumble3Material,
  Rumble4Material,

  Grass1Material,
  Grass2Material,
  Grass3Material,
  Grass4Material,
  Dirt1Material,
  Dirt2Material,
  Dirt3Material,
  Dirt4Material,
  SandMaterial,
  Gravel1Material,
  Gravel2Material,
  GrasscreteMaterial,
  AstroturfMaterial,
}

/**
 * The state of the sim session.
 *
 * Represents irsdk_SessionState
 */
export enum SessionState {
  Invalid = 0,
  GetInCar,
  Warmup,
  ParadeLaps,
  Racing,
  Checkered,
  CoolDown,
}

/**
 * Indicator for cars being around a driver.
 *
 * Represents irsdk_CarLeftRight
 */
export enum CarLeftRight {
  Off,
  Clear,
  CarLeft,
  CarRight,
  /** Cars on both sides  */
  CarLeftRight,
  /** 2 cars to our left */
  Cars2Left,
  /** 2 cars to our right */
  Cars2Right,
}

/**
 * Indicator of pit stop status.
 *
 * Represents irsdk_PitSvStatus
 */
export enum PitSvStatus {
  // Status
  None = 0,
  /** There is a pit stop in progress. */
  InProgress,
  /** The pit stop has ended. */
  Complete,

  // Errors
  /** The driver is too far left of the pit box. */
  TooFarLeft = 100,
  /** The driver is too far right of the pit box. */
  TooFarRight,
  /** The driver is too far forward from the pit box. */
  TooFarForward,
  /** The driver is too far back from the pit box. */
  TooFarBack,
  /** The driver stopped at an invalid angle for the pit box. */
  BadAngle,
  /** The car cannot be fixed. */
  CantFixThat,
}

/**
 * Indicates the mode being used when the pace car is out.
 *
 * Represents irsdk_PaceMode
 */
export enum PaceMode {
  SingleFileStart = 0,
  DoubleFileStart,
  SingleFileRestart,
  DoubleFileRestart,
  NotPacing,
}

/**
 * Indicates track wetness.
 *
 * Represents irsdk_TrackWetness
 */
export enum TrackWetness {
  UNKNOWN = 0,
  Dry,
  MostlyDry,
  VeryLightlyWet,
  LightlyWet,
  ModeratelyWet,
  VeryWet,
  ExtremelyWet,
}

/**
 * Bit flags for describing incidents. These can be used to extract info about
 * an incident in the sim.
 *
 * - The first byte indicates the incident type. ('Report<type>' values)
 * - Second byte indicates the penalty. ('Penalty<type>' values)
 *
 * To separate these, use a mask from the `IncidentFlagMask` enum.
 *
 * Represents irsdk_IncidentFlags
 */
export enum IncidentFlags {
  NoReport = 0x0000,

  // first byte is incident report flag
  // only one of these will be used
  /** "Loss of Control (2x)" */
  ReportOutOfControl = 0x0001,
  /** "Off Track (1x)" */
  ReportOffTrack = 0x0002,
  /** not currently sent */
  ReportOffTrackOngoing = 0x0003,
  /** "Contact (0x)" */
  ReportContactWithWorld = 0x0004,
  /** "Contact (2x)" */
  ReportCollisionWithWorld = 0x0005,
  /** not currently sent */
  ReportCollisionWithWorldOngoing = 0x0006,
  /** "Car Contact (0x)" */
  ReportContactWithCar = 0x0007,
  /** "Car Contact (4x)" */
  ReportCollisionWithCar = 0x0008,

  // second byte is incident penalty
  // only one of these will be used
  /** 0x */
  PenaltyZeroX = 0x0100,
  /** 1x */
  PenaltyOneX = 0x0200,
  /** 2x */
  PenaltyTwoX = 0x0300,
  /** 4x */
  PenaltyFourX = 0x0400,
}

/**
 * Masks which can be used to separate the report and penalty information from
 * `IncidentFlags` values.
 * Represents *_MASK values from `irsdkIncidentFlags`
 */
export enum IncidentFlagMask {
  Report = 0x000000ff,
  Penalty = 0x0000ff00,
}

/**
 * Flags indicating an engine warning.
 * Represents `irsdk_EngineWarnings`
 */
export enum EngineWarnings {
  WaterTempWarning = 0x0001,
  FuelPressureWarning = 0x0002,
  OilPressureWarning = 0x0004,
  EngineStalled = 0x0008,
  PitSpeedLimiter = 0x0010,
  RevLimiterActive = 0x0020,
  OilTempWarning = 0x0040,

  /** Car needs mandatory repairs */
  MandatoryRepairsNeeded = 0x0080,
  /** Car needs optional repairs */
  OptionalRepairsNeeded = 0x0100,
}

/**
 * Flags indicating session state.
 * Represents `irsdk_Flags`.
 */
export enum GlobalFlags {
  /** Global - Checkered flag active */
  Checkered = 0x00000001,
  /** Global - White flag active */
  White = 0x00000002,
  /** Global - Green flag active */
  Green = 0x00000004,
  /** Global - Yellow flag active */
  Yellow = 0x00000008,
  /** Global - Red flag active */
  Red = 0x00000010,
  /** Global - Blue flag active */
  Blue = 0x00000020,
  /** Global - Debris on track */
  Debris = 0x00000040,
  /** Global - Crossed flag active */
  Crossed = 0x00000080,
  /** Global - Yellow flag waving */
  YellowWaving = 0x00000100,
  /** Global - One lap left until green */
  OneLapToGreen = 0x00000200,
  /** Global - Green flag held */
  GreenHeld = 0x00000400,
  /** Global - Ten more laps left */
  TenToGo = 0x00000800,
  /** Global - Five laps left */
  FiveToGo = 0x00001000,
  /** Global - Random waving active */
  RandomWaving = 0x00002000,
  /** Global - Caution flag active */
  Caution = 0x00004000,
  /** Global - Caution flag being waved */
  CautionWaving = 0x00008000,

  /** Driver black flags - black flag for driver */
  Black = 0x00010000,
  /** Driver black flags - driver disqualified */
  Disqualify = 0x00020000,
  /** Driver black flags - car is allowed */
  Servicible = 0x00040000,
  /** Driver black flags - Furled flag */
  Furled = 0x00080000,
  /** Driver black flags - car must be repaired */
  Repair = 0x00100000,
  /** Driver black flags - car is disqualified and scoring is disabled */
  DqScoringInvalid = 0x00200000,

  /** Start lights - Lights hidden */
  StartHidden = 0x10000000,
  /** Start lights - Lights ready */
  StartReady = 0x20000000,
  /** Start lights - Lights set */
  StartSet = 0x40000000,
  /** Start lights - Lights go */
  StartGo = 0x80000000,
}

/**
 * Flag representing the current camera state.
 * Represents `irsdk_CameraState`.
 */
export enum CameraState {
  /** the camera tool can only be activated if viewing the session screen (out of car) */
  IsSessionScreen = 0x0001,
  /** the scenic camera is active (no focus car) */
  IsScenicActive = 0x0002,
  /** CAN be changed with a broadcast message */
  CamToolActive = 0x0004,
  /** CAN be changed with a broadcast message */
  UIHidden = 0x0008,
  /** CAN be changed with a broadcast message */
  UseAutoShotSelection = 0x0010,
  /** CAN be changed with a broadcast message */
  UseTemporaryEdits = 0x0020,
  /** CAN be changed with a broadcast message */
  UseKeyAcceleration = 0x0040,
  /** CAN be changed with a broadcast message */
  UseKey10xAcceleration = 0x0080,
  /** CAN be changed with a broadcast message */
  UseMouseAimMode = 0x0100,
}

/**
 * Flag representing the changes to be done during a pit stop.
 * Represents `irsdk_PitSvFlags`
 */
export enum PitSvFlags {
  /** Left front tire */
  LFTireChange = 0x0001,
  /** Right front tire */
  RFTireChange = 0x0002,
  /** Left rear tire */
  LRTireChange = 0x0004,
  /** Right rear tire */
  RRTireChange = 0x0008,

  /** Re-fuel */
  FuelFill = 0x0010,
  /** Tearoff windshield */
  WindshieldTearoff = 0x0020,
  /** Fast repair */
  FastRepair = 0x0040,
}

/**
 * Flags representing pacing states.
 * Represents `irsdk_PaceFlags`
 */
export enum PaceFlags {
  /** Catch up to the end of the line */
  EndOfLine = 0x0001,
  /** Free to pass */
  FreePass = 0x0002,
  /** Waved around */
  WavedAround = 0x0004,
}

/**
 * Messages for controlling the sim via the SDK.
 *
 * - Camera and replay commands only work outside of the car.
 * - Pit commands only work when in the car.
 *
 * Represents `irsdk_BroadcastMsg`
 */
export enum BroadcastMessages {
  /** Switch the camera position. (Requires being outside of the car.) */
  CameraSwitchPos = 0,
  /** Switch the driver number to follow. (Requires being outside of the car.) */
  CameraSwitchNum,
  /** Change the camera state. (Requires being outside of the car.) */
  CameraSetState,
  /** Change the play speed of a replay. (Requires being outside of the car.) */
  ReplaySetPlaySpeed,
  /** Jump to a different part of the replay. (Requires being outside of the car.) */
  ReplaySetPlayPosition,
  /** Enter replay search mode. (Requires being outside of the car.) */
  ReplaySearch,
  /** Change the replay state.  (Requires being outside of the car.) */
  ReplaySetState,
  /** Trigger a texture reload. */
  ReloadTextures,
  /** Broadcast a chat command. */
  ChatCommand,
  /** Broadcast a pit command. (Requires being in the car.) */
  PitCommand,
  /** Broadcast a telemetry command. */
  TelemCommand,
  /** Broadcast a force feedback command. */
  FFBCommand,
  /** Trigger searching to a replay time. (Requires being outside of the car.) */
  ReplaySearchSessionTime,
  /** Trigger video capture. */
  VideoCapture,
  /** Unused placeholder - do not use! */
  UnusedPlaceholder,
}

/**
 * Available chat command modes, to be used with message broadcasting.
 * Represents `irsdk_ChatCommandMode`.
 */
export enum ChatCommand {
  /** Number from 1-15, representing the chat macros.  */
  Macro = 0,
  /** Open up new chat window. */
  BeginChat,
  /** Reply to last private chat. */
  Reply,
  /** Close chat. */
  Cancel,
}

/**
 * Available pit command modes, to be used with message broadcasting. Only works
 * when the driver is in the car!
 * Represents `irsdk_PitCommandMode`
 */
export enum PitCommand {
  /** Clear all pit checkboxes */
  Clear = 0,
  /** Clean the winshield, using one tear off */
  WS,
  /**
   * Add fuel, optionally specify the amount to add in liters or pass '0' to use
   * existing amount
   */
  Fuel,
  /**
   * Change the left front tire, optionally specifying the pressure in KPa or
   * pass '0' to use existing pressure
   */
  LF,
  /** right front */
  RF,
  /** left rear */
  LR,
  /** right rear */
  RR,
  /** Clear tire pit checkboxes */
  ClearTires,
  /** Request a fast repair */
  FR,
  /** Uncheck Clean the windshield checkbox */
  ClearWS,
  /** Uncheck request a fast repair */
  ClearFR,
  /** Uncheck add fuel */
  ClearFuel,
  /** Change tire compound */
  ChangeTireCompound,
}

/**
 * Available telemetry command modes, to be used with message broadcasting.
 * This can be called at any time, but telemetry only records when driver is in
 * the car.
 * Represents `irsdk_TelemCommandMode`
 */
export enum TelemetryCommand {
  /** Turn telemetry recording off */
  Stop = 0,
  /** Turn telemetry recording on */
  Start,
  /** Write current file to disk and start a new one */
  Restart,
}

/**
 * Available replay state commands, to be used with message broadcasting. Only
 * usable outside of the car.
 * Represents `irsdk_RpyStateMode`
 */
export enum ReplayStateCommand {
  /** clear any data in the replay tape */
  EraseTape = 0,
  /** Unused placeholder - do not use! */
  Last,
}

/**
 * Available texture reload commands, to be used with message broadcasting.
 * Represents `irsdk_ReloadTexturesMode`
 */
export enum ReloadTexturesCommand {
  /** reload all textures */
  All = 0,
  /** reload only textures for the specific car index */
  CarIndex,
}

/**
 * Available replay search commands, to be used with message broadcasting. Only
 * usable outside of the car.
 * Represents `irsdk_RpySrchMode`
 */
export enum ReplaySearchCommand {
  /** Start of session */
  ToStart = 0,
  /** End of session */
  ToEnd,
  /** Previous session */
  PrevSession,
  /** Next session */
  NextSession,
  /** Previous lap */
  PrevLap,
  /** Next lap */
  NextLap,
  /** Previous frame */
  PrevFrame,
  /** Next frame */
  NextFrame,
  /** Previous incident */
  PrevIncident,
  /** Next incident */
  NextIncident,
  /** Unused placeholder - do not use! */
  UnusedPlaceholder,
}

/**
 * Available replay positioning commands, to be used with message broadcasting.
 * Only usable outside of the car.
 * Represents `irsdk_RpyPosMode`
 */
export enum ReplayPositionCommand {
  /** Beginning of the replay */
  Begin = 0,
  /** Current position in the replay */
  Current,
  /** End of the replay */
  End,
  /** Unused placeholder - do not use! */
  UnusedPlaceholder,
}

/**
 * Available force-feedback commands, to be used with message broadcasting.
 * Represents `irsdk_FFBCommandMode`
 */
export enum FFBCommand {
  /** Set the maximum force when mapping steering torque force to direct input units (float in Nm) */
  MaxForce = 0,
  /** Unused placeholder - do not use! */
  UnusedPlaceholder,
}

/**
 * Used with BroadcastMessages.CameraSwitchPos and BroadcastMessages.CameraSwitchNum.
 * Pass these in for the first parameter to select the 'focus at' types in the camera system.
 * Represents `irsdk_csMode`
 */
export enum CameraFocusCommand {
  FocusAtIncident = -3,
  FocusAtLeader = -2,
  FocusAtExiting = -1,
  /** When using .FocusAtDriver, add the car number to it to specify which car. */
  FocusAtDriver = 0,
}

/**
 * Available video capture commands, to be used with message broadcasting.
 * Represents `irsdk_VideoCaptureMode`
 */
export enum VideoCaptureCommand {
  /** save a screenshot to disk */
  TriggerScreenShot = 0,
  /** start capturing video */
  StartVideoCapture,
  /** stop capturing video */
  EndVideoCapture,
  /** toggle video capture on/off */
  ToggleVideoCapture,
  /** show video timer in upper left corner of display */
  ShowVideoTimer,
  /** hide video timer */
  HideVideoTimer,
}
