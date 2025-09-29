import type { INativeSDK } from '@irsdk-node/native';

import { MockSDK } from './utils/mock-sdk';

export async function getSdkOrMock(): Promise<INativeSDK> {
  const Sdk = (await import('@irsdk-node/native')).NativeSDK;
  if (Sdk) {
    return new Sdk();
  }
  return new MockSDK();
}
