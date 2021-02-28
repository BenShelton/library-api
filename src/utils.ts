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

export function isValidDate (date: unknown): date is string {
  if (!date) return false
  if (typeof date !== 'string') return false
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false
  return true
}
