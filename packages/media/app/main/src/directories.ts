import { readdir, unlink } from 'fs/promises'
import { join } from 'path'
import { createDir } from '@library-api/core'

import { DOWNLOAD_DIR, VIDEO_DIR } from './constants'

export async function initDirectories (): Promise<void> {
  await createDir(DOWNLOAD_DIR)
  await createDir(VIDEO_DIR)
  // TODO: Remove this when Media Catalogs are updateable
  const files = await readdir(DOWNLOAD_DIR)
  for (const file of files) {
    if (file.endsWith('.ndjson')) {
      await unlink(join(DOWNLOAD_DIR, file))
    }
  }
}
