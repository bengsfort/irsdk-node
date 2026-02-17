import { error } from 'node:console';

import type { INativeSDK } from '@irsdk-node/native';
import { NativeSDK, LogLevel } from '@irsdk-node/native';
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
  CameraInfo,
  CarSetupInfo,
  DriverInfo,
  RadioInfo,
  SessionList,
  SplitTimeInfo,
  WeekendInfo,
  SessionData,
  BroadcastCommand,
  BroadcastCommandArgs,
} from '@irsdk-node/types';
import { load as yamlLoad } from 'js-yaml';

import { getSimStatus } from './utils/sim-status.js';

function copyTelemData<K extends keyof TelemetryVarList = keyof TelemetryVarList>(
  src: TelemetryVarList[K],
  key: K,
  dest: TelemetryVarList,
): void {
  dest[key] = { ...src };
  // bool
  if (src.varType === 1) {
    dest[key].value = [];
    const arr = new Int8Array(src.value as number[]);
    arr.forEach((val, i) => {
      dest[key].value[i] = !!val;
    });
    return;
  }

  // numbers
  if (src.varType === 2 || src.varType === 3) {
    // int
    dest[key].value = [...new Int32Array(src.value as number[])];
  } else if (src.varType === 4) {
    // float
    dest[key].value = [...new Float32Array(src.value as number[])];
  } else if (src.varType === 5) {
    // double
    dest[key].value = [...new Float64Array(src.value as number[])];
  }
}

/**
 * Configuration options interface that can be passed to the SDK during instantiation.
 */
export interface Config {
  /**
   * The level of logging to allow the SDK to output.
   *
   * @remarks
   * See {@link IRacingSDK.logLevel} for more info.
   *
   * @defaultValue `LogLevel.None`
   */
  logLevel?: LogLevel;

  /**
   * Determines if the SDK will send the `enable telemetry` command to iRacing on
   * initialization.
   *
   * @remarks
   * See {@link IRacingSDK.autoEnableTelemetry} for more information.
   *
   * @defaultValue `false`
   */
  autoEnableTelemetry?: boolean;

  /**
   * Flags whether to enable the telemetry variable lookup cache when {@link IRacingSDK.getTelemetryVariable}
   *  is called with a string. In performance critical applications, this should remain enabled.
   *
   * @remarks
   * See {@link IRacingSDK.useTelemVariableCache}, {@link IRacingSDK.getTelemetryVariable},
   * and {@link IRacingSDK.resetTelemetryVariableCache} for more information.
   *
   * @defaultValue `true`
   */
  useTelemVariableCache?: boolean;
}

const DefaultConfig: Required<Config> = {
  logLevel: LogLevel.None,
  autoEnableTelemetry: false,
  useTelemVariableCache: true,
};

/**
 * Type-safe, performant wrapper class around the iRacing SDK. Can be used for
 * safely consuming data from and dispatching commands to the iRacing SDK.
 *
 * This class includes some quality of life API's and optimisations over the raw
 * SDK bindings. @see {@link https://www.npmjs.com/package/@irsdk-node/native}
 * for a more bare bindings API or to have more control over your own abstractions.
 */
export class IRacingSDK {
  // Public
  /**
   * Enable attempting to auto-start telemetry when starting the SDK (if it is not running).
   * @defaultValue false
   */
  public autoEnableTelemetry = DefaultConfig.autoEnableTelemetry;

  /**
   * The logging level to use when calling irsdk-node API's. Defaults to 0 (LogLevel.None).
   * @defaultValue LogLevel.None
   */
  public logLevel: LogLevel = DefaultConfig.logLevel;

  /**
   * Whether or not to use an internal look-up cache when fetching Telemetry Variables by
   * name. This can provide a performance benefit, but may produce unwanted behaviour when
   * enabled in long-running processes where access of niche, car-specific variables over
   * multiple sessions is common.
   *
   * When enabled, if being used in long-running processes it is recommended to clear the
   * cache whenever you detect the player has changed cars.
   *
   * @defaultValue true
   */
  public useTelemVariableCache = DefaultConfig.useTelemVariableCache;

  // Private
  private _dataVer = -1;
  private _sessionData: SessionData | null = null;
  private _sdk: INativeSDK;
  private _resolvedConfig: Config;
  private _variableIndexCache: Partial<Record<keyof TelemetryVarList, number>> = {};

