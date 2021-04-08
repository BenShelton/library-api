export interface ImageDTO {
  caption: string
  filePath: string
  url: string
}

export interface VideoDTO {
  type: 'pub' | 'doc'
  id: string | number
  track: number
  issue: number
  url: string
}
