<h1 align="center">
  <img src="./app/renderer/src/assets/logo-banner.png">
</h1>

<p align="center">
  A cross-platform desktop application that simplifies showing media for meetings of Jehovah's Witnesses.
</p>

<br>

## Description

Finally, non-Windows users can now also display media in a more professional way.

This package is brought to you by [Library API](../../README.md).

## Download

You can download the latest versions from the [latest releases page](https://github.com/BenShelton/library-api/releases/latest). For Mac you want to `.dmg` file (not the one ending `.blockmap`). You can view more detailed installation instructions [here](https://benshelton.github.io/library-api/media/#installation).

For other systems you can package this yourself using the `package` command (see [Development](#development).

## Documentation

View the documentation [here](https://benshelton.github.io/library-api/media/).

## Development

Run the following commands to get started. If you are running from the root directory you can add `media` to run these (for example `yarn media dev` instead of just `yarn dev`):

```bash
# Start server with hot reload for development
yarn dev

# Build (outputs to /dist)
yarn build

# Package the app for testing locally
# Note that local versions will raise app-update errors on startup, they can be ignored
yarn package

# Lint files
yarn lint

# Run test suite
yarn test

# Run Type Checking Service
yarn tsc
```
