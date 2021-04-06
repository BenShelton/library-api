import { createWriteStream, createReadStream } from 'fs'
import { rename, unlink } from 'fs/promises'
import { join } from 'path'
import { pipeline } from 'stream'
import { promisify } from 'util'
import { createGunzip } from 'zlib'
import fetch, { Response } from 'node-fetch'
import { Extract } from 'unzipper'
import { CATALOG_URL, PUBLICATION_URL } from '@library-api/core'
import { GetMediaPubLinks } from '@library-api/core/types/hag'

import { DOWNLOAD_DIR } from './constants'

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
  // extract contents too (which is also a zip) that contains all the images and the internal db
  const contentsPath = join(path, 'contents')
  const zipPath = contentsPath + '.zip'
  await rename(contentsPath, zipPath)
  await streamPipeline(
    createReadStream(zipPath),
    Extract({ path: contentsPath })
  )
  await unlink(zipPath)
}

export async function downloadVideoStream ({ publication, track, issue } : { publication: string, track: number, issue: number }): Promise<NodeJS.ReadableStream | null> {
  const url = `https://api.hag27.com/GETPUBMEDIALINKS?output=json&pub=${publication}&langwritten=E&alllangs=0&txtCMSLang=E&track=${track}&fileformat=mp4,m4v&issue=${issue}`
  const hagRes = await fetch(url)
  checkStatus(hagRes)
  const options: GetMediaPubLinks = await hagRes.json()
  const downloadFile = options.files.E.MP4.find(f => f.label === '720p')
  if (!downloadFile) return null
  const fileRes = await fetch(downloadFile.file.url)
  checkStatus(fileRes)
  return fileRes.body
}

export async function extractZip (path: string): Promise<void> {
  await streamPipeline(
    createReadStream(path),
    Extract({ path })
  )
}