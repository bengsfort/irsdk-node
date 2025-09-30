/* eslint-disable @typescript-eslint/naming-convention */
import { log } from 'node:console';

import type { INativeSDK } from '@irsdk-node/native';

import { MockSDK } from './utils/mock-sdk';

export async function getSdkOrMock(): Promise<INativeSDK> {
  log('Loading sdk...');
  const Sdk = (await import('@irsdk-node/native')).NativeSDK;

  if (Sdk) {
    log('Found sdk!', {
      Sdk,
    });
    const instance = new Sdk();

    if (!instance.isMocked) {
      return instance;
    }

    log('Loading mock sdk...');
    return new MockSDK();
  }

  log('Loading mock sdk...');
  return new MockSDK();
}
