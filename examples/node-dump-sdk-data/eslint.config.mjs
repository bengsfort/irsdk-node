import bengsfort from '@bengsfort/eslint-config-flat';

export default bengsfort.defineConfig([
  {
    files: ['./src/**/*.js', './*.config.js'],
    extends: bengsfort.configs.strict,
    rules: {
      'no-console': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]);
