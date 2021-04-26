import { ImageRow, VideoRow } from '../../types/database'
import { ImageDTO, VideoDTO } from '../../types/dto'

interface PublicationMapperCtor {
  filename: string
}

export class PublicationMapper {
  filename: string
  constructor ({ filename }: PublicationMapperCtor) {
    this.filename = filename
  }

  private _createId (row: ImageRow | VideoRow): string {
    return `${this.filename}#${row.MultimediaId}`
  }

  public MapImage (image: ImageRow): ImageDTO {
    return {
      id: this._createId(image),
      filename: this.filename,
      caption: image.Caption,
      filePath: image.FilePath
    }
  }

  public MapImages (images: ImageRow[]): ImageDTO[] {
    return images.map(image => this.MapImage(image))
  }

  private _videoType (video: VideoRow): Pick<VideoDTO, 'type' | 'doc'> {
    if (video.KeySymbol) {
      return { type: 'pub', doc: video.KeySymbol }
    } else if (video.MepsDocumentId) {
      return { type: 'doc', doc: video.MepsDocumentId }
    }
    throw new Error('Unknown video type')
  }

  public MapVideo (video: VideoRow): VideoDTO {
    const { type, doc } = this._videoType(video)
    return {
      id: this._createId(video),
      filename: this.filename,
      type,
      doc,
      track: video.Track,
      issue: video.IssueTagNumber
    }
  }

  public MapVideos (videos: VideoRow[]): VideoDTO[] {
    return videos.map(video => this.MapVideo(video))
  }
}
