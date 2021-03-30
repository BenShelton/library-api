import { ImageDTO, VideoDTO } from './dto'

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
    export interface Response {
      message: {
        images: ImageDTO[]
        videos: VideoDTO[]
      }
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
}
