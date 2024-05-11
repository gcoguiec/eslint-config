import { describe, expect, it } from 'vitest';
import { ESLint } from 'eslint';

describe('TypeScript Configuration', () => {
  it('loads the config successfully', async () => {
    const eslint = new ESLint({
      overrideConfigFile: 'tests/typescript/config.js'
    });

    const [result] = await eslint.lintFiles('tests/typescript/sample.ts');
    expect(result?.errorCount).toBe(2);

    const messages = result?.messages;

    expect(messages?.[0]?.ruleId).toBe('@typescript-eslint/no-unused-vars');
    expect(messages?.[0]?.line).toBe(1);

    expect(messages?.[1]?.ruleId).toBe('@typescript-eslint/no-unsafe-return');
    expect(messages?.[1]?.line).toBe(1);
  });
});
