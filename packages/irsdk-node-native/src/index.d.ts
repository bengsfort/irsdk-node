import {
  BroadcastMessages,
  CameraState,
  ChatCommand,
  FFBCommand,
  PitCommand,
  ReloadTexturesCommand,
  ReplayPositionCommand,
  ReplaySearchCommand,
  ReplayStateCommand,
  TelemetryCommand,
  VideoCaptureCommand,
  TelemetryVariable,
  TelemetryVarList
} from '@irsdk-node/types';

type TelemetryTypesDict = {
  [variableName: string]: number;
};

export interface INativeSDK {
  readonly currDataVersion: number;
  enableLogging: boolean;

  // Main API
  // Control
  startSDK(): boolean;
  stopSDK(): void;

  // State
  isRunning(): boolean;
  waitForData(timeout?: number): boolean;
  getSessionData(): string; // full yaml
  getTelemetryData(): TelemetryVarList;

  getTelemetryVariable<T>(index: number): TelemetryVariable<T>;
  getTelemetryVariable<T>(name: string): TelemetryVariable<T>;

  // Broadcast command overloads
  // This is handled in the cpp side so no need to mess with it in js
  broadcast(message: BroadcastMessages.CameraSwitchPos, pos: number, group: number, camera: number): void;
  broadcast(message: BroadcastMessages.CameraSwitchNum, driver: number, group: number, camera: number): void;
  broadcast(message: BroadcastMessages.CameraSetState, state: CameraState): void;
  broadcast(message: BroadcastMessages.ReplaySetPlaySpeed, speed: number, slowMotion: number): void;
  broadcast(message: BroadcastMessages.ReplaySetPlayPosition, pos: ReplayPositionCommand, frame: number): void;
  broadcast(message: BroadcastMessages.ReplaySearch, mode: ReplaySearchCommand): void;
  broadcast(message: BroadcastMessages.ReplaySetState, state: ReplayStateCommand): void;
  broadcast(message: BroadcastMessages.ReloadTextures, command: ReloadTexturesCommand, carIndex?: number): void;
  broadcast(message: BroadcastMessages.ChatCommand, command: ChatCommand, macro?: number): void;
  broadcast(message: BroadcastMessages.PitCommand, command: PitCommand, param?: number): void;
  broadcast(message: BroadcastMessages.TelemCommand, command: TelemetryCommand): void;
  broadcast(message: BroadcastMessages.FFBCommand, command: FFBCommand, value: number): void;
  broadcast(message: BroadcastMessages.ReplaySearchSessionTime, session: number, time: number): void;
  broadcast(message: BroadcastMessages.VideoCapture, command: VideoCaptureCommand): void;
}

export class NativeSDK implements INativeSDK {
  constructor();

  public readonly currDataVersion: number;
  public enableLogging: boolean;

  // Main API
  // Control
  startSDK(): boolean;
  stopSDK(): void;

  // State
  isRunning(): boolean;
  waitForData(timeout?: number): boolean;
  getSessionData(): string; // full yaml
  getTelemetryData(): TelemetryVarList;

  getTelemetryVariable<T>(index: number): TelemetryVariable<T>;
  getTelemetryVariable<T>(name: string): TelemetryVariable<T>;

  // Private helpers
  __getTelemetryTypes(): TelemetryTypesDict;

  // Broadcast command overloads
  // This is handled in the cpp side so no need to mess with it in js
  broadcast(message: BroadcastMessages.CameraSwitchPos, pos: number, group: number, camera: number): void;
  broadcast(message: BroadcastMessages.CameraSwitchNum, driver: number, group: number, camera: number): void;
  broadcast(message: BroadcastMessages.CameraSetState, state: CameraState): void;
  broadcast(message: BroadcastMessages.ReplaySetPlaySpeed, speed: number, slowMotion: number): void;
  broadcast(message: BroadcastMessages.ReplaySetPlayPosition, pos: ReplayPositionCommand, frame: number): void;
  broadcast(message: BroadcastMessages.ReplaySearch, mode: ReplaySearchCommand): void;
  broadcast(message: BroadcastMessages.ReplaySetState, state: ReplayStateCommand): void;
  broadcast(message: BroadcastMessages.ReloadTextures, command: ReloadTexturesCommand, carIndex?: number): void;
  broadcast(message: BroadcastMessages.ChatCommand, command: ChatCommand, macro?: number): void;
  broadcast(message: BroadcastMessages.PitCommand, command: PitCommand, param?: number): void;
  broadcast(message: BroadcastMessages.TelemCommand, command: TelemetryCommand): void;
  broadcast(message: BroadcastMessages.FFBCommand, command: FFBCommand, value: number): void;
  broadcast(message: BroadcastMessages.ReplaySearchSessionTime, session: number, time: number): void;
  broadcast(message: BroadcastMessages.VideoCapture, command: VideoCaptureCommand): void;
}

export class DebugSDK extends NativeSDK {}
