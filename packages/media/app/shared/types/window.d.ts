declare interface Window {
  electron: Readonly<import('./electron-api').ElectronApi>
  log: import('electron-log').LogFunctions
  store: import('./electron-api').StoreApi
}
