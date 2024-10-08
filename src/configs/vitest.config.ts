import type { ESLint, Linter } from 'eslint';

import type { ConfigFactoryOptions } from '../index.js';

import { importPeer } from '../utils.js';
import { ecmascript, typescript } from '../index.js';

export const defaultOptions = {
  files: ['**/*.spec.{js,mjs,ts}']
};

export interface VitestFactoryOptions extends ConfigFactoryOptions {
  /**
   * Enables TypeScript support for the Vue configuration (default is False
   * and therefore set to ECMAScript).
   */
  typescript?: boolean;
}

export async function vitest(
  factoryOptions: VitestFactoryOptions = {}
): Promise<Linter.Config[]> {
  const [parentSetup] = factoryOptions.typescript
    ? await typescript(factoryOptions)
    : await ecmascript(factoryOptions);
  const vitestEslint = await importPeer<ESLint.Plugin>('eslint-plugin-vitest');
  return [
    {
      name: 'gcoguiec/vitest',
      files: factoryOptions.files ?? defaultOptions.files,
      languageOptions: {
        ...parentSetup?.languageOptions
      },
      plugins: {
        vitest: vitestEslint
      }
    },
    {
      name: 'gcoguiec/vitest/rules',
      files: factoryOptions.files ?? defaultOptions.files,
      rules: {
        ...(factoryOptions.typescript
          ? { '@typescript-eslint/unbound-method': 'off' }
          : {}),
        ...(vitestEslint.configs?.['recommended'] as Linter.Config).rules,
        'vitest/valid-title': 'off',
        'vitest/max-nested-describe': ['error', { max: 3 }],
        ...factoryOptions.overrides
      }
    }
  ];
}
