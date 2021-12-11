export class NativeSDK {
    constructor();
    public defaultTimeout: number;

    startSDK(): boolean;
    stopSDK(): void;
    isRunning(): boolean;
    waitForData(timeout?: number): boolean;
    getHeader(): boolean;
    getSessionData(): boolean;
    getTelemetryData(): boolean;
}
