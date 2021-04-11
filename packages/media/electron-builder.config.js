/**
 * @type { import('electron-builder').Configuration }
 */
const config = {
  productName: 'Library API Media',
  directories: {
    output: 'dist',
    buildResources: 'buildResources'
  },
  files: [
    'app/**/dist/**'
  ]
}

module.exports = config
