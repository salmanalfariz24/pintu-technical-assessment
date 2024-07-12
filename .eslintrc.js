const globals = require('./tools/eslint/globals');
const reactRules = require('./tools/eslint/react');
const typescriptRules = require('./tools/eslint/typescript');

module.exports = {
  extends: 'next/core-web-vitals',
  plugins: [
    'import',
    'jsx-a11y',
    'prettier',
    'react',
    'react-hooks',
    'jest',
    'jest-dom',
    'testing-library',
    'no-secrets',
  ],
  globals: globals,
  rules: reactRules,
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        jsx: true,
        useJSXTextNode: true,
      },
      plugins: [
        '@typescript-eslint',
        'import',
        'jsx-a11y',
        'prettier',
        'react',
        'react-hooks',
        'jest',
        'jest-dom',
        'testing-library',
        'no-secrets',
      ],
      rules: {
        ...reactRules,
        ...typescriptRules,
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      },
    },
  ],
};
