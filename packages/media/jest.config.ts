import { Config } from '@jest/types'
import { pathsToModuleNameMapper } from 'ts-jest/utils'

import baseConfig from '../../jest.config.base'
import { compilerOptions } from './test/tsconfig.json'

const config: Config.InitialOptions = {
  ...baseConfig,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
}

export default config
