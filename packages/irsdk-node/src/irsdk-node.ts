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

export interface Config {
  logLevel?: LogLevel;
  autoEnableTelemetry?: boolean;
  useTelemVariableCache?: boolean;
}

const DefaultConfig: Required<Config> = {
  logLevel: LogLevel.None,
  autoEnableTelemetry: false,
  useTelemVariableCache: true,
};

export class IRacingSDK {
  // Public
  /**
   * Enable attempting to auto-start telemetry when starting the SDK (if it is not running).
   * @default false
   */
  public autoEnableTelemetry = DefaultConfig.autoEnableTelemetry;

  /**
   * The logging level to use when calling irsdk-node API's. Defaults to 0 (LogLevel.None).
   * @default 0
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
   * @default true
   */
  public useTelemVariableCache = DefaultConfig.useTelemVariableCache;

  // Private
  private _dataVer = -1;
  private _sessionData: SessionData | null = null;
  private _sdk: INativeSDK;
  private _resolvedConfig: Config;
  private _variableIndexCache: Partial<Record<keyof TelemetryVarList, number>> = {};

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

    void IRacingSDK.IsSimRunning();
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
   * @property {number}
   * @readonly
   */
  public get currDataVersion(): number {
    return this._sdk.currDataVersion;
  }

  /** Whether or not to enable verbose logging in the SDK.
   * @property {boolean}
   */
  public get enableLogging(): boolean {
    return this._sdk.logLevel !== LogLevel.None;
  }

  public set enableLogging(value: boolean) {
    this._sdk.logLevel = value ? LogLevel.Error : LogLevel.None;
  }

  // @todo: add getter for current session string version

  /**
   * Checks whether the simulation service is running.
   * @returns {boolean} True if the service is running.
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

  public get sessionStatusOK(): boolean {
    return this._sdk.isRunning();
  }

  /**
   * Starts the native iRacing SDK and begins subscribing for data.
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
   * Stops the SDK from running and resets the data version.
   */
  public stopSDK(): void {
    this._sdk.stopSDK();
    this._dataVer = -1;
    this.resetTelemetryVariableCache();
  }

  /**
   * Wait for new data from the sdk.
   * @param {number} timeout Timeout (in ms). Max is 60fps (1/60)
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
   * Gets the current session data (from yaml format).
   * @returns {SessionData}
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
   * Gets the version number of the latest session data from the SDK.
   */
  public getSessionVersionNum(): number {
    return this._sdk.getSessionVersionNum();
  }

  /**
   * Gets the ID for the current (or previous, if none active) connection.
   */
  public getSessionConnectionID(): number {
    return this._sdk.getSessionConnectionID();
  }

  /**
   * Gets the current weekend info from the session data
   * @returns {WeekendInfo}
   */
  public getWeekendInfo(): WeekendInfo | null {
    const session = this.getSessionData();
    return session?.WeekendInfo ?? null;
  }

  /**
   * Gets the current session info from the session data.
   * @returns {SessionInfo}
   */
  public getSessionInfo(): SessionList | null {
    const session = this.getSessionData();
    return session?.SessionInfo ?? null;
  }

  /**
   * Gets the current camera info from the session data.
   * @returns {CameraInfo}
   */
  public getCameraInfo(): CameraInfo | null {
    const session = this.getSessionData();
    return session?.CameraInfo ?? null;
  }

  /**
   * Gets the current radio info from the session data.
   * @returns {RadioInfo}
   */
  public getRadioInfo(): RadioInfo | null {
    const session = this.getSessionData();
    return session?.RadioInfo ?? null;
  }

  /**
   * Gets the current driver info from the session data.
   * @returns {DriverInfo}
   */
  public getDriverInfo(): DriverInfo | null {
    const session = this.getSessionData();
    return session?.DriverInfo ?? null;
  }

  /**
   * Gets the current split time info from the session data.
   * @returns {SplitTimeInfo}
   */
  public getSplitInfo(): SplitTimeInfo | null {
    const session = this.getSessionData();
    return session?.SplitTimeInfo ?? null;
  }

