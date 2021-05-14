import { constants } from 'fs'
import { mkdir, rm, access } from 'fs/promises'

/**
 * Creates the specified directory. Will create parent directories if missing.
 *
 * @param dir The directory to create.
 */
export function createDir (dir: string): Promise<string> {
  return mkdir(dir, { recursive: true })
}

/**
 * Removes the entire specified directory, similar to `rm -rf {dir}`.
 *
 * @param dir The directory to remove.
 */
export function emptyDir (dir: string): Promise<void> {
  return rm(dir, { recursive: true, force: true })
}

/**
 * Checks if a file exists.
 *
 * @param path The path to the file.
 * @returns `true` if the file exists, `false` if it does not.
 */
export async function checkExists (path: string): Promise<boolean> {
  try {
    await access(path, constants.F_OK)
    return true
  } catch (err) {
    return false
  }
}

/**
 * Validates that the passed in `date` is a string of `yyyy-mm-dd` format.
 *
 * @param date The date to validate.
 * @returns `true` if the date is valid, `false` if not.
 */
export function isValidDate (date: unknown): date is string {
  if (!date) return false
  if (typeof date !== 'string') return false
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false
  return true
}
