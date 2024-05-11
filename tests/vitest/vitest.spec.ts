import { describe, expect, it } from 'vitest';
import { ESLint } from 'eslint';

describe('Vue Configuration', () => {
  it('loads the config successfully', async () => {
    const eslint = new ESLint({
      overrideConfigFile: 'tests/vitest/config.js'
    });

    const [result] = await eslint.lintFiles('tests/vitest/sample.spec.js');
    expect(result?.errorCount).toBe(1);

    const messages = result?.messages;

    expect(messages?.[0]?.ruleId).toBe('vitest/max-nested-describe');
    expect(messages?.[0]?.line).toBe(6);
  });
});
