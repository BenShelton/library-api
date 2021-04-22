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

  public MapImage (image: ImageRow): ImageDTO {
    return {
      filename: this.filename,
      caption: image.Caption,
      filePath: image.FilePath
    }
  }

  public MapImages (images: ImageRow[]): ImageDTO[] {
    return images.map(image => this.MapImage(image))
  }

  private _videoType (video: VideoRow): Pick<VideoDTO, 'type' | 'id'> {
    if (video.KeySymbol) {
      return { type: 'pub', id: video.KeySymbol }
    } else if (video.MepsDocumentId) {
      return { type: 'doc', id: video.MepsDocumentId }
    }
    throw new Error('Unknown video type')
  }

  public MapVideo (video: VideoRow): VideoDTO {
    const { type, id } = this._videoType(video)
    return {
      filename: this.filename,
      type,
      id,
      track: video.Track,
      issue: video.IssueTagNumber
    }
  }

  public MapVideos (videos: VideoRow[]): VideoDTO[] {
    return videos.map(video => this.MapVideo(video))
  }
}
