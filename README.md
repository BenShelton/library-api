# Library API

An API for easily accessing information related to meetings and publications of Jehovah's Witnesses.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Packages

Click below to learn more about the individual packages Library API offers:

- [Library Media](./packages/media/README.md) - A desktop app that makes sharing meeting media easy
- [Library Express](./packages/express/README.md) - An express server for providing easy access to publication information
- [Library Core](./packages/core/README.md) - Core tools used in other packages

## Development

We recommend using VSCode for development, you should be prompted to install recommended extensions when first opening the project.

We use Yarn for package management. All files are written in TypeScript.

Git Hooks are also used by means of Husky.

Commit messages are enforced with Commitizen.

Run the following commands to get started:

```bash
# Bootstrap project (install dependencies & build TS definitions)
yarn bootstrap

# Run a command in a certain workspace
yarn workspace [workspace] [command]
# For example to run `yarn dev` in the `express` workspace
yarn workspace @library-api/express dev

# Shortcuts exist for the main packages
yarn express [command]
```
