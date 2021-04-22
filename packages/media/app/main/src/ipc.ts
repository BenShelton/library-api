import { ipcMain } from 'electron'
import { CatalogDatabase, updateCatalog } from '@library-api/core'

import { CATALOG_PATH, DOWNLOAD_DIR } from './constants'

import { CatalogUpdate, PublicationMedia } from '../../../types/ipc'

export function initIPC (): void {
  ipcMain.handle('catalog:update', async (): Promise<CatalogUpdate.Response> => {
    try {
      await updateCatalog(CATALOG_PATH)
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  })

  ipcMain.handle('publication:media', async (_event, args: PublicationMedia.Args): Promise<PublicationMedia.Response> => {
    const db = new CatalogDatabase(CATALOG_PATH)
    const publication = await db.getPublication(args.date, DOWNLOAD_DIR, args.type)
    if (!publication) return null
    return {
      videos: await publication.getVideos(args.date),
      images: await publication.getImages(args.date)
    }
  })
}
