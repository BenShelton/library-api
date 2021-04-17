import { contextBridge, ipcRenderer } from 'electron'

const apiKey: keyof Window = 'electron'
const api: ElectronApi = {
  ipcRenderer
}

contextBridge.exposeInMainWorld(apiKey, api)
