import { contextBridge, ipcRenderer } from 'electron'
import { functions } from 'electron-log'

const apiKey: keyof Window = 'electron'
const api: ElectronApi = {
  invoke (channel, args) {
    return ipcRenderer.invoke(channel, args)
  },
  send (channel, args) {
    ipcRenderer.send(channel, args)
  },
  on (channel, cb) {
    ipcRenderer.on(channel, (_event, args) => cb(args))
  }
}

contextBridge.exposeInMainWorld(apiKey, api)
contextBridge.exposeInMainWorld('log', functions)
