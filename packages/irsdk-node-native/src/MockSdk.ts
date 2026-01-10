/* eslint-disable @typescript-eslint/unified-signatures */
import { error, warn, log } from 'node:console';

import {
  BroadcastCommand,
  BroadcastCommandArgs,
  TelemetryVariable,
  TelemetryVarList,
} from '@irsdk-node/types';

import { LogLevel, type INativeSDK, type TelemetryTypesDict } from './INativeSDK.js';
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
  public logLevel: LogLevel = LogLevel.None;
  private _isRunning = false;

  constructor() {
    this._loadMockData().catch((reason: unknown) => {
      error('Error loading mock data for mock SDK:', reason as string);
    });
    warn(
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
    const dataNotReady = !mockSession || !mockTelemetry;
    return this._isRunning && !dataNotReady;
  }

  public getSessionData(): string {
    return mockSession ?? '';
  }

  public getSessionConnectionID(): number {
    return mockSession ? 1 : -1;
  }

  public getSessionVersionNum(): number {
    return mockSession ? 1 : -1;
  }

  public getTelemetryData(): TelemetryVarList {
    if (!mockTelemetry) {
      return {} as TelemetryVarList;
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

  public broadcast<Command extends BroadcastCommand = BroadcastCommand>(
    message: Command,
    ...args: BroadcastCommandArgs<Command>
  ): boolean {
    log('Mocking SDK call:', message, ...args);
    return true;
  }

  public __getTelemetryTypes(): TelemetryTypesDict {
    return {};
  }
}
