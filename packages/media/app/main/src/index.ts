import { app, BrowserWindow } from 'electron'
import { URL } from 'url'

if (!app.requestSingleInstanceLock()) {
  app.quit()
}

let controlWindow: BrowserWindow | null = null
let displayWindow: BrowserWindow | null = null

async function createControlWindow (): Promise<void> {
  controlWindow = new BrowserWindow({
    title: 'Library Media - Control Panel',
    show: true
  })

  const pageUrl = (import.meta.env.VITE_DEV_SERVER_URL as string | undefined) ||
    new URL('../renderer/dist/index.html', 'file://' + __dirname).toString()

  await controlWindow.loadURL(pageUrl + '#control-panel')
}

async function createDisplayWindow (): Promise<void> {
  displayWindow = new BrowserWindow({
    title: 'Library Media - Display',
    show: true,
    alwaysOnTop: true
  })

  const pageUrl = (import.meta.env.VITE_DEV_SERVER_URL as string | undefined) ||
    new URL('../renderer/dist/index.html', 'file://' + __dirname).toString()

  await displayWindow.loadURL(pageUrl + '#display')
}

async function refocusWindows (): Promise<void> {
  if (controlWindow && !controlWindow.isDestroyed()) {
    if (controlWindow.isMinimized()) controlWindow.restore()
    controlWindow.focus()
  } else {
    await createControlWindow()
  }

  if (displayWindow && !displayWindow.isDestroyed()) {
    if (displayWindow.isMinimized()) displayWindow.restore()
    displayWindow.focus()
  } else {
    await createDisplayWindow()
  }
}

app.on('activate', async () => {
  await refocusWindows()
})

app.on('second-instance', async () => {
  await refocusWindows()
})

app.on('window-all-closed', () => {
  app.quit()
})

;(async () => {
  await app.whenReady()
  await createControlWindow()
  await createDisplayWindow()
})()
