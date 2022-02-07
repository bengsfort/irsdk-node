module.exports = {
  extends: [
    '../../.eslintrc.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    // We are dealing with a lot of generated types in here, so we can't really change them.
    "@typescript-eslint/naming-convention": "off"
  }
}
