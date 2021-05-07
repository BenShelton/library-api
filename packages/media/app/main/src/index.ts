import { app } from 'electron'
import { createDir } from '@library-api/core'

import { initEvents } from './events'
import { initIPC } from './ipc'
import { initMenu } from './menu'
import { createWindows } from './window'
import { DOWNLOAD_DIR, VIDEO_DIR } from './constants'

if (!app.requestSingleInstanceLock()) {
  app.quit()
}

(async () => {
  // configure app
  initMenu()
  initEvents()

  // setup system files
  await createDir(DOWNLOAD_DIR)
  await createDir(VIDEO_DIR)

  // setup everything else
  await app.whenReady()
  initIPC()

  // start app
  await createWindows()
})()
