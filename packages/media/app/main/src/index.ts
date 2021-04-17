import { app } from 'electron'

import { createWindows, refocusWindows } from './window'

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
  await app.whenReady()
  await createWindows()
})()
