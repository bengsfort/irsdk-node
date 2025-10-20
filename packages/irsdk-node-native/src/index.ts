/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// TODO: The pre-built binary for non-windows machines is not necessarily needed.
// For example, only attempting to import the native module if `process.platform`
// is equal to `win32` otherwise falling back to the mock SDK would achieve the
// exact same result, with less CI time being used to compile a dummy C++ module.
// The only thing that needs to be figured out is interop with node-gyp-build.

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
