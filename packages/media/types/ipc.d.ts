import { ImageDTO, VideoDTO } from '@library-api/core/types/dto'

export namespace CatalogUpdate {
  export type Response = boolean
}

export namespace PublicationMedia {
  export interface Args {
    date: string
    type: 'wt' | 'oclm'
  }
  export type Response = { videos: VideoDTO[], images: ImageDTO[] } | null
}
