import { IRacingSDK } from '../../irsdk-node';

// DO NOT HAVE A SIM SESSION RUNNING FOR THESE TESTS
describe('IRacingSDK', () => {
  describe('IRacingSDK.isSimRunning()', () => {
    it('should return true when the iracing service is running', async () => {
      const isRunning = await IRacingSDK.isSimRunning();
      expect(isRunning).toEqual(false);
    });
  });
});
