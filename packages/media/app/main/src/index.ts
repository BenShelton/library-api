import { app } from 'electron'

import { initDirectories } from './directories'
import { initEvents } from './events'
import { initIPC } from './ipc'
import { initMenu } from './menu'
import { createWindows } from './window'

if (!app.requestSingleInstanceLock()) {
  app.quit()
}

(async () => {
  // configure app
  initMenu()
  initEvents()
  await initDirectories()

  // setup everything else
  await app.whenReady()
  initIPC()

  // start app
  await createWindows()
})()
