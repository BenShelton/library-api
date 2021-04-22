import { ipcMain } from 'electron'
import { updateCatalog } from '@library-api/core'

import { CATALOG_PATH } from './constants'

import { CatalogUpdate } from '../../../types/ipc'

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
}
