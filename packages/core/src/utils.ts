import { constants } from 'fs'
import { mkdir, rm, access } from 'fs/promises'

export function createDir (dir: string): Promise<string> {
  return mkdir(dir, { recursive: true })
}

/**
 * Removes the entire directory (similar to rm -rf)
 */
export function emptyDir (dir: string): Promise<void> {
  return rm(dir, { recursive: true, force: true })
}

export async function checkExists (path: string): Promise<boolean> {
  try {
    await access(path, constants.F_OK)
    return true
  } catch (err) {
    return false
  }
}

export function isValidDate (date: unknown): date is string {
  if (!date) return false
  if (typeof date !== 'string') return false
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false
  return true
}
