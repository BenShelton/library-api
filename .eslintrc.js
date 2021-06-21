/**
 * @type { import('eslint').Linter.Config }
 */
module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    browser: false
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  ignorePatterns: [
    'dist/*'
  ],
  rules: {
    // typescript handles this for us
    'no-use-before-define': 'off'
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
}
