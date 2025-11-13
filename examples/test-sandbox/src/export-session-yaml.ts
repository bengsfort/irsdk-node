import { error, log } from 'node:console';
import { dirname, join } from 'node:path';
import { cwd, exit } from 'node:process';
import { parseArgs } from 'node:util';

import { formatDuration } from '@bengsfort/stdlib/formatting/numbers';
import { NativeSDK } from '@irsdk-node/native';
import fs from 'fs-extra';

// Exports the raw session string from the irsdk to a yaml file.
// This can be used for tests that need to validate yaml parsing or inspect the
// raw output of the sesssion string from iRacing.

async function main(): Promise<void> {
  const args = parseArgs({
    options: {
      out: {
        type: 'string',
        short: 'o',
      },
    },
  });

  if (!args.values.out) {
    log(`'--out' parameter required. (ex. '--out ./out/session.yaml')`);
    exit(1);
  }

  const outFile = join(cwd(), args.values.out);
  const startTime = performance.now();

  try {
    // Initialize the SDK and wait for data.
    const sdk = new NativeSDK();
    if (!sdk.waitForData(16)) {
      throw new Error(
        'Failed to connect to SDK. Make sure the sim is running and try again.',
      );
    }

    const yaml = sdk.getSessionData();
    const outDir = dirname(outFile);
    await fs.ensureDir(outDir);
    await fs.writeFile(outFile, yaml, { encoding: 'utf-8' });

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
