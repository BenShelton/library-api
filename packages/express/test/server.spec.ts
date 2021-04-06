import express from 'express'
import { mocked } from 'ts-jest/utils'

import '@/server'
import * as utils from '@/utils'
import { DOWNLOAD_DIR } from '@/constants'

jest.mock('@/utils')
jest.mock('@/catalog')
jest.mock('express', () => {
  return {
    ...jest.requireActual<typeof import('express')>('express'),
    __esModule: true,
    default: jest.fn().mockReturnValue({
      use: jest.fn(),
      listen: jest.fn()
    })
  }
})

const mockedUtils = mocked(utils, true)
const mockedExpress = mocked(express, true)

describe('Server', () => {
  test('should setup system files', () => {
    expect(mockedUtils.createDir).lastCalledWith(DOWNLOAD_DIR)
  })

  test('should start express', () => {
    expect(mockedExpress).toBeCalledTimes(1)
  })
})
