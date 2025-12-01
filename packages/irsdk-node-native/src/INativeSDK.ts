/* eslint-disable @typescript-eslint/unified-signatures */
import {
  BroadcastCommand,
  BroadcastCommandArgs,
  TelemetryVariable,
  TelemetryVarList,
} from '@irsdk-node/types';

export type TelemetryTypesDict = Record<string, number>;

/**
 * Interface of the iRacing SDK native module.
 *
 * This should map 1:1 to the API implemented within the C++ addon, and anything
 * added, changed, or removed from the C++ addon API will be documented here.
 */
export interface INativeSDK {
  readonly currDataVersion: number;
  readonly isMocked: boolean;
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

  // Debug utility used for type generation purposes.
  __getTelemetryTypes(): TelemetryTypesDict;

  broadcast<Command extends BroadcastCommand = BroadcastCommand>(
    message: Command,
    ...args: BroadcastCommandArgs<Command>
  ): boolean;
}

export type NativeSDKImpl = new () => INativeSDK;
