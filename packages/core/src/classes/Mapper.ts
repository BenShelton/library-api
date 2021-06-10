import { ImageRow, LanguageRow, MediaDetailsRow, VideoRow } from '../../types/database'
import { ImageDTO, LanguageDTO, MediaDetailsDTO, VideoDTO } from '../../types/dto'

interface PublicationMapperCtor {
  filename: string
  languageId?: number
}

/**
 * Maps raw Publication database rows to more accessible DTOs.
 */
export class PublicationMapper {
  filename: string
  languageId: number
  constructor ({ filename, languageId = 0 }: PublicationMapperCtor) {
    this.filename = filename
    this.languageId = languageId
  }

  private _createId (row: ImageRow | VideoRow): string {
    return `${this.filename}#${row.MultimediaId}`
  }

  /**
   * Maps a raw Image database row to a Image DTO.
   *
   * @param image The database row.
   */
  public MapImage (image: ImageRow): ImageDTO {
    return {
      id: this._createId(image),
      filename: this.filename,
      caption: image.Caption,
      filePath: image.FilePath,
      categoryType: image.CategoryType,
      languageId: this.languageId
    }
  }

  /**
   * Maps multiple Image database rows using {@link MapImage} and returns the mapped array.
   *
   * @param images The database rows.
   */
  public MapImages (images: ImageRow[]): ImageDTO[] {
    return images.map(image => this.MapImage(image))
  }

  /**
   * Figures out the `type` of a row based on the structure. See `type` of {@link VideoDTO}.
   *
   * @param video The database row.
   */
  private _videoType (video: VideoRow): Pick<VideoDTO, 'type' | 'doc'> {
    if (video.KeySymbol) {
      return { type: 'pub', doc: video.KeySymbol }
    } else if (video.MepsDocumentId) {
      return { type: 'doc', doc: video.MepsDocumentId }
    }
    throw new Error('Unknown video type')
  }

  /**
   * Maps a raw Video database row to a Video DTO.
   *
   * @param video The database row.
   */
  public MapVideo (video: VideoRow): VideoDTO {
    const { type, doc } = this._videoType(video)
    return {
      id: this._createId(video),
      filename: this.filename,
      type,
      doc,
      track: video.Track,
      issue: video.IssueTagNumber,
      languageId: this.languageId
    }
  }

  /**
   * Maps multiple Video database rows using {@link MapVideo} and returns the mapped array.
   *
   * @param videos The database rows.
   */
  public MapVideos (videos: VideoRow[]): VideoDTO[] {
    return videos.map(video => this.MapVideo(video))
  }
}

/**
 * Maps raw Catalog database rows to more accessible DTOs.
 */
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

  /**
   * Maps a raw Media Details database row to a Media Details DTO.
   *
   * @param details The database row.
   */
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

/**
 * Maps raw language data to more accessible DTOs.
 */
export class LanguageMapper {
  /**
   * Maps a raw Language data row to a Language DTO.
   *
   * @param language The data row.
   */
  public MapLanguage (language: LanguageRow): LanguageDTO {
    return {
      id: language.LanguageId,
      englishName: language.EnglishName,
      vernacularName: language.VernacularName,
      symbol: language.Symbol,
      signLanguage: language.IsSignLanguage === 1
    }
  }

  /**
   * Maps multiple Language data rows using {@link MapLanguage} and returns the mapped array.
   *
   * @param languages The data rows.
   */
  public MapLanguages (languages: LanguageRow[]): LanguageDTO[] {
    return languages.map(language => this.MapLanguage(language))
  }
}
