/* eslint-disable @typescript-eslint/unified-signatures */
import {
  BroadcastCommand,
  BroadcastCommandArgs,
  TelemetryVariable,
  TelemetryVarList,
} from '@irsdk-node/types';

/** @internal */
export type TelemetryTypesDict = Record<string, number>;

/**
 * Logging Levels available for configuring the logging output of the native module.
 * Each level includes the previous, for example `LogLevel.Error` will only log
 * errors, however `LogLevel.Warn` will log warnings, AND errors.
 */
export enum LogLevel {
  /** Log nothing to console. */
  None = 0,
  /** Log only errors. */
  Error,
  /** Log warnings and errors. */
  Warn,
  /** Log info, warnings, and errors. */
  Info,
  /** Log everything. Only use if you are ok with spammy logs! */
  Debug,
}

/**
 * Interface of the iRacing SDK native module.
 *
 * This maps 1:1 to the API implemented within the C++ addon.
 *
 * @remarks
 *
 * This is implemented as a class which can be instantiated in both real environments
 * and mock environments where the native SDK is not available (Linux, OSX). In
 * mock environments, some of the data is stubbed but most are no-ops.
 *
 * The intended flow of using this class is to create an instance, start the SDK,
 * then create a frame loop to wait for data each frame until you are done and
 * stop the SDK.
 *
 * @example
 *
 * ```ts
 * const sdk = new NativeSDK();
 *
 * if (sdk.waitForData()) {
 *   const lapVar = sdk.getTelemetryVariable("Lap");
 * } else {
 *   console.log("No data");
 * }
 * ```
 */
export interface INativeSDK {
  /**
   * The current session data string version. This value increments every time
   * the session data string changes, and is a reliable way to detect changes.
   *
   * @remarks
   *
   * This only updates after {@link INativeSDK.waitForData} has succeeded and
   * cached a session data string. To ignore the cache and fetch the latest
   * data version directly from the iRacing SDK, use {@link INativeSDK.getSessionVersionNum}
   * instead.
   */
  readonly currDataVersion: number;

  /**
   * Flag indicating if this SDK instance is mocked. This is only true whenever
   * the SDK is being run on a non-Windows platform where the SDK is not currently
   * supported.
   */
  readonly isMocked: boolean;

  /**
   * Flag indicating whether to enable logging or not. `true` will set the LogLevel
   * to `Error`, while `false` will set it to `None`. Do not use.
   *
   * @deprecated use {@link INativeSDK.logLevel} instead.
   */
  enableLogging: boolean;

  /**
   * The currently active logging level.
   * @see {@link LogLevel}
   */
  logLevel: LogLevel;

  // Main API
  /**
   * Attempts to initialize the SDK, returning the status of whether or not it
   * was successful.
   *
   * @remarks
   *
   * This happens implicitly whenever {@link INativeSDK.waitForData} is called,
   * but can safely be called for clarity and to check whether the sdk is ready
   * to request data.
   *
   * @returns True if the iRacing has been detected and the SDK was initialized.
   */
  startSDK(): boolean;

  /**
   * De-initializes and cleans up the active SDK instance.
   *
   * @remarks
   *
   * Will internally reset
   * all data and close any open handles to the iRacing SDK data. Should always
   * be called whenever you are done with the SDK, or want to do a full reset.
   */
  stopSDK(): void;

  /**
   * Returns whether or not the SDK is actively receiving iRacing data. If true,
   * you can assume the player is actively in an iRacing session.
   */
  isRunning(): boolean;

  /**
   * Attempts to pull data from the iRacing SDK, waiting for a maximum of the
   * provided timeout for new data if none is available when called.
   *
   * @remarks
   *
   * The SDK internally will cache a frame of data for around 16ms before discarding
   * it for the next frame, and if there is no data available when this is called
   * it will wait for a maximum of the provided timeout for new data to be available.
   *
   * This function is synchronous, and will block the current context until data
   * is received or the timeout has completed.
   *
   * Internally calls {@link INativeSDK.startSDK} to lazily initialize the SDK.
   *
   * @param timeout The maximum number of milliseconds to wait for new data. (default: 16)
   * @returns True if data was successfully received from the SDK, false if no data found.
   */
  waitForData(timeout?: number): boolean;

  /**
   * Returns the latest version of the Session Data string as raw YAML. This should
   * only be called after {@link INativeSDK.waitForData} has successfully retrieved
   * data from iRacing.
   *
   * @remarks
   *
   * This internally caches the session data version and will automatically fetch
   * and return the latest version if the cached data is out of date. The string
   * returned from this can be assumed to be the most up to date data.
   *
   * @returns The current session data as YAML, or an empty string if none available.
   */
  getSessionData(): string;

