import { describe, expect, it } from 'vitest';
import { ESLint } from 'eslint';

describe('Ecmascript Configuration', () => {
  it('loads configuration successfully', async () => {
    const eslint = new ESLint({
      overrideConfigFile: 'tests/ecmascript/config.js'
    });

    const code = 'const foo = false;\nconst bar = foo => foo;\nbar(foo);\n';

    const [result] = await eslint.lintText(code);
    expect(result?.errorCount).toBe(0);
  });
});
