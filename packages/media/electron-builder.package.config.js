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
  ]
}

module.exports = config
