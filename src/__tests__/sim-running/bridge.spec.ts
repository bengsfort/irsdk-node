import { BroadcastMessages, TelemetryCommand } from '../../constants';
import { NativeSDK } from '../../bridge.debug';

// REMEMBER TO BE IN A SESSION WITH TELEMETRY TURNED OFF!
const sdk = new NativeSDK();

jest.setTimeout(10 * 1000);
describe('NativeSDK (sim running)', () => {
  describe('NativeSDK.isRunning()', () => {
    it('should return false when telemetry is off', () => {
      expect(sdk.isRunning()).toEqual(false);
    });
  });

  // Realistically in an automated fashion we can only test certain things.
  // When time allows we will revisit, but at the moment the telemetry is the most
  // important command for us, so we will focus on that one for now.
  describe('NativeSDK.broadcast()', () => {
    it('should toggle telemetry recording', (done) => {
      expect(sdk).toHaveProperty('broadcast');
      expect(sdk.startSDK()).toEqual(true);
      // turn telem on
      sdk.broadcast(BroadcastMessages.TelemCommand, TelemetryCommand.Start);
      // You should see the telem on label in the bottom left of iRacing
      setTimeout(() => {
        sdk.broadcast(BroadcastMessages.TelemCommand, TelemetryCommand.Stop);
        done();
      }, 1000);
    });
  });
});