  /**
   * Instantiate an instance of this SDK wrapper.
   * @param config Configuration options to instantiate with.
   */
  constructor(config?: Config) {
    this._resolvedConfig = {
      ...DefaultConfig,
      ...(config ?? {}),
    };

    const loggingLevel = this._resolvedConfig.logLevel ?? DefaultConfig.logLevel;
    const autoEnableTelemetry =
      this._resolvedConfig.autoEnableTelemetry ?? DefaultConfig.autoEnableTelemetry;
    const useTelemVariableCache =
      this._resolvedConfig.useTelemVariableCache ?? DefaultConfig.useTelemVariableCache;

    this._sdk = new NativeSDK();
    this._sdk.logLevel = loggingLevel;
    this.autoEnableTelemetry = autoEnableTelemetry;
    this.useTelemVariableCache = useTelemVariableCache;
  }

  /**
   * Gets the cached variable index from the internal cache, if it exists, otherwise
   * requests the index from the native module.
   *
   * @param varName The variable to grab from the cache.
   * @returns The index of the variable in the variable list.
   */
  private _fetchVariableIndexFromCache(varName: keyof TelemetryVarList): number | null {
    const cachedIndex = this._variableIndexCache[varName];

    if (typeof cachedIndex === 'number') {
      return cachedIndex;
    }

    const currentIndex = this._sdk.getTelemetryVariableIndex(varName);
    if (currentIndex === null) {
      return null;
    }

    this._variableIndexCache[varName] = currentIndex;
    return currentIndex;
  }

  /**
   * Wait for the SDK module to resolve and load.
   * @deprecated This is no longer needed as of v4.0.3. Please remove.
   */
  public async ready(): Promise<boolean> {
    return Promise.resolve(true);
  }

  /**
   * The current version number of the session data. Increments internally every time data changes.
   * @readonly
   */
  public get currDataVersion(): number {
    return this._sdk.currDataVersion;
  }

  /**
   * Whether or not to enable logging in the SDK.
   * @deprecated v4.3.0 - Please use {@link IRacingSDK.logLevel} is instead.
   */
  public get enableLogging(): boolean {
    return this._sdk.logLevel !== LogLevel.None;
  }

  public set enableLogging(value: boolean) {
    this._sdk.logLevel = value ? LogLevel.Error : LogLevel.None;
  }

  /**
   * Makes a request to the endpoint the iRacing service exposes when installed
   * and running to check if it is available. This can be used to determine if
   * the current device has iRacing installed and running, but does not determine
   * if the local player is currently in an iRacing session.
   *
   * @returns True if the service is running.
   */
  public static async IsSimRunning(): Promise<boolean> {
    try {
      const result = await getSimStatus();
      return result;
    } catch (e) {
      error('Could not successfully determine sim status:', e);
    }
    return false;
  }

  /**
   * Retrieves from the native SDK whether it is actively connected and receiving
   * data. Must be used in conjunction with {@link IRacingSDK.waitForData}.
   *
   * If true, it is safe to assume the local player is actively in an iRacing
   * session.
   *
   * @readonly
   */
  public get sessionStatusOK(): boolean {
    return this._sdk.isRunning();
  }

  /**
   * Attempts to initialize the native SDK and necessary buffers to receive data,
   * returning if it was successful or not.
   *
   * @remarks
   * This gets called implicitly during {@link IRacingSDK.waitForData}, however
   * calling it before requesting data can lead to better clarity. If enabled,
   * this will also reset the telemetry variable cache and enable telemetry if
   * initialization is successful.
   *
   * @returns {boolean} If the SDK started successfully.
   */
  public startSDK(): boolean {
    this.resetTelemetryVariableCache();

    if (!this._sdk.isRunning()) {
      const successful = this._sdk.startSDK();
      if (this.autoEnableTelemetry) {
        this.enableTelemetry(true);
      }

      return successful;
    }

    return true;
  }

  /**
   * Closes and cleans up the currently active SDK instance, resetting the internal
   * telemetry caches and data versions. Should always be called whenever you are
   * done with the SDK or want a full state reset.
   */
  public stopSDK(): void {
    this._sdk.stopSDK();
    this._dataVer = -1;
    this.resetTelemetryVariableCache();
  }

