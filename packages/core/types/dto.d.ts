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
  filename: string
  /**
   * Affects how information is retrieved about this video (for example in getting details or the video stream)
   */
  type: 'pub' | 'doc'
  doc: string | number
  track: number
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
   * The width in pixels of the image.
   */
  width: number
  /**
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
