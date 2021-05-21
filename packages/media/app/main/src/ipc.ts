import { readFile } from 'fs/promises'
import { join } from 'path'
import { ipcMain } from 'electron'
import {
  CatalogDatabase,
  checkExists,
  downloadFile,
  downloadSongStream,
  downloadVideoStream,
  emptyDir,
  Publication,
  updateCatalog
} from '@library-api/core'
import { MediaDetailsDTO } from '@library-api/core/types/dto'

import { initDirectories } from './directories'
import { getDisplayWindow } from './window'
import { CATALOG_PATH, DOWNLOAD_DIR, VIDEO_DIR } from './constants'

import {
  CacheClear,
  CatalogUpdate,
  DisplayImage,
  DisplayVideo,
  DownloadSong,
  DownloadVideo,
  IPCVideoDTO,
  MediaImage,
  MediaVideo,
  PublicationMedia,
  SongDetails,
  VideoDetails
} from '../../../types/ipc'

function getVideoPaths (details: MediaDetailsDTO): { imagePath: string, videoPath: string } {
  const srcPath = join(VIDEO_DIR, details.id.replace('#', ''))
  return {
    imagePath: srcPath + '_preview.jpg',
    videoPath: srcPath + '_video.mp4'
  }
}

async function processVideoDetails (details: MediaDetailsDTO): Promise<VideoDetails> {
  const { imagePath, videoPath } = getVideoPaths(details)

  const imageDownloaded = await checkExists(imagePath)
  if (!imageDownloaded) {
    await downloadFile(details.url, imagePath)
  }
  const imageSrc = await readFile(imagePath, { encoding: 'base64' })

  const downloaded = await checkExists(videoPath)

  return {
    details,
    id: details.id,
    src: 'data:image/jpeg;base64,' + imageSrc,
    text: details.caption,
    downloaded
  }
}

export function initIPC (): void {
  ipcMain.handle('catalog:update', async (): Promise<CatalogUpdate['Response']> => {
    try {
      await updateCatalog(CATALOG_PATH)
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  })

  ipcMain.handle('publication:media', async (_event, args: PublicationMedia['Args']): Promise<PublicationMedia['Response']> => {
    const db = new CatalogDatabase(CATALOG_PATH)
    let publication: Publication | null = null
    try {
      publication = await db.getPublication(args.date, DOWNLOAD_DIR, args.type)
    } catch {
      return null
    }
    if (!publication) return null

    const baseImages = await publication.getImages(args.date)
    const { contentsPath } = publication
    const images = await Promise.all(baseImages.map(async (image) => {
      const srcURL = join(contentsPath, image.filePath)
      const src = await readFile(srcURL, { encoding: 'base64' })
      return {
        ...image,
        src: 'data:image/jpeg;base64,' + src,
        text: image.caption,
        downloaded: true
      }
    }))

    const baseVideos = await publication.getVideos(args.date)
    const videos: IPCVideoDTO[] = await Promise.all(baseVideos.map(async (video) => {
      const details = await db.getMediaDetails(video)
      if (!details) throw new Error(`Cannot load details for video: ${video.id}`)

      const videoDetails = await processVideoDetails(details)

      return {
        ...video,
        ...videoDetails
      }
    }))

    return {
      videos,
      images
    }
  })

  ipcMain.handle('download:video', async (_event, args: DownloadVideo['Args']): Promise<DownloadVideo['Response']> => {
    const { videoPath } = getVideoPaths(args.details)
    const stream = await downloadVideoStream(args, videoPath)
    if (!stream) throw new Error(`Could not load video stream for video detail: ${args.details.id}`)
  })

  ipcMain.handle('download:song', async (_event, args: DownloadSong['Args']): Promise<DownloadSong['Response']> => {
    const { videoPath } = getVideoPaths(args.details)
    const stream = await downloadSongStream(args.track, videoPath)
    if (!stream) throw new Error(`Could not load song stream for song: ${args.track}`)
  })

  ipcMain.handle('song:details', async (_event, args: SongDetails['Args']): Promise<SongDetails['Response']> => {
    const db = new CatalogDatabase(CATALOG_PATH)
    const details = await db.getSongDetails(args.track)
    if (!details) throw new Error('Could not find details')
    const videoDetails = processVideoDetails(details)
    return videoDetails
  })

  ipcMain.handle('cache:clear', async (): Promise<CacheClear['Response']> => {
    await emptyDir(DOWNLOAD_DIR)
    await initDirectories()
  })

  ipcMain.on('media:image', async (_event, args: MediaImage['Args']) => {
    const displayWindow = await getDisplayWindow()
    displayWindow.webContents.send('display:image', { src: args.src } as DisplayImage['Args'])
  })

  ipcMain.on('media:video', async (_event, args: MediaVideo['Args']) => {
    const { videoPath } = getVideoPaths(args.details)
    const displayWindow = await getDisplayWindow()
    displayWindow.webContents.send('display:video', { src: 'file:///' + videoPath } as DisplayVideo['Args'])
  })

  ipcMain.on('media:clear', async () => {
    const displayWindow = await getDisplayWindow()
    displayWindow.webContents.send('display:clear')
  })
}
