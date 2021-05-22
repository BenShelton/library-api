<p align="center">
  <img src="./assets/logo.png" alt="Library API Logo" width="125">
</p>

<h1 align="center">
  Library API
</h1>

[![Github Actions Status](https://github.com/BenShelton/library-api/workflows/CI/badge.svg)](https://github.com/BenShelton/library-api/actions)
[![TypeScript](https://img.shields.io/npm/types/typescript)](https://www.typescriptlang.org/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![license](https://img.shields.io/npm/l/@library-api/core)](./LICENSE.md)

An API for accessing information related to meetings and publications of Jehovah's Witnesses.

## 📦 Packages

Library API offers the following packages:

| Package                                         | Description                                                                  |                Changelog                |
| ----------------------------------------------- | ---------------------------------------------------------------------------- | :-------------------------------------: |
| [Library Media](./packages/media/README.md)     | A **desktop app** that makes sharing meeting media easy                      |  [View](./packages/media/CHANGELOG.md)  |
| [Library Express](./packages/express/README.md) | An **express server** for providing easy access to publication information   | [View](./packages/express/CHANGELOG.md) |
| [Library Core](./packages/core/README.md)       | **Core tools** used in other packages that can be used to build your own app |  [View](./packages/core/CHANGELOG.md)   |

## 📖 Documentation

Documentation for all packages can be viewed [here](https://benshelton.github.io/library-api/).

## 💡 Motivation

There is no publicly available API for this information and the data structure is not created in a way to make things simple to parse or access.

These packages aim to provide an API that provides the information without having to dig into the internals of existing apps.

We also aim to provide sample applications that use this API.

## ❓ Support

For instructions on how to use the individual packages view them using the links above.

If you have any issues or feature requests please check if this had already been suggested on [our issues page](https://github.com/BenShelton/library-api/issues) and if not then select "New issue".

## 🛠 Development

If you would like to contribute then thank you in advance! Library API uses the following tools for development you will need to install:

- [VSCode](https://code.visualstudio.com/) as an IDE, you should be prompted to install recommended extensions when first opening the project
- [Yarn (Classic)](https://classic.yarnpkg.com/en/) for package management

You may also want to be familiar with the following (although some of these are automatic):

- [TypeScript](https://www.typescriptlang.org/) is the main language
- [Husky](https://typicode.github.io/husky/#/) is used to set up git hooks
- [Commitizen](https://github.com/commitizen/cz-cli) and [commitlint](https://github.com/conventional-changelog/commitlint) enforce commit message styling

Run the following commands to get started:

```bash
# Bootstrap project (install dependencies & build TS definitions)
yarn bootstrap

# Run a command in a certain workspace
yarn workspace [workspace] [command]
# For example to run `yarn dev` in the `express` workspace
yarn workspace @library-api/express dev
# Shortcuts exist for the main packages, this is equivalent to the above
yarn express dev
```
