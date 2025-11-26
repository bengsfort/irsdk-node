import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import bengsfort from '@bengsfort/eslint-config-flat';
import { globalIgnores } from 'eslint/config';

const pkgRoot = dirname(fileURLToPath(import.meta.url));

export default bengsfort.defineConfig([
  globalIgnores(['./dist/', './out/', 'tsconfig.json']),

  // Code
  {
    files: ['./src/**/*.ts', './scripts/**/*.ts'],
    extends: bengsfort.configs.strictTypeChecked(pkgRoot),
    rules: {
      '@typescript-eslint/unified-signatures': 'off',
    },
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['./scripts/export-telemetry-vars.ts'],
        },
        tsconfigRootDir: pkgRoot,
      },
    },
  },

  // Configs
  {
    files: ['./*.config.js', './esbuild.js'],
    extends: bengsfort.configs.strict,
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
]);
