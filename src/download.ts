import { createWriteStream } from 'fs'
import { join } from 'path'
import { pipeline } from 'stream'
import { promisify } from 'util'
import { createGunzip } from 'zlib'
import fetch, { Response } from 'node-fetch'
import { Extract } from 'unzipper'

import { CATALOG_URL, DOWNLOAD_DIR, PUBLICATION_URL } from './constants'

const streamPipeline = promisify(pipeline)

function checkStatus (res: Response): Response {
  if (res.ok) {
    return res
  } else {
    throw new Error(res.statusText)
  }
}

export async function downloadCatalog (): Promise<void> {
  const res = await fetch(CATALOG_URL)
  checkStatus(res)
  await streamPipeline(
    res.body,
    createGunzip(),
    createWriteStream(join(DOWNLOAD_DIR, 'catalog.db'))
  )
}

export async function downloadPublication (url: string, path: string): Promise<void> {
  const res = await fetch(PUBLICATION_URL + url)
  checkStatus(res)
  await streamPipeline(
    res.body,
    Extract({ path })
  )
}
