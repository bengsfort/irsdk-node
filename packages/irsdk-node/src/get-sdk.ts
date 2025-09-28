import { platform } from 'node:os';

import type { INativeSDK } from '@irsdk-node/native';

import { MockSDK } from './utils/mock-sdk.js';

// TODO: Return mock from C++, not this nonsense.
export async function getSdkOrMock(): Promise<INativeSDK> {
  if (platform() === 'win32') {
    const Sdk = (await import('@irsdk-node/native')).NativeSDK;
    return new Sdk();
  }
  return new MockSDK();
}
