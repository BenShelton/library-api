import { ImageRow, VideoRow } from 'types/database'
import { ImageDTO, VideoDTO } from 'types/dto'

export class Mapper {
  public static MapImage (image: ImageRow): ImageDTO {
    return {
      caption: image.Caption,
      filePath: image.FilePath,
      // TODO: Endpoint for downloading directly from downloads
      url: ''
    }
  }

  public static MapImages (images: ImageRow[]): ImageDTO[] {
    return images.map(image => this.MapImage(image))
  }

  public static MapVideo (video: VideoRow): VideoDTO {
    return {
      // TODO: Endpoint for downloading directly from website
      url: ''
    }
  }

  public static MapVideos (videos: VideoRow[]): VideoDTO[] {
    return videos.map(video => this.MapVideo(video))
  }
}
