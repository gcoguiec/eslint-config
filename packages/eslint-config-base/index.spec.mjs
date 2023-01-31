import { ESLint } from 'eslint';

it('loads the config successfully', async () => {
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: 'index.cjs'
  });

  const code = 'const foo = false;\nconst bar = foo => foo;\nbar(foo);\n';

  const [result] = await eslint.lintText(code);
  expect(result.errorCount).toBe(0);
});
