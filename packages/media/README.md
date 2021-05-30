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

In the meantime you can package this yourself using the `build` and `package` commands in [Packaging Locally](#packaging-locally).

## Documentation

View the documentation [here](https://benshelton.github.io/library-api/media/).

## Development

Run the following commands to get started. If you are running from the root directory you can add `media` to run these (for example `yarn media dev` instead of just `yarn dev`):

```bash
# Start server with hot reload for development
yarn dev

# Build (outputs to /dist)
yarn build

# Lint files
yarn lint

# Run test suite
yarn test

# Run Type Checking Service
yarn tsc
```

### Packaging Locally

**MacOS**

Packaging the app locally requires the correct certificates in order to notarize the application.

If you want to build locally without notarizing, remove the `afterSign: 'scripts/notarize.js'` setting in `electron-builder.config.js`.

You will need to following `.env` files to created in the `packages/media` directory:

`.env`
```bash
APPLE_ID="YourAppleID"
# NOT your Apple ID password. Generate an app specific password at appleid.apple.com
APPLE_ID_PASS="aaaa-bbbb-cccc-dddd"
```

`electron-builder.env`
```bash
# See https://www.electron.build/code-signing
CSC_LINK="Base64OrFile"
CSC_KEY_PASSWORD="YourPassword"
```

After these files have been created, run the following to package the app:

```bash
# Do a fresh build of the electron app
yarn build

# Run the builder
yarn package
```
