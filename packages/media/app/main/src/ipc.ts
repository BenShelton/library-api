import { readFile } from 'fs/promises'
import { join } from 'path'
import { ipcMain } from 'electron'
import {
  CatalogDatabase,
  checkExists,
  downloadFile,
  Publication,
  updateCatalog
} from '@library-api/core'

import { getDisplayWindow } from './window'
import { CATALOG_PATH, DOWNLOAD_DIR, VIDEO_DIR } from './constants'

import {
  CatalogUpdate,
  DisplayImage,
  DisplayVideo,
  IPCVideoDTO,
  MediaImage,
  MediaVideo,
  PublicationMedia
} from '../../../types/ipc'

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
        text: image.caption
      }
    }))

    const baseVideos = await publication.getVideos(args.date)
    const videos: IPCVideoDTO[] = await Promise.all(baseVideos.map(async (video) => {
      const details = await db.getMediaDetails(video)
      if (!details) throw new Error(`Cannot load details for video: ${video.id}`)
      const srcPath = join(VIDEO_DIR, details.id)

      const imagePath = srcPath + '_preview.jpg'
      const imageDownloaded = await checkExists(imagePath)
      if (!imageDownloaded) {
        await downloadFile(details.url, imagePath)
      }
      const imageSrc = await readFile(imagePath, { encoding: 'base64' })

      const videoPath = srcPath + '_video.mp4'
      const downloaded = await checkExists(videoPath)

      return {
        ...video,
        src: 'data:image/jpeg;base64,' + imageSrc,
        text: details.caption,
        downloaded
      }
    }))

    return {
      videos,
      images
    }
  })

  ipcMain.on('media:image', async (_event, args: MediaImage['Args']) => {
    const displayWindow = await getDisplayWindow()
    displayWindow.webContents.send('display:image', { src: args.src } as DisplayImage['Args'])
  })

  ipcMain.on('media:video', async (_event, args: MediaVideo['Args']) => {
    const displayWindow = await getDisplayWindow()
    displayWindow.webContents.send('display:video', { src: args.src } as DisplayVideo['Args'])
  })

  ipcMain.on('media:clear', async () => {
    const displayWindow = await getDisplayWindow()
    displayWindow.webContents.send('display:clear')
  })
}
