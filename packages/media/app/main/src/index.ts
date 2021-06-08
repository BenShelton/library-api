import { app } from 'electron'

import { initDirectories } from './directories'
import { initEvents } from './events'
import { initIPC } from './ipc'
import { initLogger } from './logger'
import { initMenu } from './menu'
import { initUpdater } from './updater'
import { createWindows } from './window'

(async () => {
  // only allow a single instance
  if (!app.requestSingleInstanceLock()) {
    app.quit()
    return
  }

  // configure app
  initLogger()
  initMenu()
  initEvents()
  await initDirectories()

  // setup everything else
  await app.whenReady()
  initIPC()
  initUpdater()

  // start app
  await createWindows()
})()
