import { error, log } from 'node:console';
import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { exit } from 'node:process';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

import { getErrorMessage } from '@bengsfort/stdlib/errors/helpers';
import { formatDuration } from '@bengsfort/stdlib/formatting/numbers';
import { NativeSDK, type INativeSDK } from '@irsdk-node/native';
import {
  VarTypesReadable,
  type SessionData,
  type TelemetryVarList,
} from '@irsdk-node/types';
import fs from 'fs-extra';
import { load as yamlLoad } from 'js-yaml';

const args = parseArgs({
  options: {
    rerender: {
      short: 'r',
      type: 'boolean',
      default: false,
    },
    help: {
      short: 'h',
      type: 'boolean',
      default: false,
    },
  },
});

if (args.values.help) {
  log(
    [
      `-------------------------------------`,
      `irsdk-node: Export telemetry vaiables`,
      `-------------------------------------`,
      ``,
      `Usage:`,
      `--------`,
      `pnpm types:generate`,
      ``,
      `Options:`,
      `--------`,
      `--help, -h`,
      `\tPrint command usage and optional arguments.`,
      ``,
      `--rerender, -r`,
      `\tOnly re-render the types file from the current telemetry cache.`,
    ].join('\n'),
  );
  process.exit(0);
}

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const TYPES_MODULE_DIR = join(SCRIPT_DIR, '../../irsdk-node-types');
const CACHE_TELEM_VARS_PATH = join(TYPES_MODULE_DIR, './cache.telemetry-vars.json');
const TYPES_GEN_FILE_PATH = join(TYPES_MODULE_DIR, './src/telemetry.gen.ts');

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

    // Load the SDK and run the cache merging logic if not in re-render mode.
    log(
      args.values.rerender
        ? 'Re-render mode active. Skipping all steps and rendering types file from current cache.'
        : 'Re-render mode inactive, performing all typegen steps.',
    );
    if (!args.values.rerender) {
      // Initialize the SDK and wait for data.
      const sdk = new NativeSDK();
      if (!(await waitForSdkData(sdk, 5, 1000))) {
        throw new Error(
          'Failed to connect to SDK. Make sure the sim is running and try again.',
        );
      }

      log(`SDK connection initialized.`);

      const currentCar = getCurrentCar(sdk);
      const previouslyGeneratedAt = cache.carsGeneratedFrom[currentCar] ?? 'never';
      cache.carsGeneratedFrom[currentCar] = new Date().toISOString();
      log(
        `- Current car: ${currentCar} (last used for type gen: ${previouslyGeneratedAt})`,
      );

      // Grab the types and all data for variables.
      const telemVarData = sdk.getTelemetryData();
      log(` - Telemetry fetched.`);

      const missingOrUpdatedVars = getMissingVariables(cache, telemVarData);
      log(
        `\nFound ${Object.keys(missingOrUpdatedVars).length.toString(10)} missing or updated variables.`,
      );

      if (Object.keys(missingOrUpdatedVars).length === 0) {
        log('No updated or new variables found. Exiting.');
        close(startTime, 0);
      }

      // Add new variables to cache.
      for (const [varName, varData] of Object.entries(missingOrUpdatedVars)) {
        cache.variables[varName] = varData;
      }
    }

    // Render all variables to a string.
    const generatedTsFile = renderVariableTypeScript(cache);
    await writeFile(TYPES_GEN_FILE_PATH, generatedTsFile, {
      encoding: 'utf-8',
    });
    log(`Wrote new types file ${TYPES_GEN_FILE_PATH}.`);

    if (!args.values.rerender) {
      // Render the cache back to JSON.
      const cacheJson = JSON.stringify(cache, null, 2);
      await writeFile(CACHE_TELEM_VARS_PATH, cacheJson, {
        encoding: 'utf-8',
      });
      log(`Wrote updated telemetry cache to disk.`);
    }

    close(startTime, 0);
  } catch (err) {
    error(err);
    close(startTime, 1);
  }
}

void main();

// --------- utils
function close(startTime: number, code: number): never {
  if (code === 0) {
    log(
      `\nCompleted successfully after ${formatDuration(performance.now() - startTime)}.`,
    );
  } else {
    log(`\nFailed after ${formatDuration(performance.now() - startTime)}.`);
  }

  exit(code);
}

