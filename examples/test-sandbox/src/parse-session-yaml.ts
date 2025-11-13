import { error, log } from 'node:console';
import { join } from 'node:path';
import { cwd, exit } from 'node:process';
import { parseArgs } from 'node:util';

import { formatDuration } from '@bengsfort/stdlib/formatting/numbers';
import fs from 'fs-extra';
import { load } from 'js-yaml';

// Test file to validate parse speed/result of YAML string parsing.
//
// This is added to test the hotfix for this reported SDK issue:
// https://forums.iracing.com/discussion/comment/732533#Comment_732533
//
// To test:
// 1. run `export-session-yaml.ts` to export a raw session yaml string.
// 2. If there is NOT invalid yaml already (from '*DesignStr:' keys):
//   a. Remove first element in a design string (42,f1f6f1,000000,000000 -> ,f1f6f1,000000,000000)
// 3. Run this file with that malformed yaml file as `--in`.
// 4. If it does not fail, success!

const ReplaceMode = {
  regex: 'regex',
  str: 'string',
} as const;

async function main(): Promise<void> {
  const args = parseArgs({
    options: {
      in: {
        type: 'string',
        short: 'i',
      },
      out: {
        type: 'string',
        short: 'o',
      },
      mode: {
        type: 'string',
        short: 'm',
        default: ReplaceMode.regex,
      },
    },
  });

  if (!args.values.in) {
    log(`'--in' parameter required. (ex. '--in ./out/session.yaml')`);
    exit(1);
  }

  const yamlPath = join(cwd(), args.values.in);
  const startTime = performance.now();

  try {
    if (!(await fs.exists(yamlPath))) {
      throw new Error(`Provided input file could not be found (${yamlPath})`);
    }

    const yamlStr = await fs.readFile(yamlPath, {
      encoding: 'utf-8',
    });

    let patchedSession = '';

    log(`Patching session string with replace method: ${args.values.mode}`);
    if (args.values.mode === ReplaceMode.regex) {
      patchedSession = yamlStr.replace(/\:\W,/g, ': 0,');
    } else {
      patchedSession = yamlStr.replaceAll(': ,', ': 0,');
    }

    const parsedYaml = load(patchedSession);
    log(`Parsed yaml successfully`);

    if (args.values.out) {
      const outFile = join(cwd(), args.values.out);
      await fs.writeFile(outFile, JSON.stringify(parsedYaml, null, 2), {
        encoding: 'utf-8',
      });
      log(`Wrote parsed object to ${outFile}`);
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
