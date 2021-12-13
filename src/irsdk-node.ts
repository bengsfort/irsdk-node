import { NativeSDK } from "./bridge";
import { getSimStatus } from "./utils";

export class iRacingSDK {
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

  public async getSimStatus(): Promise<boolean> {
    try {
      const result = await getSimStatus();
      return result;
    } catch (e) {
      console.error("Could not successfully determine sim status:", e);
    }
    return false;
  }

  // @todo: Add more checks here (ie. `fetch` to see if session is running)
  public get isRunning(): boolean {
    return this._sdk.isRunning();
  }
}
