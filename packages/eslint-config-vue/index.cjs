const { hasPackage } = require('./utils.cjs');

const rules = {
  'vue/multi-word-component-names': 'off',
  'vue/no-setup-props-destructure': 'off',
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
  'vue/component-tags-order': [
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
  ]
};

module.exports = hasPackage('typescript')
  ? {
      extends: [
        '@gcoguiec/eslint-config-typescript',
        'plugin:vue/vue3-essential'
      ],
      rules,
      overrides: [
        {
          files: ['*.vue'],
          parser: 'vue-eslint-parser',
          parserOptions: {
            parser: '@typescript-eslint/parser',
            project: true,
            sourceType: 'module',
            extraFileExtensions: ['.vue']
          },
          rules: {
            '@typescript-eslint/no-unused-vars': 'off'
          }
        }
      ]
    }
  : {
      extends: ['@gcoguiec/eslint-config-base', 'plugin:vue/vue3-essential'],
      rules
    };
