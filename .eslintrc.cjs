/* eslint-env node */
module.exports = {
  root: true,
  extends: ['@gcoguiec/eslint-config-base', 'prettier'],
  overrides: [
    {
      files: ['**/*.spec.?js'],
      env: {
        jest: true
      },
      plugins: ['jest'],
      rules: {
        'no-restricted-globals': [
          'error',
          'fdescribe',
          'ddescribe',
          'fit',
          'iit'
        ]
      }
    }
  ]
};
