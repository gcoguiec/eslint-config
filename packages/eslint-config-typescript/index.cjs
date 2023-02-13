module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    '@gcoguiec/eslint-config-base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  ignorePatterns: ['*.d.ts', '*.d.cts', '*.d.mts'],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.cjs',
          '.mjs',
          '.jsx',
          '.ts',
          '.cts',
          '.mts',
          '.tsx',
          '.d.cts',
          '.d.mts',
          '.d.ts'
        ]
      }
    }
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: true,
        sourceType: 'module'
      },
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': [
          'error',
          'always',
          { exceptAfterSingleLine: true }
        ],
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, classes: false, variables: true }
        ],
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-confusing-void-expression': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/prefer-return-this-type': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/consistent-indexed-object-style': 'error',
        '@typescript-eslint/consistent-generic-constructors': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface'
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', disallowTypeAnnotations: false }
        ],
        '@typescript-eslint/non-nullable-type-assertion-style': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/class-literal-property-style': 'error'
      }
    }
  ]
};
