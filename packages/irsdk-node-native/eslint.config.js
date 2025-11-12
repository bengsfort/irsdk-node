import bengsfort from '@bengsfort/eslint-config-flat';
import { globalIgnores } from 'eslint/config';

export default bengsfort.defineConfig([
  globalIgnores(['./dist/', './out/', 'tsconfig.json']),

  // Code
  {
    files: ['./src/**/*.ts', './scripts/*.ts'],
    extends: bengsfort.configs.strictTypeChecked(import.meta.dirname),
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
