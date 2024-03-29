import Store from 'electron-store'

import { StoreDefinition } from '../types/store'

const devToolsWidth = import.meta.env.DEV ? 350 : 0

export const store = new Store<StoreDefinition>({
  defaults: {
    controlWindow: {
      x: 20,
      y: 20,
      width: 450 + devToolsWidth,
      height: 600
    },
    displayWindow: {
      x: 500 + devToolsWidth,
      y: 20,
      width: 800,
      height: 450
    },
    controlPanel: {
      showImages: 'display',
      languageId: 0
    }
  },
  migrations: {
    '0.7.0': store => {
      store.set('controlPanel', { showImages: 'display' })
    },
    '0.8.0': store => {
      store.set('controlPanel.languageId', 0)
    }
  }
})
