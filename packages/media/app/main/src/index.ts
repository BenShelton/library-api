import { app } from 'electron'
import { autoUpdater } from 'electron-updater'

import { initDirectories } from './directories'
import { initEvents } from './events'
import { initIPC } from './ipc'
import { initLogger } from './logger'
import { initMenu } from './menu'
import { createWindows } from './window'

(async () => {
  // only allow a single instance
  if (!app.requestSingleInstanceLock()) {
    app.quit()
    return
  }

  // check for updates
  autoUpdater.checkForUpdatesAndNotify()

  // configure app
  initLogger()
  initMenu()
  initEvents()
  await initDirectories()

  // setup everything else
  await app.whenReady()
  initIPC()

  // start app
  await createWindows()
})()
