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
  mac: {
    hardenedRuntime: true,
    gatekeeperAssess: false,
    entitlements: 'buildResources/entitlements.mac.plist',
    entitlementsInherit: 'buildResources/entitlements.mac.plist'
  }
}

module.exports = config
