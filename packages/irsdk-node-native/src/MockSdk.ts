/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/unified-signatures */

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

import type { INativeSDK, TelemetryTypesDict } from './INativeSDK.js';
import { loadMockSessionData, loadMockTelemetry } from './mock-data/loader.js';

type TelemetryVarKey = keyof TelemetryVarList;
type TelemetryResultTypes = boolean | number | string;

let mockTelemetry: TelemetryVarList | null = null;
let mockSession: string | null = null;

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
    this._loadMockData().catch((reason: unknown) => {
      console.error('Error loading mock data for mock SDK:', reason as string);
    });
    console.warn(
      'Attempting to access iRacing SDK on unsupported platform!',
      '\nReturning mock SDK for testing purposes. (Only win32 supported)',
    );
  }

  private async _loadMockData(): Promise<void> {
    const [session, telemetry] = await Promise.all([
      !mockSession ? loadMockSessionData() : Promise.resolve(mockSession),
      !mockTelemetry ? loadMockTelemetry() : Promise.resolve(mockTelemetry),
    ]);

    mockSession = session;
    mockTelemetry = telemetry;
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
    return mockSession ?? '';
  }

  public getTelemetryData(): TelemetryVarList {
    if (!mockTelemetry) {
      throw new Error('Attempted accessing mock telemetry before it was loaded.');
    }

    return mockTelemetry;
  }

  public getTelemetryVariable<T extends TelemetryResultTypes>(
    index: number,
  ): TelemetryVariable<T[]>;

  public getTelemetryVariable<T extends TelemetryResultTypes>(
    name: TelemetryVarKey,
  ): TelemetryVariable<T[]>;

  public getTelemetryVariable<T extends TelemetryResultTypes>(
    name: TelemetryVarKey | number,
  ): TelemetryVariable<T[]> {
    if (!mockTelemetry) {
      throw new Error('Attempted accessing mock telemetry before it was loaded.');
    }

    if (typeof name === 'number') {
      return Object.values(mockTelemetry)[name] as TelemetryVariable<T[]>;
    }

    return mockTelemetry[name] as TelemetryVariable<T[]>;
  }

  public broadcast(
    message: BroadcastMessages.CameraSwitchPos,
    pos: number,
    group: number,
    camera: number,
  ): void;

  public broadcast(
    message: BroadcastMessages.CameraSwitchNum,
    driver: number,
    group: number,
    camera: number,
  ): void;

  public broadcast(message: BroadcastMessages.CameraSetState, state: CameraState): void;

  public broadcast(
    message: BroadcastMessages.ReplaySetPlaySpeed,
    speed: number,
    slowMotion: number,
  ): void;

  public broadcast(
    message: BroadcastMessages.ReplaySetPlayPosition,
    pos: ReplayPositionCommand,
    frame: number,
  ): void;

  public broadcast(
    message: BroadcastMessages.ReplaySearch,
    mode: ReplaySearchCommand,
  ): void;

  public broadcast(
    message: BroadcastMessages.ReplaySetState,
    state: ReplayStateCommand,
  ): void;

  public broadcast(
    message: BroadcastMessages.ReloadTextures,
    command: ReloadTexturesCommand,
    carIndex?: number,
  ): void;

  public broadcast(
    message: BroadcastMessages.ChatCommand,
    command: ChatCommand,
    macro?: number,
  ): void;

  public broadcast(
    message: BroadcastMessages.PitCommand,
    command: PitCommand,
    param?: number,
  ): void;

  public broadcast(
    message: BroadcastMessages.TelemCommand,
    command: TelemetryCommand,
  ): void;

  public broadcast(
    message: BroadcastMessages.FFBCommand,
    command: FFBCommand,
    value: number,
  ): void;

  public broadcast(
    message: BroadcastMessages.ReplaySearchSessionTime,
    session: number,
    time: number,
  ): void;

  public broadcast(
    message: BroadcastMessages.VideoCapture,
    command: VideoCaptureCommand,
  ): void;

  public broadcast(...args: number[]): void {
    console.log('Mocking SDK call:', ...args);
  }

  public __getTelemetryTypes(): TelemetryTypesDict {
    return {};
  }
}
