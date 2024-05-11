import { typescript, vitest } from './dist/index.js';

export default [
  {
    ignores: ['out/*', 'dist/*', 'vitest.config.ts', 'tests/**/sample*{js,ts}']
  },
  ...(await typescript()),
  ...(await vitest({
    typescript: true
  }))
];
