import * as esbuild from 'esbuild';
import { parseArgs } from 'node:util';

const args = parseArgs({
  options: {
    'watch': {
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
    outExtension: {
      '.js': extension,
    },
    bundle: true,
    external: [
      '@irsdk-node/types',
      '@irsdk-node/native',
    ],
  });
}

const [contextCjs, contextEsm] = await Promise.all([
  doBuild('cjs'),
  doBuild('esm'),
]);

if (!args.values.watch) {
  await contextCjs.rebuild();
  await contextEsm.rebuild();
  process.exit(0);
}

contextCjs.watch();
contextEsm.watch();
