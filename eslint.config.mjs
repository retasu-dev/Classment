import globals from 'globals';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['src/**/*.{ts,mts,cts}'],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-else-return': 'warn',
      'no-useless-return': 'warn',
      'no-useless-rename': 'warn',
      'no-dupe-else-if': 'warn',
      'no-duplicate-imports': 'warn',
      'no-duplicate-case': 'warn',
      'no-lonely-if': 'warn',


      'no-extra-semi': 'error',
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'getter-return': ['error', { allowImplicit: true }],
      'no-empty-function': ['error', { allow: ['arrowFunctions', 'functions', 'methods'] }],
      'no-empty': ['error', { allowEmptyCatch: true }],

    },
  }
];
