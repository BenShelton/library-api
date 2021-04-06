const { pathsToModuleNameMapper } = require('ts-jest/utils')

const baseConfig = require('../../jest.config.base')
const { compilerOptions } = require('./test/tsconfig.json')

/**
 * @type { import("@jest/types").Config.InitialOptions }
 */
module.exports = {
  ...baseConfig,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
}