  /**
   * Attempts to pull data from the iRacing SDK, waiting for a maximum of the
   * provided timeout for new data if none is available when called.
   *
   * Can be used to detect joining/leaving a session by checking the return value
   * against the previous return value.
   *
   * @remarks
   * The SDK internally will cache a frame of data for around 16ms before
   * discarding it for the next frame, and if there is no data available when
   * this is called it will wait for a maximum of the provided timeout for new
   * data to be available.
   *
   * This function is synchronous, and will block the current context until data
   * is received or the timeout has completed.
   *
   * Internally calls {@link IRacingSDK.startSDK} to lazily initialize the SDK.
   *
   * @param timeout — The maximum number of milliseconds to wait for new data. (default: 16)
   * @returns — True if data was successfully received from the SDK, false if no data available.
   */
  public waitForData(timeout?: number): boolean {
    const result = this._sdk.waitForData(timeout);

    if (!result && this._sdk.currDataVersion === -1) {
      this._dataVer = -1;
      this._sessionData = null;
    }

    return result;
  }

  /**
   * Returns the latest version of the Session Data object. This should only be
   * called after {@link INativeSDK.waitForData} has successfully retrieved data
   * from iRacing.
   *
   * @remarks
   *
   * This internally caches the session data version and will automatically fetch,
   * parse, and return the latest version if the cached data is out of date. The
   * object returned from this can be assumed to be the most up to date data.
   *
   * Has to parse the YAML string returned by the SDK whenever handling fresh
   * data, which can be expensive. Due to the internal caching this penalty is
   * minimized and this function is generally safe to call multiple times per frame.
   *
   * @returns The current session data, or null if none available.
   */
  public getSessionData(): SessionData | null {
    if (this._sessionData && this._dataVer === this.currDataVersion)
      return this._sessionData;

    try {
      const seshString = this._sdk.getSessionData();
      this._sessionData = yamlLoad(seshString.replaceAll(': ,', ': 0,')) as SessionData;
      return this._sessionData;
    } catch (err) {
      error('There was an error getting session data:', err);
    }

    return null;
  }

  /**
   * Gets the version number of the latest session data from the SDK. Skips all
   * caches. This can be used to independently check version numbers if performing
   * custom cache-busting.
   */
  public getSessionVersionNum(): number {
    return this._sdk.getSessionVersionNum();
  }

  /**
   * Gets the ID for the current (or previous, if none active) iRacing connection.
   */
  public getSessionConnectionID(): number {
    return this._sdk.getSessionConnectionID();
  }

  /**
   * Helper utility for retrieving the current WeekendInfo from the Session Data.
   * This includes general information about the current sessions configuration,
   * like time of day, date, weather types, track info, etc.
   *
   * @returns Current Weekend Info data or null, if no session is active.
   */
  public getWeekendInfo(): WeekendInfo | null {
    const session = this.getSessionData();
    return session?.WeekendInfo ?? null;
  }

  /**
   * Helper utility for retrieving the current SessionInfo from the Session Data.
   * This includes a list of all of the Sessions of the current iRacing instance,
   * including the official/pending results such as fastest lap information,
   * session results, number of laps, etc.
   *
   * @returns The current session list, or null if no session is active.
   */
  public getSessionInfo(): SessionList | null {
    const session = this.getSessionData();
    return session?.SessionInfo ?? null;
  }

  /**
   * Helper utility for getting the current camera info from the Session Data.
   *
   * @remarks
   *
   * This can be used to find available cameras that can be controlled via message
   * broadcasting.
   *
   * @see {@link IRacingSDK.changeCameraPosition}
   * @see {@link IRacingSDK.changeCameraNumber}
   * @see {@link IRacingSDK.changeCameraState}
   *
   * @returns The current session camera information, or null if no session active.
   */
  public getCameraInfo(): CameraInfo | null {
    const session = this.getSessionData();
    return session?.CameraInfo ?? null;
  }

  /**
   * Helper utility for getting the current radio info from the Session Data,
   * providing a way to crawl the available radio channels for the current
   * session.
   *
   * @returns The current RadioInfo, or null if no session is active.
   */
  public getRadioInfo(): RadioInfo | null {
    const session = this.getSessionData();
    return session?.RadioInfo ?? null;
  }

  /**
   * Helper utility for getting the current driver info from the Session Data.
   * This can be used to get generic data about the local driver data as well as
   * all other drivers in the current session.
   *
   * @returns The current DriverInfo, or null if no session is active.
   */
  public getDriverInfo(): DriverInfo | null {
    const session = this.getSessionData();
    return session?.DriverInfo ?? null;
  }

  /**
   * Helper utility for getting the Sector information for the current session
   * from Session Data. This provides the definition of where each sector for
   * the current session starts, allowing you to calculate splits.
   *
   * @returns The sector configuration, or null if no session is active.
   */
  public getSplitInfo(): SplitTimeInfo | null {
    const session = this.getSessionData();
    return session?.SplitTimeInfo ?? null;
  }

