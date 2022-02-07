module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    // General codestyle
    "indent": [
      "error",
      2
    ],
    "semi": [
      "error",
      "always"
    ],
    "eqeqeq": ["error", "always"],
    "no-void": "off",
    "max-len": "off",
    "no-console": "off",
    "no-plusplus": "off",
    "no-unused-vars": "off",
    "no-underscore-dangle": "off",
    "no-prototype-builtins": "off",
    "class-methods-use-this": "off",
    "no-extra-boolean-cast": [
      "error",
      {
        "enforceForLogicalOperands": true
      }
    ],
    "import/no-unresolved": "off",
    "import/order": [
      "warn",
      {
        "newlines-between": "always"
      }
    ],
    "sort-imports": "off",
    "import/named": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      { "json": "always", "js": "never", "ts": "never" },
    ],
    "constructor-super": "off",
    "no-this-before-super": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "array",
        "readonly": "array"
      }
    ],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "after-used",
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": false
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      { // enforce variables/functions to camelCase
        "selector": ["variable", "function"],
        "format": ["camelCase", "PascalCase"]
      },
      {
        "selector": ["parameter"],
        "format": ["camelCase"]
      },
      { // Force destructured params to camel case
        "selector": ["parameter"],
        "modifiers": ["destructured"],
        "format": ["camelCase"]
      },
      { // Allow certain params to pascal case
        "selector": ["parameter", "typeProperty", "objectLiteralProperty"],
        "format": ["PascalCase", "camelCase"],
        "filter": {
          "regex": "(Icon|Component|Story|BoosterIcon)$",
          "match": true
        }
      },
      { // Allow certain destructured params to pascal case
        "selector": ["parameter"],
        "modifiers": ["destructured"],
        "format": ["PascalCase", "camelCase"],
        "filter": {
          "regex": "(Icon|Component|Story)$",
          "match": true
        }
      },
      { // Force unused params to have leading underscore
        "selector": ["parameter", "variable"],
        "modifiers": ["unused"],
        "leadingUnderscore": "require",
        "format": ["camelCase"]
      },
      { // allow styled components to uppercase
        "selector": ["variable", "function"],
        "modifiers": ["global"],
        "format": ["camelCase", "PascalCase"]
      },
      { // enforce global constants as UPPER_CASE
        "selector": "variable",
        "modifiers": ["global"],
        "types": ["boolean", "string", "number"],
        "format": ["UPPER_CASE"],
        "leadingUnderscore": "allowSingleOrDouble"
      },
      { // Ignore properties that require quotes
        "selector": [
          "classProperty",
          "objectLiteralProperty",
          "typeProperty",
          "classMethod",
          "objectLiteralMethod",
          "typeMethod",
          "accessor",
          "enumMember"
        ],
        "format": null,
        "modifiers": ["requiresQuotes"]
      },
      { // Enums
        "selector": ["enum", "enumMember"],
        "format": ["PascalCase"]
      },
      { // Classes
        "selector": ["class", "interface", "typeAlias"],
        "format": ["PascalCase"]
      },
      { // Properties
        "selector": ["property", "accessor"],
        "modifiers": ["public"],
        "format": ["camelCase"]
      },
      { // Private properties
        "selector": ["property", "method"],
        "modifiers": ["private", "protected"],
        "format": ["camelCase"],
        "leadingUnderscore": "require"
      },
      { // static properties
        "selector": ["property", "method"],
        "modifiers": ["static", "public"],
        "format": ["PascalCase"]
      },
      { // Private static properties
        "selector": ["classProperty"],
        "modifiers": ["private", "protected", "static"],
        "format": ["PascalCase"],
        "leadingUnderscore": "require"
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "explicit",
        "overrides": {
          "constructors": "off"
        }
      }
    ],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        "default": [
          // Index signature
          "signature",

          // Fields
          "public-field",
          "protected-field",
          "private-field",
          "field",
          "constructor",
          "private-method",
          "protected-method",
          "public-method",
          "method"
        ]
      }
    ],
  },
};
