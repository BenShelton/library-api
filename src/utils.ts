import { mkdir, access, constants } from 'fs'
import { promisify } from 'util'

const mkdirAsync = promisify(mkdir)
const accessAsync = promisify(access)

export async function createDir (dir: string): Promise<string> {
  return mkdirAsync(dir, { recursive: true })
}

export async function checkExists (path: string): Promise<boolean> {
  try {
    await accessAsync(path, constants.F_OK)
  } catch (err) {
    return false
  }
  return true
}
