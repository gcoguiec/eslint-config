// @ts-check
import { context } from 'esbuild';
import dts from 'npm-dts';

new dts.Generator(
  {
    tsc: '-p tsconfig.dist.json',
    entry: 'src/index.ts',
    output: 'dist/index.d.ts'
  },
  false,
  true
).generate();

context({
  entryPoints: {
    index: './out/index.js'
  },
  bundle: true,
  outdir: './dist',
  external: [
    'globals',
    'eslint',
    'eslint-plugin-import-x',
    'eslint-plugin-perfectionist',
    'eslint-plugin-vue',
    'eslint-plugin-vitest',
    'eslint-config-prettier',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser'
  ],
  format: 'esm',
  platform: 'node',
  tsconfig: './tsconfig.dist.json'
}).then(async ctx => {
  console.log('building...');
  await ctx.rebuild();
  await ctx.dispose();
  console.log('finished');
});
