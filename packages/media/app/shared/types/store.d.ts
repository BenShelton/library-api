interface WindowPosition {
  x: number
  y: number
  width: number
  height: number
}

export interface StoreDefinition {
  controlWindow: WindowPosition
  displayWindow: WindowPosition
  controlPanel: {
    showImages: 'all' | 'display'
    languageId: number
  }
}
