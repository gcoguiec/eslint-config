import { typescript } from './dist/index.js';

export default [
  {
    ignores: ['out/*', 'dist/*']
  },
  ...(await typescript())
];
