import { Menu, shell } from 'electron'
import { MenuItemConstructorOptions } from 'electron/main'

const appName = 'Library Media'
const template: MenuItemConstructorOptions[] = [
  {
    label: appName,
    submenu: [
      { role: 'about', label: `About ${appName}` },
      { role: 'quit', label: 'Quit' }
    ]
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'Open Documentation',
        click: async () => {
          await shell.openExternal('https://benshelton.github.io/library-api/media/')
        }
      }
    ]
  }
]

export function initMenu (): void {
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}
