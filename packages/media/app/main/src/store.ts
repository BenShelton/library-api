import Store from 'electron-store'

import { StoreDefinition } from 'shared/types/store'

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
    }
  }
})
