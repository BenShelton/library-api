import { mkdir, access } from 'fs'
import { promisify } from 'util'

const mkDirAsync = promisify(mkdir)
const accessAsync = promisify(access)

export async function createDir (dir: string): Promise<string> {
  return mkDirAsync(dir, { recursive: true })
}

export async function checkExists (path: string): Promise<boolean> {
  try {
    accessAsync(path)
  } catch {
    return false
  }
  return true
}
