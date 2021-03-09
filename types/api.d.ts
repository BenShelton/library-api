import { MediaRow } from './database'

export namespace Catalog {
  export namespace Update {
    export interface Response {
      message: 'Updated' | 'Already Up To Date'
    }
  }
}

export namespace Media {
  export namespace Watchtower {
    export interface QueryParams {
      date?: string
    }
    export interface Response {
      message: MediaRow[]
    }
  }
}
