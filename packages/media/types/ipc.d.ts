import { ImageDTO, VideoDTO } from '@library-api/core/types/dto'

export interface IPCImageDTO extends ImageDTO {
  src: string
}

export namespace CatalogUpdate {
  export type Response = boolean
}

export namespace PublicationMedia {
  export interface Args {
    date: string
    type: 'wt' | 'oclm'
  }
  export type Response = { videos: VideoDTO[], images: IPCImageDTO[] } | null
}
