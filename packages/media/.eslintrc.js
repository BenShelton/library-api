const baseConfig = require('../../.eslintrc.js')

/**
 * @type { import('eslint').Linter.Config }
 */
module.exports = {
  ...baseConfig,
  rules: {
    'no-console': 'error'
  },
  overrides: [
    ...baseConfig.overrides,
    {
      files: 'scripts/**/*.js',
      rules: {
        'no-console': 'off'
      }
    }
  ]
}