  /**
   * Gets the current session info from the session data.
   * @returns {CarSetupInfo}
   */
  public getCarSetupInfo(): CarSetupInfo | null {
    const session = this.getSessionData();
    return session?.CarSetup ?? null;
  }

  /**
   * Get the current value of the telemetry variables.
   *
   * Telemetry gets updated every tick. This is a large object, so large amounts
   * of processing between ticks should attempt to cache this data instead of
   * re-requesting it via this function.
   */
  public getTelemetry(): TelemetryVarList {
    const rawData = this._sdk.getTelemetryData();
    const data: Partial<TelemetryVarList> = {};

    if (Object.keys(rawData).length > 0) {
      Object.keys(rawData).forEach((dataKey) => {
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
   * Request the value of the given telemetry variable.
   * @param index The number index of the variable. Only use if you know what you are doing!
   */
  public getTelemetryVariable<T extends boolean | number | string>(
    index: number,
  ): TelemetryVariable<T[]> | null;

  /**
   * Request the value of the given telemetry variable.
   * @param varName The name of the variable to retrieve.
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
  public enableTelemetry(enabled: boolean): void {
    const command = enabled ? TelemetryCommand.Start : TelemetryCommand.Stop;
    this._sdk.broadcast(BroadcastMessages.TelemCommand, command);
  }

  public restartTelemetry(): void {
    this._sdk.broadcast(BroadcastMessages.TelemCommand, TelemetryCommand.Restart);
  }

  public changeCameraPosition(position: number, group: number, camera: number): void {
    this._sdk.broadcast(BroadcastMessages.CameraSwitchPos, position, group, camera);
  }

  // @todo: needs to be padded
  public changeCameraNumber(driver: number, group: number, camera: number): void {
    this._sdk.broadcast(BroadcastMessages.CameraSwitchNum, driver, group, camera);
  }

  public changeCameraState(state: CameraState): void {
    this._sdk.broadcast(BroadcastMessages.CameraSetState, state);
  }

  public changeReplaySpeed(speed: number, slowMotion: boolean): void {
    this._sdk.broadcast(BroadcastMessages.ReplaySetPlaySpeed, speed, slowMotion ? 1 : 0);
  }

  public changeReplayPosition(position: ReplayPositionCommand, frame: number): void {
    this._sdk.broadcast(BroadcastMessages.ReplaySetPlayPosition, position, frame);
  }

  public searchReplay(command: ReplaySearchCommand): void {
    this._sdk.broadcast(BroadcastMessages.ReplaySearch, command);
  }

  public changeReplayState(state: ReplayStateCommand): void {
    this._sdk.broadcast(BroadcastMessages.ReplaySetState, state);
  }

  public triggerReplaySessionSearch(session: number, time: number): void {
    this._sdk.broadcast(BroadcastMessages.ReplaySearchSessionTime, session, time);
  }

  public reloadAllTextures(): void {
    this._sdk.broadcast(BroadcastMessages.ReloadTextures, ReloadTexturesCommand.All, 0);
  }

  public reloadCarTextures(car: number): void {
    this._sdk.broadcast(
      BroadcastMessages.ReloadTextures,
      ReloadTexturesCommand.CarIndex,
      car,
    );
  }

  public triggerChatState(
    state: ChatCommand.BeginChat | ChatCommand.Cancel | ChatCommand.Reply,
  ): void {
    this._sdk.broadcast(BroadcastMessages.ChatCommand, state);
  }

  /**
   * @param {number} macro Between 1 - 15
   */
  public triggerChatMacro(macro: number): void {
    const clamped = Math.min(15, Math.max(1, macro));
    this._sdk.broadcast(BroadcastMessages.ChatCommand, ChatCommand.Macro, clamped);
  }

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

  public triggerPitCommand(command: PitCommand.WS | PitCommand.FR): void {
    this._sdk.broadcast(BroadcastMessages.PitCommand, command, 0);
  }

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

  public changeFFB(mode: FFBCommand, amount: number): void {
    this._sdk.broadcast(BroadcastMessages.FFBCommand, mode, amount);
  }

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
