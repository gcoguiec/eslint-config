import { ecmascript, vitest } from '../../dist/index.js';

export default [...(await ecmascript()), ...(await vitest())];
