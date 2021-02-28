import { constants } from 'fs'
import { mkdir, access } from 'fs/promises'

export async function createDir (dir: string): Promise<string> {
  return mkdir(dir, { recursive: true })
}

export async function checkExists (path: string): Promise<boolean> {
  try {
    await access(path, constants.F_OK)
    return true
  } catch (err) {
    return false
  }
}
