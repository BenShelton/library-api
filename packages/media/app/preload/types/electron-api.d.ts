type ElectronApi = {
  ipcRenderer: typeof import('electron').ipcRenderer
}

declare interface Window {
  electron: Readonly<ElectronApi>
}
