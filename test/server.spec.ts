import fs from 'fs'
import express from 'express'
import { mocked } from 'ts-jest'

import 'src/server'
import { DOWNLOAD_DIR } from 'src/constants'

jest.mock('fs')
jest.mock('express', () => {
  return jest.fn().mockReturnValue({
    post: jest.fn(),
    listen: jest.fn()
  })
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