  /**
   * Helper utility for getting car setup information from the Session Data. This
   * can be used to retrieve all available car setup information for the current
   * car/session.
   *
   * @returns The car setup info, or null if no session active.
   */
  public getCarSetupInfo(): CarSetupInfo | null {
    const session = this.getSessionData();
    return session?.CarSetup ?? null;
  }

  /**
   * Returns an object containing the current value of every available telemetry
   * variable. This should only be called after {@link IRacingSDK.waitForData}
   * has successfully retrieved data. Prefer {@link IRacingSDK.getTelemetryVariable}.
   *
   * @remarks
   *
   * This walks the entire telemetry data to generate the telemetry data on-demand,
   * and as such this is a very performance intensive function. Prefer retrieving
   * only the variables that you need via {@link IRacingSDK.getTelemetryVariable}
   * instead in performance-critical applications.
   *
   * If you must use this, call it only once immediately after the
   * {@link IRacingSDK.waitForData} function has retrieved data, and use the
   * result until your next {@link IRacingSDK.waitForData} call completes.
   *
   * @returns An object with every telemetry variable available.
   */
  public getTelemetry(): TelemetryVarList {
    const rawData = this._sdk.getTelemetryData();
    const data: Partial<TelemetryVarList> = {};

    const allKeys = Object.keys(rawData);
    if (allKeys.length > 0) {
      allKeys.forEach((dataKey) => {
        copyTelemData(
          rawData[dataKey as keyof TelemetryVarList],
          dataKey as keyof TelemetryVarList,
          data as TelemetryVarList,
        );
      });
    }

    return data as TelemetryVarList;
  }

  /**
   * Get the current data for the given Telemetry variable by index. The index
   * for a given Telemetry variable can be fetched by name via the helper
   * {@link IRacingSDK.getTelemetryVariableIndex} function.
   *
   * This should only be called after {@link IRacingSDK.waitForData}
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
  public getTelemetryVariable<T extends boolean | number | string>(
    index: number,
  ): TelemetryVariable<T[]> | null;

  /**
   * Get the current data for the given Telemetry variable by name. This is more
   * convenient than by index, but is significantly slower. The keys of the
   * `TelemetryVarList` object in @irsdk-node/types can be used for type safety.
   *
   * This should only be called after {@link IRacingSDK.waitForData}
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
   * It is better to cache the variables index using {@link IRacingSDK.getTelemetryVariableIndex}
   * at the beginning of a session, and then re-using that index instead.
   *
   * @param name The variable name.
   * @returns The current variable data, or null if it can't be found.
   */
  public getTelemetryVariable<T extends boolean | number | string>(
    varName: keyof TelemetryVarList,
  ): TelemetryVariable<T[]> | null;

  public getTelemetryVariable<T extends boolean | number | string>(
    telemVar: number | keyof TelemetryVarList,
  ): TelemetryVariable<T[]> | null {
    let resolvedTelemVar: number | keyof TelemetryVarList = telemVar;

    if (this.useTelemVariableCache && typeof telemVar === 'string') {
      const cachedIndex = this._fetchVariableIndexFromCache(telemVar);
      if (cachedIndex === null) {
        return null;
      }

      resolvedTelemVar = cachedIndex;
    }

    // @todo Need to fix this type.
    const rawData = this._sdk.getTelemetryVariable(resolvedTelemVar as string);
    if (!rawData) {
      return null;
    }

    const parsed: Partial<TelemetryVarList> = {};

    // @todo good grief these types need to be fixed asap
    copyTelemData(
      rawData as TelemetryVariable<any>, // eslint-disable-line
      rawData.name as keyof TelemetryVarList,
      parsed as TelemetryVarList,
    );

    return parsed[rawData.name as keyof TelemetryVarList] as TelemetryVariable<T[]>;
  }

  /**
   * Resets the internal telemetry variable lookup cache. This occurs automatically
   * whenever the SDK starts and stops, and is only necessary to call if:
   *
   * - `.useTelemVariableCache` is enabled via the `Config` passed to the `IRacingSDK` constructor
   * or by the propertyy on the IRacingSDK instance.
   * - The SDK is being used in a long-running process where potentially niche variables (variables
   * only available for one car) are frequently accessed and the player changes between cars with
   * these niche variables frequently.
   *
   * If that is the case, this function should be called whenever it is detected that the player
   * has changed cars, to make sure there are no stale variables in the cache.
   */
  public resetTelemetryVariableCache(): void {
    this._variableIndexCache = {};
  }

