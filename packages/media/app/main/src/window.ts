import { BrowserWindow } from 'electron'
import { URL } from 'url'
import { join } from 'path'
import { checkExists } from '@library-api/core'
import AspectRatioBrowserWindow from 'electron-aspect-ratio-browser-window'

import { store } from 'shared/src/store'

import { CATALOG_PATH } from './constants'

let controlWindow: BrowserWindow | null = null
let displayWindow: BrowserWindow | null = null

const pageUrl = (import.meta.env.VITE_DEV_SERVER_URL as string | undefined) ||
    new URL('../renderer/dist/index.html', 'file://' + __dirname).toString()
const preload = join(__dirname, '../../preload/dist/index.cjs')

function checkDevTools (window: BrowserWindow): void {
  if (!import.meta.env.DEV) return
  window.webContents.openDevTools({ mode: 'right' })
}

export async function createControlWindow (): Promise<BrowserWindow> {
  const storeKey = 'controlWindow'
  const windowSettings = store.get(storeKey)
  controlWindow = new BrowserWindow({
    ...windowSettings,
    title: 'Control Panel',
    show: true,
    webPreferences: {
      preload
    }
  })

  checkDevTools(controlWindow)
  controlWindow.on('close', () => {
    if (controlWindow) {
      const { x, y, width, height } = controlWindow.getBounds()
      store.set('controlWindow', { x, y, width, height })
    }
  })
  controlWindow.on('closed', () => {
    controlWindow = null
    displayWindow?.close()
  })

  const catalogExists = await checkExists(CATALOG_PATH)

  await controlWindow.loadURL(pageUrl + '#' + (catalogExists ? 'control-panel' : 'intro'))
  return controlWindow
}

export async function createDisplayWindow (): Promise<BrowserWindow> {
  const storeKey = 'displayWindow'
  const windowSettings = store.get(storeKey)
  displayWindow = new AspectRatioBrowserWindow({
    ...windowSettings,
    title: 'Display',
    show: true,
    // this prevents Zoom from showing this window as an option
    // alwaysOnTop: true,
    frame: false,
    // TODO: Enable this when fixed, see https://github.com/electron/electron/issues/28686
    // roundedCorners: false,
    webPreferences: {
      preload,
      // TODO: This is so we can use local video src in the renderer, there should be a better way
      webSecurity: false
    }
  })

  displayWindow.setAspectRatio(16 / 9)

  // checkDevTools(displayWindow)
  displayWindow.on('close', () => {
    if (displayWindow) {
      const { x, y, width, height } = displayWindow.getBounds()
      store.set('displayWindow', { x, y, width, height })
    }
  })
  displayWindow.on('closed', () => {
    displayWindow = null
  })

  await displayWindow.loadURL(pageUrl + '#display')
  return displayWindow
}

export async function createWindows (): Promise<[BrowserWindow, BrowserWindow]> {
  return Promise.all([
    createControlWindow(),
    createDisplayWindow()
  ])
}

async function getWindow (window: BrowserWindow | null, createFn: () => Promise<BrowserWindow>): Promise<BrowserWindow> {
  if (window && !window.isDestroyed()) {
    return window
  } else {
    return createFn()
  }
}

export async function getControlWindow (): Promise<BrowserWindow> {
  return getWindow(controlWindow, createControlWindow)
}

export async function getDisplayWindow (): Promise<BrowserWindow> {
  return getWindow(displayWindow, createDisplayWindow)
}

function refocusWindow (window: BrowserWindow): void {
  if (window.isMinimized()) window.restore()
  window.focus()
}

export async function refocusControlWindow (): Promise<BrowserWindow> {
  const window = await getControlWindow()
  refocusWindow(window)
  return window
}

export async function refocusDisplayWindow (): Promise<BrowserWindow> {
  const window = await getDisplayWindow()
  refocusWindow(window)
  return window
}

export async function refocusWindows (): Promise<[BrowserWindow, BrowserWindow]> {
  return Promise.all([
    refocusControlWindow(),
    refocusDisplayWindow()
  ])
}
