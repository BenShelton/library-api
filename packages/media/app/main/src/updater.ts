import log from 'electron-log'
import { autoUpdater } from 'electron-updater'

export function initUpdater (): void {
  autoUpdater.logger = log
  autoUpdater.checkForUpdatesAndNotify()
}
