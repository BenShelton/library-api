import { constants, createReadStream } from 'fs'
import { mkdir, rm, access } from 'fs/promises'
import { createInterface } from 'readline'

/**
 * Creates the specified directory. Will create parent directories if missing.
 *
 * @param dir The directory to create.
 */
export async function createDir (dir: string): Promise<void> {
  await mkdir(dir, { recursive: true })
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
 * Reads a file line by line and allows running a callback for each line.
 *
 * @param path The path to the file.
 * @param cb The callback to apply for each line.
 */
export async function readLines (path: string, cb: (line: string) => void): Promise<void> {
  const stream = createReadStream(path)
  const rl = createInterface({
    input: stream,
    crlfDelay: Infinity
  })
  for await (const line of rl) {
    if (line) cb(line)
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
