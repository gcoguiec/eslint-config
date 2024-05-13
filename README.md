<h1 align="center">@gcoguiec/eslint-config</h1>
<p align="center">
  A few <a href="https://eslint.org/docs/developer-guide/shareable-configs">reusable</a> ESLint configurations.
</p>
<p align="center">
  <a href="https://github.com/gcoguiec/eslint-config/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/gcoguiec/eslint-config/ci.yml?branch=main&label=ci&style=flat-square" alt="CI Status"/>
  </a>
  <a href="https://github.com/gcoguiec/eslint-config/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/gcoguiec/eslint-config?style=flat-square&label=License"
         alt="License"/>
  </a>
</p>

<hr>

## Table of Contents

- [Getting Started](#getting-started)
- [Additional Configurations](#additional-configurations)
- [License](#license)

## Getting Started

### ECMAScript

#### Install

```bash
pnpm add -D eslint eslint-plugin-import-x tslib eslint-plugin-perfectionist eslint-config-prettier @gcoguiec/eslint-config
```

#### Register the configuration with [eslint](https://eslint.org/)

```js
// eslint.config.js
import { ecmascript } from '@gcoguiec/eslint-config';

export default [...(await ecmascript())];
```

### TypeScript

#### Install

```bash
pnpm add -D eslint eslint-plugin-import-x tslib eslint-plugin-perfectionist eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser @gcoguiec/eslint-config
```

#### Register the configuration with [eslint](https://eslint.org/)

```js
// eslint.config.js
import { typescript } from '@gcoguiec/eslint-config';

export default [...(await typescript())];
```

### Vue

#### Install

```bash
pnpm add -D eslint eslint-plugin-import-x tslib eslint-plugin-perfectionist eslint-config-prettier eslint-plugin-vue @gcoguiec/eslint-config
```

#### Install (TypeScript only)

```bash
pnpm add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

#### Register the configuration with [eslint](https://eslint.org/)

```js
// eslint.config.js
import { vue } from '@gcoguiec/eslint-config';

// ECMAScript
export default [...(await vue())];

// TypeScript
export default [...(await vue({ typescript: true }))];
```

## Additional Configurations

### Vitest

#### Install

```bash
pnpm add -D eslint-plugin-vitest
```

#### Register the configuration with [eslint](https://eslint.org/)

```js
// eslint.config.js
import { ecmascript, typescript, vitest } from '@gcoguiec/eslint-config';

// ECMAScript
export default [
  ...(await ecmascript()),
  ...(await vitest())
];

// TypeScript
export default [
  ...(await typescript()),
  ...(await vitest({ typescript: true }))
];
```

## License

This project is licensed under [BSD 2-Clause](https://spdx.org/licenses/BSD-2-Clause.html).
