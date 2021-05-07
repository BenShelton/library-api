import { createWriteStream, createReadStream } from 'fs'
import { rename, unlink } from 'fs/promises'
import { join } from 'path'
import { pipeline } from 'stream'
import { promisify } from 'util'
import { createGunzip } from 'zlib'
import fetch, { Response } from 'node-fetch'
import { Extract } from 'unzipper'

import { CATALOG_URL, PUBLICATION_URL } from './constants'
import { GetMediaPubLinks } from '../types/hag'
import { VideoDTO } from '../types/dto'

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
  await streamPipeline(
    res.body,
    createWriteStream(path)
  )
}

export async function downloadCatalog (path: string): Promise<void> {
  const res = await fetch(CATALOG_URL)
  checkStatus(res)
  await streamPipeline(
    res.body,
    createGunzip(),
    createWriteStream(path)
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

export async function getVideoStream ({ type, doc, track, issue } : { type: VideoDTO['type'], doc: string | number, track: string | number, issue: string | number }): Promise<NodeJS.ReadableStream | null> {
  const url = new URL('https://api.hag27.com/GETPUBMEDIALINKS')
  url.searchParams.append('output', 'json')
  url.searchParams.append('langwritten', 'E')
  url.searchParams.append('alllangs', '0')
  url.searchParams.append('txtCMSLang', 'E')
  url.searchParams.append('fileformat', 'mp4')
  switch (type) {
    case 'pub':
      url.searchParams.append('pub', String(doc))
      break
    case 'doc':
      url.searchParams.append('docid', String(doc))
  }
  url.searchParams.append('track', String(track))
  url.searchParams.append('issue', String(issue))
  const hagRes = await fetch(url)
  checkStatus(hagRes)
  const options: GetMediaPubLinks = await hagRes.json()
  const downloadFile = options.files.E.MP4.find(f => f.label === '720p')
  if (!downloadFile) return null
  const fileRes = await fetch(downloadFile.file.url)
  checkStatus(fileRes)
  return fileRes.body
}

export async function downloadVideoStream (videoArgs: Parameters<typeof getVideoStream>[0], path: string): Promise<true | null> {
  const stream = await getVideoStream(videoArgs)
  if (!stream) return null
  await streamPipeline(
    stream,
    createWriteStream(path)
  )
  return true
}
