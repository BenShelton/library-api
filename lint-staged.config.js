module.exports = {
  'packages/core/**/*.{js,ts}': [
    'yarn core lint:fix',
    () => 'yarn core tsc',
    'yarn core test:staged',
    () => 'yarn core docs',
    'git add docs'
  ],
  'packages/express/**/*.{js,ts}': [
    'yarn express lint:fix',
    () => 'yarn express tsc',
    'yarn express test:staged'
  ],
  'packages/media/**/*.{js,ts,vue}': [
    'yarn media lint:fix',
    () => 'yarn media tsc',
    'yarn media test:staged'
  ],
  './*.{js,ts}': [
    'yarn lint:root --fix'
  ]
}
