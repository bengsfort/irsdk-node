import { NativeSDK } from './bridge.debug';
import {
  BroadcastMessages, CameraState, ChatCommand, FFBCommand, PitCommand, ReloadTexturesCommand, ReplayPositionCommand, ReplaySearchCommand, ReplayStateCommand, TelemetryCommand, VideoCaptureCommand,
} from './constants';
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
  private _sdk: NativeSDK;

  constructor() {
    this._sdk = new NativeSDK();
  }

  /**
   * The default amount of time to wait for new data from the SDK.
   * @property {number}
   * @default 30
   */
  public get defaultTimeout(): number {
    return this._sdk.defaultTimeout;
  }

  public set defaultTimeout(value: number) {
    this._sdk.defaultTimeout = value;
  }

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
      if (!successful && this.autoEnableTelemetry) {
        // @todo: enable telem
        // try again
        return false;
      }
      return true;
    }
    return true;
  }

  // Broadcast commands
  // @todo: Some commands need to be more thoroughly tested (unsure of correct types)
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

  // @todo: (Native) does driver need to be padded? (ie. #001 instead of 1)
  public changeCameraNumber(driver: number, group: number, camera: number): void {
    this._sdk.broadcast(BroadcastMessages.CameraSwitchNum, driver, group, camera);
  }

  public changeCameraState(state: CameraState): void {
    this._sdk.broadcast(BroadcastMessages.CameraSetState, state);
  }

  // @todo: Figure out wtf slowMotion should be (ie. 0.5? 0.25? speed has to be an int...)
  public changeReplaySpeed(speed: number, slowMotion: number): void {
    this._sdk.broadcast(BroadcastMessages.ReplaySetPlaySpeed, speed, slowMotion);
  }

  // @todo: Is frame ACTUALLY a float?
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

  // @todo: (Native) does car need to be padded? (ie. #001 instead of 1)
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
