import { ImageDTO, MediaDetailsDTO, VideoDTO } from '@library-api/core/types/dto'

export interface ImageDTOWithURL extends ImageDTO {
  url: string
}

export interface VideoDTOWithURL extends VideoDTO {
  url: string
}

export namespace Catalog {
  export namespace Update {
    export interface Response {
      message: 'Updated' | 'Already Up To Date'
    }
  }
}

export namespace Download {
  export namespace Image {
    export interface QueryParams {
      publication: string
      file: string
    }
  }
  export namespace Video {
    export interface QueryParams {
      type: VideoDTO['type']
      doc: string
      track: string
      issue: string
      languageId?: string
    }
  }
}

export namespace Media {
  export namespace Watchtower {
    export interface QueryParams {
      date: string
      languageId?: string
    }
    export interface Response {
      message: {
        images: ImageDTOWithURL[]
        videos: VideoDTOWithURL[]
      }
    }
  }
  export namespace OCLM {
    export interface QueryParams {
      date: string
      languageId?: string
    }
    export interface Response {
      message: {
        images: ImageDTOWithURL[]
        videos: VideoDTOWithURL[]
      }
    }
  }
  export namespace Details {
    export interface QueryParams {
      type: VideoDTO['type']
      doc: string | number
      issue: number
      track: number
      languageId?: string
    }
    export interface Response {
      message: {
        details: MediaDetailsDTO
      }
    }
  }
}
