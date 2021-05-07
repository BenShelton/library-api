import { app } from 'electron'

import { refocusWindows } from './window'

export function initEvents (): void {
  app.on('activate', async () => {
    await refocusWindows()
  })

  app.on('second-instance', async () => {
    await refocusWindows()
  })

  app.on('window-all-closed', () => {
    app.quit()
  })
}
