import { BrowserWindow } from 'electron'
import { URL } from 'url'
import { join } from 'path'
import { checkExists } from '@library-api/core'

import { CATALOG_PATH } from './constants'

let controlWindow: BrowserWindow | null = null
let displayWindow: BrowserWindow | null = null

export async function createControlWindow (): Promise<void> {
  controlWindow = new BrowserWindow({
    title: 'Library Media - Control Panel',
    show: true,
    width: import.meta.env.DEV ? 750 : 450,
    height: 600,
    x: 20,
    y: 20,
    webPreferences: {
      preload: join(__dirname, '../../preload/dist/index.cjs')
    }
  })

  if (import.meta.env.DEV) controlWindow.webContents.openDevTools()

  const pageUrl = (import.meta.env.VITE_DEV_SERVER_URL as string | undefined) ||
    new URL('../renderer/dist/index.html', 'file://' + __dirname).toString()

  const catalogExists = await checkExists(CATALOG_PATH)

  await controlWindow.loadURL(pageUrl + '#/control-panel/' + (catalogExists ? 'media' : 'intro'))
}

export async function createDisplayWindow (): Promise<void> {
  displayWindow = new BrowserWindow({
    title: 'Library Media - Display',
    show: true,
    alwaysOnTop: true,
    x: 500,
    y: 20,
    webPreferences: {
      preload: join(__dirname, '../../preload/dist/index.cjs')
    }
  })

  if (import.meta.env.DEV) displayWindow.webContents.openDevTools()

  const pageUrl = (import.meta.env.VITE_DEV_SERVER_URL as string | undefined) ||
    new URL('../renderer/dist/index.html', 'file://' + __dirname).toString()

  await displayWindow.loadURL(pageUrl + '#display')
}

export async function createWindows (): Promise<void> {
  await Promise.all([
    createControlWindow(),
    createDisplayWindow()
  ])
}

export async function refocusControlWindow (): Promise<void> {
  if (controlWindow && !controlWindow.isDestroyed()) {
    if (controlWindow.isMinimized()) controlWindow.restore()
    controlWindow.focus()
  } else {
    await createControlWindow()
  }
}

export async function refocusDisplayWindow (): Promise<void> {
  if (displayWindow && !displayWindow.isDestroyed()) {
    if (displayWindow.isMinimized()) displayWindow.restore()
    displayWindow.focus()
  } else {
    await createDisplayWindow()
  }
}

export async function refocusWindows (): Promise<void> {
  await Promise.all([
    refocusControlWindow(),
    refocusDisplayWindow()
  ])
}
