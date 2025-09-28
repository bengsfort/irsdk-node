import bengsfort from '@bengsfort/eslint-config-flat';
import { globalIgnores } from 'eslint/config';

export default bengsfort.defineConfig([
  globalIgnores(['./dist/', './out/', 'tsconfig.json', '_GENERATED_telemetry.ts']),

  // Source code
  {
    files: ['./src/**/*.ts'],
    extends: bengsfort.configs.strictTypeChecked(import.meta.dirname),
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          // We don't have control over the namings of these as they come from
          // the iRacing SDK. Disable for this package.
          selector: ['property', 'accessor'],
          modifiers: ['public'],
          format: null,
        },
      ],
    },
  },

  // Configs
  {
    files: ['./*.config.js'],
    extends: bengsfort.configs.strict,
  },
]);
