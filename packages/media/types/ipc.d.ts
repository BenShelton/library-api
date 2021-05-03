import { ImageDTO, VideoDTO } from '@library-api/core/types/dto'

interface MediaDisplayProps {
  src: string
  text: string
}

export type IPCImageDTO = ImageDTO & MediaDisplayProps

export type IPCVideoDTO = VideoDTO & MediaDisplayProps

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

export interface MediaImage extends Send {
  Args: {
    src: string
  }
}

export interface MediaVideo extends Send {
  Args: {
    src: string
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
