/** @type { import('vls').VeturConfig } */
module.exports = {
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true,
    'vetur.validation.template': false,
    'vetur.validation.templateProps': true
  },
  projects: [
    {
      root: './packages/media/app/renderer',
      package: '../../package.json',
      tsconfig: './tsconfig.json'
    }
  ]
}
