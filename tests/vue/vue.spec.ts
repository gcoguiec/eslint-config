import { describe, expect, it } from 'vitest';
import { ESLint } from 'eslint';

describe('Vue Configuration', () => {
  it('loads the config successfully', async () => {
    const eslint = new ESLint({
      overrideConfigFile: 'tests/vue/config.js'
    });

    const [result] = await eslint.lintFiles('tests/vue/sample.vue');
    expect(result?.errorCount).toBe(3);

    const messages = result?.messages;

    expect(messages?.[0]?.ruleId).toBe('vue/html-self-closing');
    expect(messages?.[0]?.line).toBe(2);

    expect(messages?.[1]?.ruleId).toBe('vue/v-on-style');
    expect(messages?.[1]?.line).toBe(3);

    expect(messages?.[2]?.ruleId).toBe('vue/block-order');
    expect(messages?.[2]?.line).toBe(11);
  });
});
