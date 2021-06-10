import { contextBridge, ipcRenderer } from 'electron'
import { functions } from 'electron-log'
import { getLanguages } from '@library-api/core'

import { store } from 'shared/src/store'

import { ElectronApi, StoreApi } from 'shared/types/electron-api'

const electronApiKey: keyof Window = 'electron'
const electronApi: ElectronApi = {
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

const storeApiKey: keyof Window = 'store'
const storeApi: StoreApi = {
  get (key: string, defaultValue?: unknown) {
    return store.get(key, defaultValue)
  },
  set (key, value) {
    store.set(key, value)
  },
  watch (key, cb) {
    return store.onDidChange(key, cb)
  }
}

const logApiKey: keyof Window = 'log'

const languagesApiKey: keyof Window = 'languages'
const languages = getLanguages()

contextBridge.exposeInMainWorld(electronApiKey, electronApi)
contextBridge.exposeInMainWorld(storeApiKey, storeApi)
contextBridge.exposeInMainWorld(logApiKey, functions)
contextBridge.exposeInMainWorld(languagesApiKey, languages)
