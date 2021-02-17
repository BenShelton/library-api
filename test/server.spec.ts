import fs from 'fs'
import express from 'express'
import { mocked } from 'ts-jest/utils'

import 'src/server'
import { DOWNLOAD_DIR } from 'src/constants'

jest.mock('fs', () => {
  return {
    ...jest.requireActual<typeof import('fs')>('fs'),
    mkdirSync: jest.fn()
  }
})
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

const mockedFs = mocked(fs, true)
const mockedExpress = mocked(express, true)

describe('Server', () => {
  test('should setup system files', () => {
    expect(mockedFs.mkdirSync).lastCalledWith(DOWNLOAD_DIR, { recursive: true })
  })

  test('should start express', () => {
    expect(mockedExpress).toBeCalledTimes(1)
  })
})
