import type { INativeSDK } from "@irsdk-node/native";
import { TelemetryVarList, TelemetryVariable, BroadcastMessages, CameraState, ReplayPositionCommand, ReplaySearchCommand, ReplayStateCommand, ReloadTexturesCommand, ChatCommand, PitCommand, TelemetryCommand, FFBCommand, VideoCaptureCommand } from "@irsdk-node/types";
import { loadMockSessionData, loadMockTelemetry } from "./mock-data/loader";

let mockTelemetry: TelemetryVarList | null = null;
let mockSession: string | null = null;

export class MockSDK implements INativeSDK {
  currDataVersion: number;
  enableLogging: boolean;

  private _isRunning: boolean;

  constructor() {
    this.currDataVersion = 1;
    this.enableLogging = false;
    this._isRunning = false;
    this._loadMockData();
    console.warn(
      "Attempting to access iRacing SDK on unsupported platform!",
      "\nReturning mock SDK for testing purposes. (Only win32 supported)",
    );
  }

  private async _loadMockData(): Promise<void> {
    const [ session, telemetry ] = await Promise.all([
      !mockSession ? loadMockSessionData() : Promise.resolve(mockSession),
      !mockTelemetry ? loadMockTelemetry() : Promise.resolve(mockTelemetry),
    ]);
    mockSession = session;
    mockTelemetry = telemetry;
  }

  startSDK(): boolean {
    this._isRunning = true;
    return true;
  }

  stopSDK(): void {
    this._isRunning = false;
    return;
  }

  isRunning(): boolean {
    return this._isRunning && mockSession !== null && mockTelemetry !== null;;
  }

  waitForData(_timeout?: number): boolean {
    return this._isRunning;
  }

  getSessionData(): string {
    return mockSession ?? '';
  }

  getTelemetryData(): TelemetryVarList {
    return mockTelemetry!;
  }

  getTelemetryVariable<T>(index: number): TelemetryVariable<T>;
  getTelemetryVariable<T>(name: string): TelemetryVariable<T>;
  getTelemetryVariable<T extends boolean | number | string>(name: any): TelemetryVariable<T> {
    // @todo christ this is horrible, pls fix
    return mockTelemetry![name as keyof TelemetryVarList] as unknown as TelemetryVariable<T>;
  }

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
  broadcast(...args: any[]): void {
    console.log("Pretending to trigger SDK call:", ...args);
  }

}
