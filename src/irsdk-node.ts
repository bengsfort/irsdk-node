import yaml from 'js-yaml';
import { NativeSDK } from './bridge';
import {
  BroadcastMessages, CameraState, ChatCommand, FFBCommand, PitCommand, ReloadTexturesCommand, ReplayPositionCommand, ReplaySearchCommand, ReplayStateCommand, TelemetryCommand, VideoCaptureCommand,
} from './constants';
import { TelemetryVarList } from './generated/telemetry';
import {
  CameraInfo, CarSetupInfo, DriverInfo, RadioInfo, SessionInfo, SplitTimeInfo, WeekendInfo,
} from './types';
import { SessionData } from './types/session-yaml';
import { getSimStatus } from './utils';

export class IRacingSDK {
  private static _IR_SERVICE_ACTIVE = false;

  // Public
  /**
   * Enable attempting to auto-start telemetry when starting the SDK (if it is not running).
   * @type {boolean}
   * @default false
   */
  public autoEnableTelemetry = false;

  // Private
  private _dataVer = -1;

  private _sessionData: SessionData | null = null;

  private _sdk: NativeSDK;

  constructor() {
    this._sdk = new NativeSDK();
    this._sdk.startSDK();
    void IRacingSDK.isSimRunning();
  }

  /**
   * The current version number of the session data. Increments internally every time data changes.
   * @property {number}
   * @readonly
   */
  public get currDataVersion(): number {
    return this._sdk.currDataVersion;
  }

  // @todo: add getter for current session string version

  /**
   * Checks whether the simulation service is running.
   * @returns {boolean} True if the service is running.
   */
  public static async isSimRunning(): Promise<boolean> {
    try {
      IRacingSDK._IR_SERVICE_ACTIVE = true;
      const result = await getSimStatus();
      return result;
    } catch (e) {
      console.error('Could not successfully determine sim status:', e);
    }
    IRacingSDK._IR_SERVICE_ACTIVE = false;
    return false;
  }

  public get sessionStatusOK(): boolean {
    return IRacingSDK._IR_SERVICE_ACTIVE && this._sdk.isRunning();
  }

  /**
   * Starts the native iRacing SDK and begins subscribing for data.
   * @returns {boolean} If the SDK started successfully.
   */
  public startSDK(): boolean {
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
   * Wait for new data from the sdk.
   * @param {number} timeout Timeout (in ms). Max is 60fps (1/60)
   */
  public waitForData(timeout?: number): boolean {
    return this._sdk.waitForData(timeout);
  }

  /**
   * Gets the current session data (from yaml format).
   * @returns {SessionData}
   */
  public getSessionData(): SessionData | null {
    if (!this.sessionStatusOK) return null;
    if (this._sessionData && this._dataVer === this.currDataVersion) return this._sessionData;
    try {
      const seshString = this._sdk.getSessionData();
      this._sessionData = yaml.load(seshString) as SessionData;
      return this._sessionData;
    } catch (err) {
      console.error('There was an error getting session data:', err);
    }
    return null;
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
  public getSessionInfo(): SessionInfo | null {
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
   */
  public getTelemetry(): TelemetryVarList {
    return this._sdk.getTelemetryData();
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
    this._sdk.broadcast(BroadcastMessages.ReloadTextures, ReloadTexturesCommand.CarIndex, car);
  }

  public triggerChatState(state: ChatCommand.BeginChat | ChatCommand.Cancel | ChatCommand.Reply): void {
    this._sdk.broadcast(BroadcastMessages.ChatCommand, state, 1);
  }

  /**
   * @param {number} macro Between 1 - 15
   */
  public triggerChatMacro(macro: number): void {
    const clamped = Math.min(15, Math.max(1, macro));
    this._sdk.broadcast(BroadcastMessages.ChatCommand, ChatCommand.Macro, clamped);
  }

  public triggerPitClearCommand(
    command: PitCommand.Clear | PitCommand.ClearTires | PitCommand.ClearWS | PitCommand.ClearFR | PitCommand.ClearFuel,
  ): void {
    this._sdk.broadcast(BroadcastMessages.PitCommand, command);
  }

  public triggerPitCommand(
    command: PitCommand.WS | PitCommand.FR,
  ): void {
    this._sdk.broadcast(BroadcastMessages.PitCommand, command);
  }

  public triggerPitChange(
    command: PitCommand.Fuel | PitCommand.LF | PitCommand.RF | PitCommand.LR | PitCommand.RR,
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
}
