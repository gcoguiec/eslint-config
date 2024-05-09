// @ts-check
import { context } from 'esbuild';
import dts from 'npm-dts';

new dts.Generator({
  entry: 'src/index.ts',
  output: 'dist/index.d.ts'
}).generate();

context({
  entryPoints: {
    index: './out/index.js'
  },
  bundle: true,
  outdir: './dist',
  external: [
    'eslint',
    'eslint-plugin-import-x',
    'eslint-plugin-perfectionist',
    'eslint-plugin-vue',
    'eslint-plugin-vitest',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser'
  ],
  format: 'esm',
  platform: 'node',
  tsconfig: './tsconfig.json'
}).then(async ctx => {
  console.log('building...');
  await ctx.rebuild();
  await ctx.dispose();
  console.log('finished');
});
