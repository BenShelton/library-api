require('dotenv').config()
const { notarize } = require('electron-notarize')

/**
 * @param { import('electron-builder').AfterPackContext } context
 */
module.exports = async function notarizing (context) {
  const { electronPlatformName, appOutDir } = context
  if (electronPlatformName !== 'darwin') {
    return
  }

  const appName = context.packager.appInfo.productFilename

  return await notarize({
    appBundleId: 'com.benshelton.library-media',
    appPath: `${appOutDir}/${appName}.app`,
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_ID_PASS
  })
}
