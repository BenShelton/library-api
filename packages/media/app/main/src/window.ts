import { BrowserWindow } from 'electron'
import { URL } from 'url'
import { join } from 'path'
import { checkExists } from '@library-api/core'

import { CATALOG_PATH } from './constants'

let controlWindow: BrowserWindow | null = null
let displayWindow: BrowserWindow | null = null

const devToolsWidth = import.meta.env.DEV ? 350 : 0

function checkDevTools (window: BrowserWindow): void {
  if (!import.meta.env.DEV) return
  window.webContents.openDevTools({ mode: 'right' })
}

export async function createControlWindow (): Promise<BrowserWindow> {
  controlWindow = new BrowserWindow({
    title: 'Library Media - Control Panel',
    show: true,
    width: 450 + devToolsWidth,
    height: 600,
    x: 20,
    y: 20,
    webPreferences: {
      preload: join(__dirname, '../../preload/dist/index.cjs')
    }
  })

  checkDevTools(controlWindow)

  const pageUrl = (import.meta.env.VITE_DEV_SERVER_URL as string | undefined) ||
    new URL('../renderer/dist/index.html', 'file://' + __dirname).toString()

  const catalogExists = await checkExists(CATALOG_PATH)

  await controlWindow.loadURL(pageUrl + '#/control-panel/' + (catalogExists ? 'media' : 'intro'))
  return controlWindow
}

export async function createDisplayWindow (): Promise<BrowserWindow> {
  displayWindow = new BrowserWindow({
    title: 'Library Media - Display',
    show: true,
    alwaysOnTop: true,
    x: 500 + devToolsWidth,
    y: 20,
    webPreferences: {
      preload: join(__dirname, '../../preload/dist/index.cjs')
    }
  })

  checkDevTools(displayWindow)

  const pageUrl = (import.meta.env.VITE_DEV_SERVER_URL as string | undefined) ||
    new URL('../renderer/dist/index.html', 'file://' + __dirname).toString()

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
