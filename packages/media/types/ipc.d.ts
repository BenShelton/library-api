import { ImageDTO, VideoDTO } from '@library-api/core/types/dto'

export interface IPCImageDTO extends ImageDTO {
  src: string
}

interface Invoke {
  Args?: unknown
  Response: unknown
}

interface Send {
  Args: unknown
}

export interface CatalogUpdate extends Invoke {
  Response: boolean
}

export interface PublicationMedia extends Invoke {
  Args: {
    date: string
    type: 'wt' | 'oclm'
  }
  Response: { videos: VideoDTO[], images: IPCImageDTO[] } | null
}

export interface MediaImage extends Send {
  Args: {
    src: string
  }
}

export interface DisplayImage extends Send {
  Args: {
    src: string
  }
}
