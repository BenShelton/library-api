import { createDir } from '@library-api/core'

import { DOWNLOAD_DIR, VIDEO_DIR } from './constants'

export async function initDirectories (): Promise<void> {
  await createDir(DOWNLOAD_DIR)
  await createDir(VIDEO_DIR)
}
