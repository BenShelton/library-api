/**
 * One of the returned links when requesting a video from the external Media API endpoint.
 *
 * These types may not be extensive but include what we need.
 */
interface MediaPubLink {
  title: string
  file: {
    url: string
    stream: string
    modifiedDatetime: string
    checksum: string
  }
  filesize: number
  trackImage: {
    url: string
    modifiedDatetime: string
    checksum: null
  }
  markers: null
  label: '240p' | '480p' | '720p'
  track: number
  hasTrack: boolean
  pub: string
  docid: number
  booknum: number
  mimetype: string
  edition: string
  editionDescr: string
  format: string
  formatDescr: string
  specialty: string
  specialtyDescr: string
  subtitled: boolean
  frameWidth: number
  frameHeight: number
  frameRate: number
  duration: number
  bitRate: number
}

/**
 * @todo This only defines the English interface.
 *
 * The returned data when requesting a video from the external Media API endpoint.
 */
export interface GetMediaPubLinks {
  pubName: string
  parentPubName: string
  booknum: null
  pub: string
  issue: string
  formattedDate: string[]
  track: number
  specialty: string
  pubImage: {
    url: string
    modifiedDatetime: string
    checksum: null
  }
  languages: {
    E: {
      name: string
      direction: string
      locale: string
    }
  }
  files: {
    E: {
      MP4: MediaPubLink[]
    }
  }
}
