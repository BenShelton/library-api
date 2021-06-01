const packageConfig = require('./electron-builder.package.config')

/**
 * @type { import('electron-builder').Configuration }
 */
const config = {
  ...packageConfig,
  mac: {
    hardenedRuntime: true,
    gatekeeperAssess: false,
    entitlements: 'buildResources/entitlements.mac.plist',
    entitlementsInherit: 'buildResources/entitlements.mac.plist'
  },
  dmg: {
    sign: false
  },
  forceCodeSigning: true,
  afterSign: 'scripts/notarize.js',
  electronUpdaterCompatibility: '>= 2.16',
  publish: {
    provider: 'github',
    releaseType: 'release'
  }
}

module.exports = config
