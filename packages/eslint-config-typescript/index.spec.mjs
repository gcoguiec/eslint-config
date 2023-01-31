import { ESLint } from 'eslint';

it('loads the config successfully', async () => {
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: 'index.cjs'
  });

  const [result] = await eslint.lintFiles('./sample.ts');
  expect(result.errorCount).toBe(3);

  const [message0, message1, message2] = result.messages;

  expect(message0.ruleId).toBe('@typescript-eslint/no-unnecessary-condition');
  expect(message0.line).toBe(0);
  expect(message1.ruleId).toBe('@typescript-eslint/prefer-nullish-coalescing');
  expect(message1.line).toBe(0);
  expect(message2.ruleId).toBe('@typescript-eslint/no-unsafe-return');
  expect(message2.line).toBe(2);
});
