import { ImageDTO, VideoDTO } from '@library-api/core/types/dto'

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
      publication: string
      track: string
      issue: string
    }
  }
}

export namespace Media {
  export namespace Watchtower {
    export interface QueryParams {
      date: string
    }
    export interface Response {
      message: {
        images: ImageDTO[]
        videos: VideoDTO[]
      }
    }
  }
  export namespace OCLM {
    export interface QueryParams {
      date: string
    }
    export interface Response {
      message: {
        images: ImageDTO[]
        videos: VideoDTO[]
      }
    }
  }
}
