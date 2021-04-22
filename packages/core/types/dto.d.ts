export interface ImageDTO {
  filename: string
  caption: string
  filePath: string
}

export interface VideoDTO {
  filename: string
  type: 'pub' | 'doc'
  id: string | number
  track: number
  issue: number
}
