import { NativeSDK } from '../../bridge.debug';

// @todo: Remove comment once we can broadcast

// REMEMBER TO BE IN A SESSION WITH TELEMETRY TURNED ON! ALT + L
const sdk = new NativeSDK();

describe('NativeSDK (sim running)', () => {
  describe('NativeSDK.isRunning()', () => {
    it('should return true when the sim is active', () => {
      expect(sdk.isRunning()).toEqual(true);
    });
  });
});
