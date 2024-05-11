import { vue } from '../../dist/index.js';

export default [
  ...(await vue({
    typescript: true
  }))
];
