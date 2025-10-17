/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// Import from JS so that we can type the API in a nicer way (without aliases)
// The alternative would be to somehow get types generated, or use aliases to
// fake a module and then define that module... but those are gross, so no thanks
import { join } from 'node:path';

import importNativeModule from 'node-gyp-build';

import { NativeSDKImpl } from './INativeSDK.js';
import { MockSDK } from './MockSdk.js';

const DIR_NAME = _getDirname();

let sdkBinding: NativeSDKImpl;
let isMocked: boolean;

try {
  const rootDir = join(DIR_NAME, '../..');
  const binding = importNativeModule(rootDir);
  isMocked = binding.mockedSdk;

  if (isMocked) {
    sdkBinding = MockSDK;
  } else {
    sdkBinding = binding.iRacingSdkNode;
  }
} catch {
  console.warn('Failed to load native iRacing SDK module. Loading mock SDK instead.');
  isMocked = true;
  sdkBinding = MockSDK;
}

export const NativeSDK = sdkBinding;
// eslint-disable-next-line @typescript-eslint/naming-convention
export const sdkIsMocked = isMocked;
export type { INativeSDK, TelemetryTypesDict } from './INativeSDK.js';
