const { pathsToModuleNameMapper } = require('ts-jest/utils')

const { compilerOptions } = require('./test/tsconfig.json')

module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'test/tsconfig.json'
    }
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: [
    '<rootDir>/test/**/*.spec.ts'
  ],
  testEnvironment: 'node'
}
