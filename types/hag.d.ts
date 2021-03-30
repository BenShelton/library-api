// These types may not be extensive but include at least what we require
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
