import { CategoryRowObj } from './media'

/**
 * The returned information when mapping raw image data.
 */
export interface ImageDTO {
  /**
   * A unique id not related to the database.
   */
  id: string
  /**
   * The filename of the image.
   */
  filename: string
  /**
   * The description in the database for this image.
   */
  caption: string
  /**
   * The path to access the image within the downloaded publication.
   */
  filePath: string
  /**
   * The internal category type. Known types are:
   * - 8 = Article image (Normally displayed)
   * - 9 = Article cover image (Not normally displayed)
   * - 15 = Publication cover image (Not normally displayed)
   */
  categoryType: number
  /**
   * The Meps Language Id of this image.
   */
  languageId: number
}

/**
 * The returned information when mapping raw video data.
 */
export interface VideoDTO {
  /**
   * A unique id not related to the database.
   */
  id: string
  /**
   * A filename. Purely informational.
   */
  filename: string
  /**
   * Affects how information is retrieved about this video (for example in getting details or the video stream)
   */
  type: 'pub' | 'doc'
  doc: string | number
  track: number
  /**
   * Either an issue date stored as a number, or `0` if irrelevant.
   *
   * @example
   * 20210500
   */
  issue: number
  /**
   * The Meps Language Id of this video.
   */
  languageId: number
}

/**
 * The returned information when mapping raw media details data.
 */
export interface MediaDetailsDTO {
  /**
   * A unique id not related to the database.
   */
  id: string
  filename: string
  caption: string
  /**
   * @deprecated Is no longer available since the switch to media catalogs.
   *
   * The width in pixels of the image.
   */
  width: number
  /**
   * @deprecated Is no longer available since the switch to media catalogs.
   *
   * The height in pixels of the image.
   */
  height: number
  /**
   * The URL of the image on the external media server.
   * Can be used as a `src` for an `img` element or downloaded.
   */
  url: string
}

/**
 * Information returned when requesting a language.
 */
export interface LanguageDTO {
  /**
   * The Meps Language Id.
   */
  id: number
  /**
   * The unique language Symbol.
   */
  symbol: string
  /**
   * The English name for the language, e.g. `Spanish` for Spanish.
   */
  englishName: string
  /**
   * The language name as displayed in that language, e.g. `español` for Spanish.
   */
  vernacularName: string
  /**
   * Indicates whether this is a sign language.
   * Sign languages do not use publications so are generally unsupported.
   */
  signLanguage: boolean
}

export interface MediaCatalogItemDTO {
  /**
   * An id that can be used to identify the same item in a different language's media catalog.
   */
  languageAgnosticId: string
  /**
   * A unique id for this item among all languages.
   */
  id: string
  /**
   * Either the `docID` or `pubSymbol` depending on the kind of media.
   */
  doc: number | string
  /**
   * The track number.
   */
  track: number
  /**
   * An optional issue, this is a similar format to other instances of `issue` just shorter.
   *
   * @example
   * // equivalent
   * video.issue: 20210500
   * detail.issueDate: '202105'
   *
   * // equivalent missing issue
   * video.issue: 0
   * detail.issueDate: undefined
   */
  issue?: string
  /**
   * Either `'VIDEO'` or `'AUDIO'`.
   */
  format: 'VIDEO' | 'AUDIO'
  /**
   * The `primaryCategory` which correlates to `key` in other areas.
   */
  key: string
  /**
   * The displayed title for this media.
   */
  title: string
  /**
   * Duration in seconds. Also includes millisecond precision.
   */
  duration: number
  /**
   * A URL of the highest quality image for this media.
   */
  image: string
  /**
   * A URL of the highest quality square image for this media.
   */
  imageSqr: string
}

/**
 * An object representation of the Media Catalog NDJSON file.
 */
export interface MediaCatalogDatabaseDTO {
  /**
   * The version of the catalog.
   */
  version: number
  /**
   * @todo Transform into something more usable.
   * @internal
   *
   * The raw category rows.
   */
  categories: CategoryRowObj[]
  /**
   * A list of media items in this catalog.
   */
  mediaItems: MediaCatalogItemDTO[]
}