  // Broadcast commands
  /**
   * Broadcast a command to iRacing to enable or disable telemetry recording.
   *
   * @param enabled
   */
  public enableTelemetry(enabled: boolean): void {
    const command = enabled ? TelemetryCommand.Start : TelemetryCommand.Stop;
    this._sdk.broadcast(BroadcastMessages.TelemCommand, command);
  }

  /**
   * Broadcast a command to iRacing to write the current telemetry file to disk
   * and start a new one.
   */
  public restartTelemetry(): void {
    this._sdk.broadcast(BroadcastMessages.TelemCommand, TelemetryCommand.Restart);
  }

  /**
   * Broadcast a command to iRacing to switch the current camera mode, which
   * allows you to pick what car or group to focus at, and with what camera.
   *
   * @remarks
   * This requires the player to be outside of the car, and will not do anything
   * otherwise.
   *
   * @see {@link IRacingSDK.getCameraInfo} for finding what cameras are available.
   * @todo This broadcast message has changed over time and the name is very outdated.
   *       Look at updating the name to better reflect the functionality.
   *
   * @param focusMode The 'focus at' type for the camera system to change to. Use
   *                  the car number to focus at a specific driver.
   * @param group The group number to focus at.
   * @param camera The camera to use.
   */
  public changeCameraPosition(focusMode: number, group: number, camera: number): void {
    this._sdk.broadcast(BroadcastMessages.CameraSwitchPos, focusMode, group, camera);
  }

  /**
   * Broadcast a command to iRacing to change the driver the camera is focusing.
   *
   * @remarks
   * This requires the player to be outside of the car, and will not do anything
   * otherwise.
   *
   * @see {@link IRacingSDK.getCameraInfo} for finding what cameras are available.
   *
   * @param driver The driver index to focus on.
   * @param group The group number to focus at.
   * @param camera The camera to use.
   */
  public changeCameraNumber(driver: number, group: number, camera: number): void {
    this._sdk.broadcast(BroadcastMessages.CameraSwitchNum, driver, group, camera);
  }

  /**
   * Broadcast a command to iRacing to update the camera state.
   *
   * @remarks
   * This requires the player to be outside of the car, and will not do anything
   * otherwise.
   *
   * @param state The new camera state to apply.
   */
  public changeCameraState(state: CameraState): void {
    this._sdk.broadcast(BroadcastMessages.CameraSetState, state);
  }

  /**
   * Broadcast a command to iRacing to set the current replay speed.
   *
   * @remarks
   * The speed should be a power of 2, and can be negative. Ex:
   * -16, -8, -4, -2, -1, 0, 1, 2, 4, 8, 16
   *
   * @param speed The new replay speed.
   * @param slowMotion Whether to enable slow motion.
   */
  public changeReplaySpeed(speed: number, slowMotion: boolean): void {
    this._sdk.broadcast(BroadcastMessages.ReplaySetPlaySpeed, speed, slowMotion ? 1 : 0);
  }

  /**
   * Broadcast a command to iRacing to set the current position in the replay.
   *
   * @remarks
   *
   * This command is only available outside of the car. Offset should be calculated
   * via frames, so to jump forward 1 second it would be 66 frames.
   *
   * @param position The anchor to apply the `frame` offset to.
   * @param frame The number of frames to jump forward or backwards.
   */
  public changeReplayPosition(position: ReplayPositionCommand, frame: number): void {
    this._sdk.broadcast(BroadcastMessages.ReplaySetPlayPosition, position, frame);
  }

  /**
   * Broadcast a command to iRacing to seek through the replay to the given target.
   *
   * @remarks
   *
   * Requires you to be outside of the car.
   *
   * @param command The target to seek to.
   */
  public searchReplay(command: ReplaySearchCommand): void {
    this._sdk.broadcast(BroadcastMessages.ReplaySearch, command);
  }

  /**
   * Broadcast a message to iRacing to adjust the replay state. This is only used
   * to erase the replay data via `ReplayStateCommand.EraseTape`.
   *
   * @param state The state command to apply.
   */
  public changeReplayState(state: ReplayStateCommand): void {
    this._sdk.broadcast(BroadcastMessages.ReplaySetState, state);
  }

