import { error, log } from 'node:console';
import { dirname, join } from 'node:path';
import { exit } from 'node:process';
import { fileURLToPath } from 'node:url';

import { TelemetryVarList } from '@irsdk-node/types';
import * as fs from 'fs-extra';

import { INativeSDK, NativeSDKImpl } from '../dist/esm/index.js';
import { NativeSDK, TelemetryTypesDict } from '../src/index.js';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const TYPES_MODULE_DIR = join(SCRIPT_DIR, '../../irsdk-node-types');
const CACHE_TELEM_VARS_PATH = join(TYPES_MODULE_DIR, './cache.telemetry-vars.json');
const TYPES_GEN_FILE_PATH = join(TYPES_MODULE_DIR, './src/telemetry.gen.ts');

// TODO: Move this to irsdk-node package, imports are fucked here.
// Or switch to non-ts...

interface CachedVariable {
  description: string;
  length: number;
  countAsTime: boolean;
  unit: string;
  type: string;
}

interface TelemetryCache {
  /** Key: Car name, Value: Date updated */
  carsGeneratedFrom: Record<string, string>;
  variables: Record<string, CachedVariable>;
}

async function main(): Promise<void> {
  const startTime = performance.now();
  log(`Starting irsdk telemetry variable export.`);

  try {
    // Load the variable cache.
    const cache = await loadTelemetryCache();
    log('Loaded telemetry cache.');

    // Initialize the SDK and wait for data.
    const sdk = new NativeSDK();
    if (await waitForSdkData(sdk, 5, 1000)) {
      throw new Error(
        'Failed to connect to SDK. Make sure the sim is running and try again.',
      );
    }

    const currentCar = sdk.getSessionData();
    log('session data');
    log(currentCar);

    // Grab the types and all data for variables.
    const telemTypes = sdk.__getTelemetryTypes();
    const telemVarData = sdk.getTelemetryData();

    log(`Completed successfully after ${(performance.now() - startTime).toFixed(2)}ms.`);
    exit(0);
  } catch (err) {
    error('Encountered error:', err);
    log(`Failed after ${(performance.now() - startTime).toFixed(2)}ms.`);
    exit(1);
  }
}

void main();

// --------- utils
async function loadTelemetryCache(): Promise<TelemetryCache> {
  const cacheExists = await fs.pathExists(CACHE_TELEM_VARS_PATH);
  if (!cacheExists) {
    log('Telemetry cache does not exist. Creating empty cache.');
    return {
      carsGeneratedFrom: {},
      variables: {},
    };
  }

  return (await fs.readJSON(CACHE_TELEM_VARS_PATH)) as TelemetryCache;
}

function waitForSdkData(
  sdk: INativeSDK,
  maxRetries: number,
  retryDelay: number,
): Promise<boolean> {
  if (sdk.waitForData(16)) {
    return Promise.resolve(true);
  }

  // If we failed to get data, start the retry loop.
  // This should retry once every <retryDelay> until <maxRetries>.
  return new Promise((resolve) => {
    let retries = 0;

    const retry = (): void => {
      setTimeout(() => {
        log(
          `Failed to get telemetry data from sim. Retrying... (attempt ${retries.toString(10)})`,
        );
        if (sdk.waitForData(16)) {
          resolve(true);
          return;
        }

        retries += 1;
        if (retries > maxRetries) {
          resolve(false);
          return;
        }

        retry();
      }, retryDelay);
    };

    retry();
  });
}

function getMissingVariables(
  cache: TelemetryCache,
  telemVars: TelemetryVarList,
  telemTypes: TelemetryTypesDict,
): CachedVariable[] {}
