import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  globals: {
    'ts-jest': {
      tsconfig: 'test/tsconfig.json'
    }
  },
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
  testEnvironment: 'node',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ]
}

export default config
