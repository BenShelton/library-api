/* eslint-env node */
const baseConfig = require('../../.eslintrc.js')

/**
 * @type { import('eslint').Linter.Config }
 */
module.exports = {
  ...baseConfig,
  extends: [
    ...baseConfig.extends,
    'plugin:vue/vue3-recommended'
  ],
  env: {
    browser: true,
    node: false
  },
  ignorePatterns: [
    ...baseConfig.ignorePatterns,
    'index.html'
  ],
  overrides: [
    ...baseConfig.overrides,
    {
      files: ['src/composables/**/*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off'
      }
    }
  ]
}
