import type { ESLint, Linter } from 'eslint';

import type { ConfigFactoryOptions } from '../index.js';

import { ecmascript } from './ecmascript.config.js';
import { importPeer, tsconfigPath } from '../utils.js';
import { defaultLanguageOptions } from '../index.js';

export const defaultOptions = {
  files: ['**/*.{ts,d.ts,cts,d.cts,mts,d.mts,tsx}']
};

export type TypescriptFactoryOptions = ConfigFactoryOptions;

export async function typescript(
  factoryOptions: TypescriptFactoryOptions = {}
): Promise<Linter.FlatConfig[]> {
  const [parentSetup, parentRules] = await ecmascript(factoryOptions);
  const tsEslint = await importPeer<ESLint.Plugin>(
    '@typescript-eslint/eslint-plugin'
  );

  return [
    {
      name: 'gcoguiec/typescript',
      files: factoryOptions.files ?? defaultOptions.files,
      languageOptions: {
        ...defaultLanguageOptions,
        parser: await importPeer<Linter.FlatConfigParserModule>(
          '@typescript-eslint/parser'
        ),
        parserOptions: {
          project: process.env['ESLINT_TSCONFIG'] ?? (await tsconfigPath()),
          tsconfigRootDir: process.cwd(),
          sourceType: 'module'
        }
      },
      plugins: {
        ...parentSetup?.plugins,
        '@typescript-eslint': tsEslint
      }
    },
    {
      name: 'gcoguiec/typescript/rules',
      files: factoryOptions.files ?? defaultOptions.files,
      rules: {
        ...parentRules?.rules,
        ...(tsEslint.configs?.['recommended'] as Linter.FlatConfig).rules,
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
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-condition': [
          'error',
          { allowConstantLoopConditions: true }
        ],
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
        '@typescript-eslint/class-literal-property-style': 'error',
        ...factoryOptions.overrides
      }
    }
  ];
}
