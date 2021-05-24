/**
 * @type { import('electron-builder').Configuration }
 */
const config = {
  productName: 'Library Media',
  directories: {
    output: 'dist',
    buildResources: 'buildResources'
  },
  files: [
    'app/**/dist/**'
  ],
  forceCodeSigning: true,
  mac: {
    hardenedRuntime: true,
    gatekeeperAssess: false,
    entitlements: 'buildResources/entitlements.mac.plist',
    entitlementsInherit: 'buildResources/entitlements.mac.plist'
  },
  dmg: {
    sign: false
  },
  afterSign: 'scripts/notarize.js'
}

module.exports = config
