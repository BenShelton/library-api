import express from 'express'
import { mocked } from 'ts-jest/utils'

import '@/server'
import * as core from '@library-api/core'
import { DOWNLOAD_DIR } from '@/constants'

jest.mock('@library-api/core')
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

const mockedCore = mocked(core, true)
const mockedExpress = mocked(express, true)

describe('Server', () => {
  test('should setup system files', () => {
    expect(mockedCore.createDir).lastCalledWith(DOWNLOAD_DIR)
  })

  test('should start express', () => {
    expect(mockedExpress).toBeCalledTimes(1)
  })
})
