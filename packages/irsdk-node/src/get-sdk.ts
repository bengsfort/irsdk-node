import type { INativeSDK } from '@irsdk-node/native';
import { platform } from 'os';
import { MockSDK } from './utils/mock-sdk';

export async function getSdkOrMock(): Promise<INativeSDK> {
  if (platform() === 'win32') {
    const Sdk = (await import('@irsdk-node/native')).NativeSDK;
    return new Sdk();
  }
  return new MockSDK();
}
