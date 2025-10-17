import { error, warn } from 'node:console';
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
  TelemetryVariable,
  TelemetryVarList,
  VideoCaptureCommand,
} from '@irsdk-node/types';

import { loadMockSessionData, loadMockTelemetry } from './mock-data/loader.js';
import type { INativeSDK, TelemetryTypesDict } from './INativeSDK.js';

type TelemetryVarKey = keyof TelemetryVarList;
type TelemetryResultTypes = boolean | number | string;

// eslint-disable-next-line @typescript-eslint/naming-convention
let MOCK_TELEMETRY: TelemetryVarList | null = null;
let MOCK_SESSION: string | null = null;

/**
 * Mock SDK class intended for use on non-win32 platforms for development.
 * Implements the native sdk interface supplemented with mock data suitable for
 * iterating on projects with.
 *
 * @todo - This should really be handled differently, for example via a wrapper
 *         class around the native class that gets exposed.
 */
export class MockSDK implements INativeSDK {
  public currDataVersion = 1;

  public isMocked = true;

  public enableLogging = false;

  private _isRunning = false;

  constructor() {
    this._loadMockData().catch((reason) => {
      error('Error loading mock data for mock SDK:', reason);
    });
    warn(
      'Attempting to access iRacing SDK on unsupported platform!',
      '\nReturning mock SDK for testing purposes. (Only win32 supported)',
    );
  }

  private async _loadMockData(): Promise<void> {
    const [session, telemetry] = await Promise.all([
      !MOCK_SESSION ? loadMockSessionData() : Promise.resolve(MOCK_SESSION),
      !MOCK_TELEMETRY ? loadMockTelemetry() : Promise.resolve(MOCK_TELEMETRY),
    ]);

    MOCK_SESSION = session;
    MOCK_TELEMETRY = telemetry;
  }

  public startSDK(): boolean {
    this._isRunning = true;
    return true;
  }

  public stopSDK(): void {
    this._isRunning = false;
  }

  public isRunning(): boolean {
    return this._isRunning;
  }

  public waitForData(_timeout?: number): boolean {
    return this._isRunning;
  }

  public getSessionData(): string {
    return MOCK_SESSION ?? '';
  }

  public getTelemetryData(): TelemetryVarList {
    if (!MOCK_TELEMETRY) {
      throw new Error('Attempted accessing mock telemetry before it was loaded.');
    }

    return MOCK_TELEMETRY;
  }

  public getTelemetryVariable<T extends TelemetryResultTypes>(index: number): TelemetryVariable<T[]>;

  public getTelemetryVariable<T extends TelemetryResultTypes>(name: TelemetryVarKey): TelemetryVariable<T[]>;

  public getTelemetryVariable<T extends TelemetryResultTypes>(name: TelemetryVarKey | number): TelemetryVariable<T[]> {
    if (!MOCK_TELEMETRY) {
      throw new Error('Attempted accessing mock telemetry before it was loaded.');
    }

    if (typeof name === 'number') {
      return Object.values(MOCK_TELEMETRY)[name] as TelemetryVariable<T[]>;
    }

    return MOCK_TELEMETRY[name] as TelemetryVariable<T[]>;
  }

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

  public broadcast(...args: number[]): void {
    console.log('Mocking SDK call:', ...args);
  }

  __getTelemetryTypes(): TelemetryTypesDict {
    return {};
  }
}
