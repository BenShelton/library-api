import { ImageDTO, MediaDetailsDTO, VideoDTO } from '@library-api/core/types/dto'

interface MediaDisplayProps {
  src: string
  text: string
  downloaded: boolean
}

export type IPCImageDTO = ImageDTO & MediaDisplayProps

export type IPCVideoDTO = VideoDTO & MediaDisplayProps & { details: MediaDetailsDTO }

interface Invoke {
  Args?: unknown
  Response: unknown
}

interface Send {
  Args?: unknown
}

export interface CatalogUpdate extends Invoke {
  Response: boolean
}

export interface PublicationMedia extends Invoke {
  Args: {
    date: string
    type: 'wt' | 'oclm'
  }
  Response: { videos: IPCVideoDTO[], images: IPCImageDTO[] } | null
}

export interface DownloadVideo extends Invoke {
  Args: {
    type: VideoDTO['type']
    doc: string | number
    track: number
    issue: number
    details: MediaDetailsDTO
  }
  Response: void
}

export interface CacheClear extends Invoke {
  Args: void
  Response: void
}

export interface MediaImage extends Send {
  Args: {
    src: string
  }
}

export interface MediaVideo extends Send {
  Args: {
    details: MediaDetailsDTO
  }
}

export interface MediaClear extends Send {
  Args?: never
}

export interface DisplayImage extends Send {
  Args: {
    src: string
  }
}

export interface DisplayVideo extends Send {
  Args: {
    src: string
  }
}

export interface DisplayClear extends Send {
  Args?: never
}
