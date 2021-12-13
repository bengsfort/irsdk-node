import { IRacingSDK } from '../../irsdk-node';

// @todo: Remove comment once we can broadcast

// REMEMBER TO BE IN A SESSION WITH TELEMETRY TURNED ON! ALT + L
describe('IRacingSDK', () => {
  describe('IRacingSDK.isSimRunning()', () => {
    it('should return true when the iracing service is running', async () => {
      const isRunning = await IRacingSDK.isSimRunning();
      expect(isRunning).toEqual(true);
    });
  });
});
