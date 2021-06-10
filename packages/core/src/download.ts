import { createWriteStream, createReadStream } from 'fs'
import { rename, unlink } from 'fs/promises'
import { join } from 'path'
import { pipeline } from 'stream'
import { promisify } from 'util'
import { createGunzip } from 'zlib'
import fetch, { Response } from 'node-fetch'
import { Extract } from 'unzipper'

import { getLanguageById } from './language'
import { CATALOG_URL, MEDIA_URL, PUBLICATION_URL, SONG_PUBLICATION } from './constants'

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

/**
 * A helper function that downloads the requested URL and writes it to the specified path.
 *
 * @param url The URL of the file to download.
 * @param path The path to write the file to.
 */
export async function downloadFile (url: string, path: string): Promise<void> {
  const res = await fetch(url)
  checkStatus(res)
  await streamPipeline(
    res.body,
    createWriteStream(path)
  )
}

/**
 * Downloads the catalog & writes it to the specified path.
 *
 * @param path The path to write the catalog file to.
 */
export async function downloadCatalog (path: string): Promise<void> {
  const res = await fetch(CATALOG_URL)
  checkStatus(res)
  await streamPipeline(
    res.body,
    createGunzip(),
    createWriteStream(path)
  )
}

/**
 * NOTE: You probably want to be using `getPublication` in {@link Database} which does this for you.
 *
 * Downloads a publication from a URL & extracts it to the specified directory path.
 *
 * The resulting structure will be:
 * ```
 * /path
 *   /manifest.json
 *   /contents
 *     /(NameFragment).db
 *     /(multiple .jpg files)
 * ```
 *
 * @param url The publication URL.
 * @param path The path to write the catalog file to. This is usually the publication NameFragment.
 */
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

/**
 * Searches the external Media API endpoint for the requested video and retrieves the highest quality (720p) version of it.
 *
 * @param videoParams Params to find the video, you can pass in a video from `getVideos` of {@link Publication}.
 *
 * @returns A Stream of the video file or `null` if the video cannot be found.
 */
export async function getVideoStream ({ type, doc, track, issue, languageId = 0 } : { type: VideoDTO['type'], doc: string | number, track: string | number, issue: string | number, languageId?: number }): Promise<NodeJS.ReadableStream | null> {
  const language = getLanguageById(languageId)
  if (!language) return null
  const url = new URL(MEDIA_URL)
  url.searchParams.append('output', 'json')
  url.searchParams.append('langwritten', language.symbol)
  url.searchParams.append('alllangs', '0')
  url.searchParams.append('txtCMSLang', language.symbol)
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
  const downloadFile = options.files[language.symbol].MP4.find(f => f.label === '720p')
  if (!downloadFile) return null
  const fileRes = await fetch(downloadFile.file.url)
  checkStatus(fileRes)
  return fileRes.body
}

/**
 * Does the same as {@link getVideoStream} but writes the stream to a file instead of returning the stream.
 *
 * @param videoParams See {@link getVideoStream} videoParams.
 * @param path The path to write the video to.
 *
 * @returns `true` if the file was written successfully, `null` if the video could not be found.
 */
export async function downloadVideoStream (videoArgs: Parameters<typeof getVideoStream>[0], path: string): Promise<true | null> {
  const stream = await getVideoStream(videoArgs)
  if (!stream) return null
  await streamPipeline(
    stream,
    createWriteStream(path)
  )
  return true
}

/**
 * Does the same as {@link getVideoStream} but only requires passing a song number.
 *
 * @param track The song number to use.
 * @param languageId The Meps Language Id to use. Defaults to `0` (English).
 *
 * @returns See {@link getVideoStream}.
 */
export async function getSongStream (track: number, languageId = 0): Promise<NodeJS.ReadableStream | null> {
  return getVideoStream({ ...SONG_PUBLICATION, track, languageId })
}

/**
 * Does the same as {@link downloadVideoStream} but only requires passing a song number.
 *
 * @param track The song number to use.
 * @param path The path to write the song to.
 * @param languageId The Meps Language Id to use. Defaults to `0` (English).
 *
 * @returns See {@link downloadVideoStream}.
 */
export async function downloadSongStream (track: number, path: string, languageId = 0): Promise<true | null> {
  return downloadVideoStream({ ...SONG_PUBLICATION, track, languageId }, path)
}