async function loadTelemetryCache(): Promise<TelemetryCache> {
  const cacheExists = await fs.pathExists(CACHE_TELEM_VARS_PATH);
  if (!cacheExists) {
    log('Telemetry cache does not exist. Creating empty cache.');
    return {
      carsGeneratedFrom: {},
      variables: {},
    };
  }

  try {
    const cacheDataStr = await fs.readFile(CACHE_TELEM_VARS_PATH, 'utf-8');
    if (cacheDataStr.trim() === '') {
      return {
        carsGeneratedFrom: {},
        variables: {},
      };
    }

    return JSON.parse(cacheDataStr) as TelemetryCache;
  } catch (err) {
    const errMsg = getErrorMessage(err);
    error(
      `Error trying to load and parse cache:`,
      `\n${errMsg}`,
      `\nTo avoid loss of data, exiting.`,
      `Please check for malformed JSON in the cache.`,
    );
  }

  throw new Error('Malformed cache error: Please check the telemetry cache.');
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

function getCurrentCar(sdk: INativeSDK): string {
  const sessionStr = sdk.getSessionData();
  const { DriverInfo } = yamlLoad(sessionStr) as SessionData;
  const localDriverIndex = DriverInfo.DriverCarIdx;
  if (localDriverIndex < 0 || localDriverIndex >= DriverInfo.Drivers.length) {
    throw new Error(
      `Invalid local driver index encountered: ${localDriverIndex.toString(10)}`,
    );
  }

  return DriverInfo.Drivers[localDriverIndex].CarScreenName;
}

function getMissingVariables(
  cache: TelemetryCache,
  telemVars: TelemetryVarList,
): Record<string, CachedVariable> {
  const missingVars: Record<string, CachedVariable> = {};

  for (const varName of Object.keys(telemVars)) {
    const varData = telemVars[varName as keyof TelemetryVarList];
    const varType = VarTypesReadable[varData.varType as keyof typeof VarTypesReadable];
    const cachedVariable = cache.variables[varName];

    // If the variable does not exist in the cache, just add it in directly and move on.
    if (typeof cachedVariable === 'undefined') {
      missingVars[varName] = {
        description: varData.description,
        length: varData.length,
        countAsTime: varData.countAsTime,
        unit: varData.unit,
        type: varType,
      };
      continue;
    }

    // If the variable already exists, check to see if any data must be updated.
    if (
      cachedVariable.description !== varData.description ||
      cachedVariable.countAsTime !== varData.countAsTime ||
      cachedVariable.length !== varData.length ||
      cachedVariable.unit !== varData.unit ||
      cachedVariable.type !== varType
    ) {
      missingVars[varName] = {
        ...cachedVariable,
        description: varData.description,
        length: varData.length,
        countAsTime: varData.countAsTime,
        unit: varData.unit,
        type: varType,
      };
    }
  }

  return missingVars;
}

function renderVariableTypeScript(cache: TelemetryCache): string {
  const variableTypes: string[] = [];
  const varEntries = Object.entries(cache.variables);

  let renderCount = 0;
  for (const [varName, varData] of varEntries) {
    const countAsTimeStr = varData.countAsTime
      ? 'This variable counts as a time.'
      : 'This variable does not count as a time.';
    const unitStr =
      varData.unit.trim() !== ''
        ? `Unit of the variable: ${varData.unit}`
        : 'Variable does not have a unit.';
    const genericStr = varData.type !== 'number' ? `<${varData.type}[]>` : '';

    variableTypes.push(
      `  /**`,
      `   * ${varName}`,
      `   *`,
      `   * @description`,
      `   * ${varData.description}`,
      `   * ${unitStr}`,
      `   * ${countAsTimeStr}`,
      `   * Expected data length: ${varData.length.toString(10)}`,
      `   */`,
      `  ${varName}: TelemetryVariable${genericStr};`,
    );

    // Add an empty space in between each variable only if it is NOT last var.
    if (++renderCount < varEntries.length) {
      variableTypes.push('');
    }
  }

  return [
    '// ! THIS FILE IS AUTO-GENERATED, EDITS WILL BE NOT PERSIST !',
    '// ! To generate, run `pnpm types:generate` in the irsdk-node package !',
    `// Last updated ${new Date().toISOString()}`,
    '',
    '/**',
    ' * A variable representing telemetry data from the iRacing SDK.',
    ' */',
    'export interface TelemetryVariable<VarType = number[]> {',
    '  /** The name of the variable. */',
    '  name: string;',
    '  /** The description. */',
    '  description: string;',
    '  /** The unit of the value (ex. "kg/m^2") */',
    '  unit: string;',
    '  /** Should it be treated as a time? */',
    '  countAsTime: boolean;',
    '  /** The number of values provided. */',
    '  length: number;',
    '  /** The native variable type */',
    '  varType: number;',
    '  /** The current value of this variable. */',
    '  value: VarType;',
    '}',
    '',
    'export interface TelemetryVarList {',
    ...variableTypes,
    '}',
    '',
  ].join('\n');
}
