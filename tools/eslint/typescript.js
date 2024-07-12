const javascriptRules = require('./javascript');

module.exports = {
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/ban-types': 'error',

  '@typescript-eslint/camelcase': 'off',
  camelcase: 'off',

  '@typescript-eslint/consistent-type-assertions': 'error',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/no-array-constructor': 'error',
  'no-array-constructor': 'off',

  '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
  'no-empty-function': 'off',

  '@typescript-eslint/no-empty-interface': 'off',
  '@typescript-eslint/no-explicit-any': 'off',

  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-assertion': 'warn',
  '@typescript-eslint/no-this-alias': 'error',

  '@typescript-eslint/no-unused-vars': javascriptRules['no-unused-vars'],
  'no-unused-vars': 'off',

  '@typescript-eslint/no-use-before-define': 'error',
  'no-use-before-define': 'off',

  '@typescript-eslint/no-var-requires': 'off',

  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',

  // Handled by Typescript
  'getter-return': 'off',
  'no-const-assign': 'off',
  'no-dupe-args': 'off',
  'no-dupe-class-members': 'off',
  'no-dupe-keys': 'off',
  'no-new-symbol': 'off',
  'no-redeclare': 'off',
  'no-this-before-super': 'off',
  'no-unreachable': 'off',
  'valid-typeof': 'off',

  // Handled by Prettier
  '@typescript-eslint/brace-style': 'off',
  '@typescript-eslint/func-call-spacing': 'off',
  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/member-delimiter-style': 'off',
  '@typescript-eslint/no-extra-parens': 'off',
  '@typescript-eslint/quotes': 'off',
  '@typescript-eslint/semi': 'off',
  '@typescript-eslint/type-annotation-spacing': 'off',
};
