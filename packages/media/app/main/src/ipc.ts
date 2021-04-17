import { ipcMain } from 'electron'
import { updateCatalog } from '@library-api/core'

import { CATALOG_PATH } from './constants'

export function initIPC (): void {
  ipcMain.handle('catalog:update', async () => {
    try {
      await updateCatalog(CATALOG_PATH)
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  })
}
