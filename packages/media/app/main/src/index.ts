import { app } from 'electron'
import { createDir } from '@library-api/core'

import { initIPC } from './ipc'
import { createWindows, refocusWindows } from './window'
import { DOWNLOAD_DIR } from './constants'

if (!app.requestSingleInstanceLock()) {
  app.quit()
}

app.on('activate', async () => {
  await refocusWindows()
})

app.on('second-instance', async () => {
  await refocusWindows()
})

app.on('window-all-closed', () => {
  app.quit()
})

;(async () => {
  // setup system files
  await createDir(DOWNLOAD_DIR)

  // setup everything else
  await app.whenReady()
  initIPC()
  await createWindows()
})()
