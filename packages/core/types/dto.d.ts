export interface ImageDTO {
  id: string
  filename: string
  caption: string
  filePath: string
}

export interface VideoDTO {
  id: string
  filename: string
  type: 'pub' | 'doc'
  doc: string | number
  track: number
  issue: number
}

export interface MediaDetailsDTO {
  id: string
  filename: string
  caption: string
  width: number
  height: number
  url: string
}
