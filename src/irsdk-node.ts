import { NativeSDK } from './bridge.debug';
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
}