  /**
   * Returns an object containing the current value of every available telemetry
   * variable. This should only be called after {@link INativeSDK.waitForData}
   * has successfully retrieved data. Prefer {@link INativeSDK.getTelemetryVariable}.
   *
   * @remarks
   *
   * This walks the entire telemetry data to generate the telemetry data on-demand,
   * and as such this is a very performance intensive function. Prefer retrieving
   * only the variables that you need via {@link INativeSDK.getTelemetryVariable}
   * instead in performance-critical applications.
   *
   * If you must use this, call it only once immediately after the
   * {@link INativeSDK.waitForData} function has retrieved data, and use the
   * result until your next {@link INativeSDK.waitForData} call completes.
   *
   * @returns An object with every telemetry variable available.
   */
  getTelemetryData(): TelemetryVarList;

  /**
   * Gets the current Session Data version directly from the iRacing SDK, ignoring
   * the cached {@link INativeSDK.currDataVersion} property. This can be used to
   * detect data updates manually.
   */
  getSessionVersionNum(): number;

  /**
   * Gets the ID of the native SDK's connection to the current iRacing session.
   */
  getSessionConnectionID(): number;

  /**
   * Get the current data for the given Telemetry variable by index. The index
   * for a given Telemetry variable can be fetched by name via the helper
   * {@link INativeSDK.getTelemetryVariableIndex} function.
   *
   * This should only be called after {@link INativeSDK.waitForData}
   * has successfully retrieved data.
   *
   * @remarks
   *
   * Retrieving variable data by index is significantly faster than by name string,
   * and therefore this version of the function should be preferred over the string
   * version in performance-critical projects.
   *
   * @param index The index of the variable.
   * @returns The current variable data, or null if it can't be found.
   */
  getTelemetryVariable<T>(index: number): TelemetryVariable<T> | null;

  /**
   * Get the current data for the given Telemetry variable by name. This is more
   * convenient than by index, but is significantly slower. The keys of the
   * `TelemetryVarList` object in @irsdk-node/types can be used for type safety.
   *
   * This should only be called after {@link INativeSDK.waitForData}
   * has successfully retrieved data.
   *
   * @remarks
   *
   * While more convenient, this function performs a linear lookup of the variable
   * via the string provided every time it is called. The telemetry list can have
   * over 200 variables, and as such calling this every frame will introduce a
   * performance hit in your application as every tick will have to perform this
   * lookup.
   *
   * It is better to cache the variables index using {@link INativeSDK.getTelemetryVariableIndex}
   * at the beginning of a session, and then re-using that index instead.
   *
   * @param name The variable name.
   * @returns The current variable data, or null if it can't be found.
   */
  getTelemetryVariable<T>(name: string): TelemetryVariable<T> | null;

  /**
   * Returns the index of the variable with the provided name, or null if not found.
   *
   * This should only be called after {@link INativeSDK.waitForData}
   * has successfully retrieved data. The keys of the `TelemetryVarList` object
   * in @irsdk-node/types can be used for type safety.
   *
   * @remarks
   *
   * This performs a linear lookup of the telemetry list to find the index of the
   * given item, so it is good to cache and re-use this index once you get it.
   *
   * If fetching a variable that is only available on a single type of car, it is
   * possible that this cached index will become invalid when switching to a
   * different type of car that also has it's own variables, so it is a good idea
   * to renew these cached index variables every time you detect the player has
   * changed cars.
   *
   * @param name The variable name to look up.
   * @returns The index of the variable, or null if it does not exist.
   */
  getTelemetryVariableIndex(name: string): number | null;

  /**
   * Returns a dictionary of every telemetry variable available and it's corresponding
   * `irsdk_VarType` (`VarTypes` in @irsdk-node/types). Used for codegen in the
   * @irsdk-node/types package.
   *
   * @internal
   */
  __getTelemetryTypes(): TelemetryTypesDict;

  /**
   * Broadcast a message to iRacing.
   *
   * @remarks
   *
   * This is used to dispatch commands or control certain things in iRacing, and
   * should only be used after a connection to iRacing has been established.
   *
   * @param message The command to trigger.
   * @param args The additional args to send. This is type safe when using TypeScript.
   * @returns true if the command succeeded.
   */
  broadcast<Command extends BroadcastCommand = BroadcastCommand>(
    message: Command,
    ...args: BroadcastCommandArgs<Command>
  ): boolean;
}

/**
 * @internal Helper type to coerce INativeSDK into a newable class.
 */
export type NativeSDKImpl = new () => INativeSDK;
