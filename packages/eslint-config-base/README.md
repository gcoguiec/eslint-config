<h1 align="center">@gcoguiec/eslint-config-base</h1>
<br>
<p align="center">
  <img src="https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg" width="150" alt="ESLint Logo"/>
</p>
<p align="center">
  A reasonable ESLint base configuration.
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@gcoguiec/eslint-config-base">
    <img src="https://img.shields.io/github/package-json/v/gcoguiec/eslint-config?filename=packages%2Feslint-config-base%2Fpackage.json&style=flat-square" alt="Version"/>
  </a>
  <a href="https://github.com/gcoguiec/eslint-config/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/gcoguiec/eslint-config/ci.yml?branch=main&label=ci&style=flat-square" alt="CI Status"/>
  </a>
</p>

<hr>

- Single quotes, semicolons.
- Provides reasonable defaults for any ECMAScript projects (see [`eslint-config-typescript`](https://github.com/gcoguiec/eslint-config/tree/main/packages/eslint-config-typescript) if you're looking for a [TypeScript](https://www.typescriptlang.org/)-oriented configuration).
- Only does one thing and one thing only: linting.
- It is designed to cooperate well with auto-formatters.

<hr>

## Table of Contents

- [Getting Started](#getting-started)
- [See Also](#see-also)
- [License](#license)

## Getting Started

### Install

```bash
pnpm add -D eslint eslint-plugin-import eslint-plugin-promise @gcoguiec/eslint-config-base
```

### Register the configuration with [eslint](https://eslint.org/)

Edit your [`.eslintrc`](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file-formats) configuration file (you may have to create the file at your project root if it's missing) with the following :

```
{
  "extends": "@gcoguiec/eslint-config-base"
}
```

### (Optional) Add the scripts to your `package.json` file

```json
{
  "scripts": {
    "lint": "eslint . --ignore-path .gitignore",
    "lint:fix": "pnpm lint --fix"
  }
}
```

**Note:** you can replace `pnpm` by your favorite package manager instead.

### (Optional) Add the tasks to your `justfile`

```just
lint *args:
  pnpm eslint . --ignore-path .gitignore {{args}}

lint-fix:
  @just lint --fix
```

## See Also

Other [ESLint](https://eslint.org/) configurations based on this package you may want to look at:

- [`eslint-config-typescript`](https://github.com/gcoguiec/eslint-config/tree/main/packages/eslint-config-typescript)
- [`eslint-config-vue`](https://github.com/gcoguiec/eslint-config/tree/main/packages/eslint-config-vue)

## License

This package is licensed under [BSD 2-Clause](https://spdx.org/licenses/BSD-2-Clause.html).
