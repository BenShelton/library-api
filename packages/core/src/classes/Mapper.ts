import { ImageRow, MediaDetailsRow, VideoRow } from '../../types/database'
import { ImageDTO, MediaDetailsDTO, VideoDTO } from '../../types/dto'

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

export class CatalogMapper {
  /**
   * Figures out the asset url based on the filename
   *
   * There are 2 main structures:
   *
   * - /assets/m/jwb-080/univ/art/jwb-080_univ_lsr_03_md.jpg
   *   - From filename `jwb-080_univ_lsr_03_md.jpg`
   *   - This is the standard structure,
   *     we can extract the first 2 parts of the filename for the fragments between `m` and `art`
   *
   * - /assets/m/mwbv/univ/202105/art/mwbv_univ_202105_ls_02_md.jpg
   *   - From filename `mwbv_univ_202105_ls_02_md.jpg`
   *   - This is similar but has an extra fragment before `art`,
   *     thankfully this fragment also appears within the name so we can extract it
   */
  private _detailUrl (filename: string): string {
    let url = 'https://assetsnffrgf-a.akamaihd.net/assets/m/'
    const [pubFragment, langFragment, extraFragment] = filename.split('_')
    url += `${pubFragment}/${langFragment}/`
    if (!extraFragment.startsWith('l')) url += `${extraFragment}/`
    url += `art/${filename}`
    return url
  }

  public MapMediaDetails (details: MediaDetailsRow): MediaDetailsDTO {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const filename = details.NameFragment.split('/').pop()!
    return {
      id: `media#${details.Id}`,
      filename,
      caption: details.Title,
      height: details.Height,
      width: details.Width,
      url: this._detailUrl(filename)
    }
  }
}
