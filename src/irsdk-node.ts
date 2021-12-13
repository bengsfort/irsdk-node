import { NativeSDK } from './bridge';
import { getSimStatus } from './utils';

export class IRacingSDK {
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
      const result = await getSimStatus();
      return result;
    } catch (e) {
      console.error('Could not successfully determine sim status:', e);
    }
    return false;
  }

  public get sessionStatusOK(): boolean {
    return this._sdk.isRunning();
  }
}
