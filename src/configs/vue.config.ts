import type { ESLint, Linter } from 'eslint';

import { browser } from 'globals';

import type { ConfigFactoryOptions } from '../index.js';

import { typescript } from './typescript.config.js';
import { ecmascript } from './ecmascript.config.js';
import { importPeer } from '../utils.js';

export const defaultOptions = {
  files: ['*.vue', '**/*.vue'],
  extraFileExtensions: ['.vue']
};

export interface VueFactoryOptions extends ConfigFactoryOptions {
  /**
   * Enables TypeScript support for the Vue configuration (default is False
   * and therefore set to ECMAScript).
   */
  typescript?: boolean;

  /**
   * Specifies an array of non-TypeScript extensions to allow.
   */
  extraFileExtensions?: string[];
}

export async function vue(
  factoryOptions: VueFactoryOptions = {}
): Promise<Linter.FlatConfig[]> {
  const parentConfig = factoryOptions.typescript
    ? await typescript(factoryOptions)
    : await ecmascript(factoryOptions);
  const [parentSetup, parentRules] = parentConfig;
  const vueEslint = await importPeer<ESLint.Plugin>('eslint-plugin-vue');
  return [
    {
      name: 'gcoguiec/vue',
      files: factoryOptions.files ?? defaultOptions.files,
      languageOptions: {
        globals: {
          ...browser,
          computed: 'readonly',
          defineEmits: 'readonly',
          defineExpose: 'readonly',
          defineProps: 'readonly',
          onMounted: 'readonly',
          onUnmounted: 'readonly',
          reactive: 'readonly',
          ref: 'readonly',
          shallowReactive: 'readonly',
          shallowRef: 'readonly',
          toRef: 'readonly',
          toRefs: 'readonly',
          watch: 'readonly',
          watchEffect: 'readonly'
        },
        sourceType: 'module',
        parser:
          await importPeer<Linter.FlatConfigParserModule>('vue-eslint-parser'),
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          extraFileExtensions:
            factoryOptions.extraFileExtensions ??
            defaultOptions.extraFileExtensions,
          parser: factoryOptions.typescript
            ? await importPeer<Linter.FlatConfigParserModule>(
                '@typescript-eslint/parser'
              )
            : null
        }
      },
      // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
      processor: vueEslint.processors?.['.vue'] as Linter.Processor,
      plugins: {
        ...parentSetup?.plugins,
        vue: vueEslint
      }
    },
    {
      name: 'gcoguiec/vue/rules',
      files: factoryOptions.files ?? defaultOptions.files,
      rules: {
        ...parentRules?.rules,
        ...(factoryOptions.typescript
          ? { '@typescript-eslint/no-unused-vars': 'off' }
          : {}),
        ...(vueEslint.configs?.['base'] as Linter.FlatConfig).rules,
        ...(vueEslint.configs?.['essential'] as Linter.FlatConfig).rules,
        'vue/multi-word-component-names': 'off',
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/component-options-name-casing': ['error', 'kebab-case'],
        'vue/component-definition-name-casing': ['error', 'kebab-case'],
        'vue/custom-event-name-casing': ['error', 'kebab-case'],
        'vue/attributes-order': 'error',
        'vue/no-lone-template': 'error',
        'vue/no-multiple-slot-args': 'error',
        'vue/no-v-html': 'off',
        'vue/order-in-components': 'error',
        'vue/this-in-template': 'error',
        'vue/attribute-hyphenation': 'error',
        'vue/first-attribute-linebreak': 'error',
        'vue/html-closing-bracket-newline': 'error',
        'vue/html-closing-bracket-spacing': 'error',
        'vue/html-end-tags': 'error',
        'vue/html-indent': 'error',
        'vue/html-quotes': 'error',
        'vue/html-self-closing': 'error',
        'vue/max-attributes-per-line': 'error',
        'vue/multiline-html-element-content-newline': 'error',
        'vue/mustache-interpolation-spacing': 'error',
        'vue/no-multi-spaces': 'error',
        'vue/no-spaces-around-equal-signs-in-attribute': 'error',
        'vue/no-template-shadow': 'error',
        'vue/one-component-per-file': 'error',
        'vue/prop-name-casing': 'error',
        'vue/require-default-prop': 'error',
        'vue/require-explicit-emits': 'error',
        'vue/require-prop-types': 'error',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/v-bind-style': 'error',
        'vue/v-on-event-hyphenation': 'error',
        'vue/v-on-style': 'error',
        'vue/v-slot-style': 'error',
        'vue/no-useless-v-bind': 'error',
        'vue/no-restricted-v-bind': ['error', '/^v-/'],
        'vue/padding-line-between-blocks': 'error',
        'vue/prefer-separate-static-class': 'error',
        'vue/dot-notation': ['error', { allowKeywords: true }],
        'vue/no-loss-of-precision': 'error',
        'vue/no-sparse-arrays': 'error',
        'vue/define-macros-order': [
          'error',
          {
            order: ['defineProps', 'defineEmits']
          }
        ],
        'vue/html-comment-content-spacing': [
          'error',
          'always',
          {
            exceptions: ['-']
          }
        ],
        'vue/block-tag-newline': [
          'error',
          {
            singleline: 'always',
            multiline: 'always'
          }
        ],
        'vue/block-order': [
          'error',
          {
            order: ['script', 'template', 'style']
          }
        ],
        'vue/no-restricted-syntax': [
          'error',
          'DebuggerStatement',
          'LabeledStatement',
          'WithStatement'
        ],
        ...factoryOptions.overrides
      }
    }
  ];
}
