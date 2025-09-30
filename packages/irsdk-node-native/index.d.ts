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
  TelemetryVarList,
} from '@irsdk-node/types';
import { INativeSDK } from './dist/INativeSDK';

type TelemetryTypesDict = {
  [variableName: string]: number;
};

export { INativeSDK } from './dist/INativeSDK';

export const mockedSdk: boolean;

export class NativeSDK implements INativeSDK {
  public readonly currDataVersion: number;

  public readonly isMocked: boolean;

  public enableLogging: boolean;

  constructor();

  // Main API
  // Control
  public startSDK(): boolean;

  public stopSDK(): void;

  // State
  public isRunning(): boolean;

  public waitForData(timeout?: number): boolean;

  public getSessionData(): string; // full yaml

  public getTelemetryData(): TelemetryVarList;

  public getTelemetryVariable<T extends number | boolean | string>(index: number): TelemetryVariable<T[]>;

  public getTelemetryVariable<T extends number | boolean | string>(name: string): TelemetryVariable<T[]>;

  // Private helpers
  public __getTelemetryTypes(): TelemetryTypesDict;

  // Broadcast command overloads
  // This is handled in the cpp side so no need to mess with it in js
  public broadcast(message: BroadcastMessages.CameraSwitchPos, pos: number, group: number, camera: number): void;

  public broadcast(message: BroadcastMessages.CameraSwitchNum, driver: number, group: number, camera: number): void;

  public broadcast(message: BroadcastMessages.CameraSetState, state: CameraState): void;

  public broadcast(message: BroadcastMessages.ReplaySetPlaySpeed, speed: number, slowMotion: number): void;

  public broadcast(message: BroadcastMessages.ReplaySetPlayPosition, pos: ReplayPositionCommand, frame: number): void;

  public broadcast(message: BroadcastMessages.ReplaySearch, mode: ReplaySearchCommand): void;

  public broadcast(message: BroadcastMessages.ReplaySetState, state: ReplayStateCommand): void;

  public broadcast(message: BroadcastMessages.ReloadTextures, command: ReloadTexturesCommand, carIndex?: number): void;

  public broadcast(message: BroadcastMessages.ChatCommand, command: ChatCommand, macro?: number): void;

  public broadcast(message: BroadcastMessages.PitCommand, command: PitCommand, param?: number): void;

  public broadcast(message: BroadcastMessages.TelemCommand, command: TelemetryCommand): void;

  public broadcast(message: BroadcastMessages.FFBCommand, command: FFBCommand, value: number): void;

  public broadcast(message: BroadcastMessages.ReplaySearchSessionTime, session: number, time: number): void;

  public broadcast(message: BroadcastMessages.VideoCapture, command: VideoCaptureCommand): void;
}

