import { NativeSDK } from '../../bridge';

// DO NOT HAVE A SIM SESSION RUNNING FOR THESE TESTS
const sdk = new NativeSDK();

describe('NativeSDK (sim not running)', () => {
  describe('NativeSDK.isRunning()', () => {
    it('should return false (sim isnt active)', () => {
      expect(sdk.isRunning()).toEqual(false);
    });
  });

  describe('NativeSDK.startSDK()', () => {
    it('should fail to initialize', () => {
      expect(sdk.startSDK()).toEqual(false);
    });
  });
});
