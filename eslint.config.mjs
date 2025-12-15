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
      'no-extra-semi': 'error',
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'quotes': ['error', 'single', { avoidEscape: true }],
    },
  },
  {
    files: ['src/libs/line/**/*.ts'],
    rules: {
      'no-unused-vars': 'off',
    },
  }
];
