import { Menu } from 'electron'
import { MenuItemConstructorOptions } from 'electron/main'

const appName = 'Library Media'
const template: MenuItemConstructorOptions[] = [
  {
    label: appName,
    submenu: [
      { role: 'quit', label: `Quit ${appName}` }
    ]
  }
]

export function initMenu (): void {
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}
