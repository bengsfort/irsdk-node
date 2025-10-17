import { parseArgs } from 'node:util';

import * as esbuild from 'esbuild';

const args = parseArgs({
  options: {
    watch: {
      short: 'w',
      type: 'boolean',
    },
  },
});

/**
 * @param {import('esbuild').Format} format
 */
async function doBuild(format) {
  const extension = format === 'cjs' ? '.cjs' : '.js';

  return await esbuild.context({
    entryPoints: ['./src/index.ts'],
    outdir: `./dist/${format}`,
    platform: 'node',
    format,
    packages: 'external',
    external: ['@irsdk-node/types', 'node-gyp-build', 'js-yaml'],
    outExtension: {
      '.js': extension,
    },
    bundle: true,
    logOverride: {
      'empty-import-meta': 'silent',
    },
    inject: [`./shims/dirname-shim-${format}.js`],
  });
}

const [contextCjs, contextEsm] = await Promise.all([doBuild('cjs'), doBuild('esm')]);

if (!args.values.watch) {
  await contextCjs.rebuild();
  await contextEsm.rebuild();
  process.exit(0);
}

contextCjs.watch();
contextEsm.watch();
