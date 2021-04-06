import { ImageRow, VideoRow } from '../types/database'
import { ImageDTO, VideoDTO } from '../types/dto'

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
      caption: image.Caption,
      filePath: image.FilePath,
      url: `/download/image?publication=${this.filename}&file=${image.FilePath}`
    }
  }

  public MapImages (images: ImageRow[]): ImageDTO[] {
    return images.map(image => this.MapImage(image))
  }

  public MapVideo (video: VideoRow): VideoDTO {
    return {
      publication: video.KeySymbol,
      track: video.Track,
      issue: video.IssueTagNumber,
      url: `/download/video?publication=${video.KeySymbol}&track=${video.Track}&issue=${video.IssueTagNumber}`
    }
  }

  public MapVideos (videos: VideoRow[]): VideoDTO[] {
    return videos.map(video => this.MapVideo(video))
  }
}
