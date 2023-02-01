const { posix, dirname } = require('path');
const { existsSync } = require('fs');

function tsconfigPath(filename = 'tsconfig.eslint.json') {
  let searchPath = process.cwd();
  while (true) {
    const configPath = posix.join(searchPath, filename);
    if (existsSync(configPath)) {
      return configPath;
    }
    const parentPath = dirname(searchPath);
    if (parentPath === searchPath) {
      return;
    }
    searchPath = parentPath;
  }
}

module.exports = { tsconfigPath };
