import { readFile } from 'fs/promises'
import { join } from 'path'
import { ipcMain } from 'electron'
import { CatalogDatabase, updateCatalog } from '@library-api/core'

import { refocusDisplayWindow } from './window'
import { CATALOG_PATH, DOWNLOAD_DIR } from './constants'

import { CatalogUpdate, DisplayImage, MediaImage, PublicationMedia } from '../../../types/ipc'

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
    const publication = await db.getPublication(args.date, DOWNLOAD_DIR, args.type)
    if (!publication) return null
    const baseImages = await publication.getImages(args.date)
    const images = await Promise.all(baseImages.map(async (image) => {
      const srcURL = join(publication.contentsPath, image.filePath)
      const src = await readFile(srcURL, { encoding: 'base64' })
      return { ...image, src: 'data:image/jpeg;base64,' + src }
    }))
    return {
      videos: await publication.getVideos(args.date),
      images
    }
  })

  ipcMain.on('media:image', async (_event, args: MediaImage['Args']) => {
    const displayWindow = await refocusDisplayWindow()
    displayWindow.webContents.send('display:image', { src: args.src } as DisplayImage['Args'])
  })
}
