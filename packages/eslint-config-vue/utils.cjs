function hasPackage(name) {
  try {
    require.resolve(`${name}/package.json`);
    return true;
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') throw e;
    return false;
  }
}

module.exports = { hasPackage };
