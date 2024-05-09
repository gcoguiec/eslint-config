import type { Linter } from 'eslint';

import { es2021, node, browser } from 'globals';

export interface ConfigFactoryOptions {
  /**
   * An array of glob patterns indicating the files that the configuration
   * object should apply to.
   */
  files?: Linter.FlatConfig['files'];

  /**
   * An object containing the configured rules to override.
   */
  overrides?: Linter.FlatConfig['rules'];

  /**
   * Registers rules to avoid any conflicts between prettier and ESLint
   * (enabled by default, set to False to disable).
   */
  prettier?: boolean;
}

export const defaultLanguageOptions: Linter.FlatConfig['languageOptions'] = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  globals: {
    ...browser,
    ...node,
    ...es2021,
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly'
  }
};

export { vue } from './configs/vue.config.js';
export { vitest } from './configs/vitest.config.js';
export { typescript } from './configs/typescript.config.js';
export { ecmascript } from './configs/ecmascript.config.js';
