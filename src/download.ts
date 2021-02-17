import { createWriteStream } from 'fs'
import { join } from 'path'
import { pipeline } from 'stream'
import { promisify } from 'util'
import { createGunzip } from 'zlib'
import fetch, { Response } from 'node-fetch'
import { Extract } from 'unzipper'

import { DOWNLOAD_DIR } from './constants'

const streamPipeline = promisify(pipeline)

function checkStatus (res: Response): Response {
  if (res.ok) {
    return res
  } else {
    throw new Error(res.statusText)
  }
}

export async function downloadFile (url: string, path: string): Promise<void> {
  const res = await fetch(url)
  checkStatus(res)
  const ext = url.split('.').pop()!
  if (ext === 'gz') {
    await streamPipeline(
      res.body,
      createGunzip(),
      createWriteStream(join(DOWNLOAD_DIR, path))
    )
  } else {
    await streamPipeline(
      res.body,
      Extract({ path })
    )
  }
}
