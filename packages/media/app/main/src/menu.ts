import { app, Menu, shell } from 'electron'
import { MenuItemConstructorOptions } from 'electron/main'

const isMac = process.platform === 'darwin'

const template: MenuItemConstructorOptions[] = []

if (isMac) {
  template.push({
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  })
}
template.push(
  {
    label: 'File',
    submenu: [
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'togglefullscreen' }
    ]
  },
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Open Change Log',
        click: async () => {
          await shell.openExternal('https://github.com/BenShelton/library-api/blob/master/packages/media/CHANGELOG.md')
        }
      },
      {
        label: 'Open Documentation',
        click: async () => {
          await shell.openExternal('https://benshelton.github.io/library-api/media/')
        }
      }
    ]
  }
)

export function initMenu (): void {
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}