  /**
   * Broadcast a message to iRacing to seek to the provided session time.
   *
   * @remarks
   *
   * This does not jump to the time, and instead searches for it. It might take
   * a while!
   *
   * @param session The session number to look in.
   * @param time The time to search for.
   */
  public triggerReplaySessionSearch(session: number, time: number): void {
    this._sdk.broadcast(BroadcastMessages.ReplaySearchSessionTime, session, time);
  }

  /**
   * Broadcast to iRacing to reload all car textures.
   */
  public reloadAllTextures(): void {
    this._sdk.broadcast(BroadcastMessages.ReloadTextures, ReloadTexturesCommand.All, 0);
  }

  /**
   * Broadcast to iRacing to reload only the given cars textures.
   *
   * @param car The car (driver index) to reload textures for.
   */
  public reloadCarTextures(car: number): void {
    this._sdk.broadcast(
      BroadcastMessages.ReloadTextures,
      ReloadTexturesCommand.CarIndex,
      car,
    );
  }

  /**
   * Broadcast to iRacing to update the chat state to the provided state.
   *
   * @param state The target chat state.
   */
  public triggerChatState(
    state: ChatCommand.BeginChat | ChatCommand.Cancel | ChatCommand.Reply,
  ): void {
    this._sdk.broadcast(BroadcastMessages.ChatCommand, state);
  }

  /**
   * Broadcast to iRacing to trigger the given chat macro.
   *
   * @param {number} macro Between 1 - 15
   */
  public triggerChatMacro(macro: number): void {
    const clamped = Math.min(15, Math.max(1, macro));
    this._sdk.broadcast(BroadcastMessages.ChatCommand, ChatCommand.Macro, clamped);
  }

  /**
   * Broadcast to iRacing to clear the given pit command.
   *
   * @param command The command to clear.
   */
  public triggerPitClearCommand(
    command:
      | PitCommand.Clear
      | PitCommand.ClearTires
      | PitCommand.ClearWS
      | PitCommand.ClearFR
      | PitCommand.ClearFuel,
  ): void {
    this._sdk.broadcast(BroadcastMessages.PitCommand, command, 0);
  }

  /**
   * Broadcast to iRacing to trigger the given pit command.
   *
   * @remarks
   *
   * This command can then be cleared by {@link IRacingSDK.triggerPitClearCommand}
   *
   * @param command The pit command to trigger.
   */
  public triggerPitCommand(command: PitCommand.WS | PitCommand.FR): void {
    this._sdk.broadcast(BroadcastMessages.PitCommand, command, 0);
  }

  /**
   * Broadcast to iRacing to change the amount to apply to a given command.
   *
   * @remarks
   *
   * This can be used to adjust the amount of fuel, tire pressure, etc. in the
   * next pit stop:
   *
   * - Fuel, amount is in liters (0 - existing).
   * - Tires, amount is tire pressure in KPa (0 - existing).
   *
   * @param command The pit value to change.
   * @param amount The amount to change the value to.
   */
  public triggerPitChange(
    command:
      | PitCommand.Fuel
      | PitCommand.LF
      | PitCommand.RF
      | PitCommand.LR
      | PitCommand.RR,
    amount: number,
  ): void {
    this._sdk.broadcast(BroadcastMessages.PitCommand, command, amount);
  }

  /**
   * Broadcast to iRacing to change the current force feedback strength.
   *
   * @remarks
   * @param mode The adjustment mode.
   * @param amount FFB strength in nm (< 0.0 to use user default).
   */
  public changeFFB(mode: FFBCommand, amount: number): void {
    this._sdk.broadcast(BroadcastMessages.FFBCommand, mode, amount);
  }

  /**
   * Broadcast to iRacing to trigger the given video capture mode.
   *
   * @param command The mode to trigger.
   */
  public triggerVideoCapture(command: VideoCaptureCommand): void {
    this._sdk.broadcast(BroadcastMessages.VideoCapture, command);
  }

  /**
   * Trigger a broadcast manually, without any safety guard rails. Only use if
   * you know what you are doing!
   *
   * The function still uses the SDK type map for type-awareness. If you need to
   * turn these off for some reason, toss @ts-expect-error in a command on the
   * line before it to disable the type safety.
   *
   * @param {BroadcastMessages} message The Broadcast Message type.
   * @param args Args for the message. Can be up to 3 numbers.
   */
  public broadcastUnsafe<Command extends BroadcastCommand = BroadcastCommand>(
    message: Command,
    ...args: BroadcastCommandArgs<Command>
  ): boolean {
    return this._sdk.broadcast(message, ...args);
  }
}
