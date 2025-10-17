/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// Import from JS so that we can type the API in a nicer way (without aliases)
// The alternative would be to somehow get types generated, or use aliases to
// fake a module and then define that module... but those are gross, so no thanks
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { warn } from 'node:console';
import importNativeModule from 'node-gyp-build';

import { MockSDK } from './MockSdk.js';
import { NativeSDKImpl } from './INativeSDK.js';

const DIR_NAME = __dirname || dirname(fileURLToPath(import.meta.url));

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
} catch (err) {
  warn('Failed to load native iRacing SDK module. Loading mock SDK instead.');
  isMocked = true;
  sdkBinding = MockSDK
}

export const NativeSDK = sdkBinding;
export const sdkIsMocked = isMocked;
export type { INativeSDK, TelemetryTypesDict } from './INativeSDK.js';
