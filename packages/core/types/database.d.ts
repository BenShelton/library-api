/**
 * The raw database columns when using a publication query.
 */
export interface PublicationRow {
  /**
   * The filename used on the storage servers and for the internal database of a publication.
   */
  NameFragment: string
  PublicationTypeId: number
  PubMepsLanguageId: number
}

/**
 * The raw database columns when using an image query.
 */
export interface ImageRow {
  MultimediaId: number
  ContextTitle: string
  Caption: string
  /**
   * The path within the contents directory of a publication to access this image.
   */
  FilePath: string
  CategoryType: number
}

/**
 * The raw database columns when using a media details query.
 */
export interface MediaDetailsRow {
  Id: number
  Title: string
  NameFragment: string
  Width: number
  Height: number
}

interface VideoRowBase {
  MultimediaId: number
  Track: number
  /**
   * Will be `0` if no issue exists.
   */
  IssueTagNumber: number
}

/**
 * The raw database columns when using a video query that returns a `pub` type video.
 */
export interface VideoRowPub extends VideoRowBase {
  KeySymbol: string
  MepsDocumentId: null
}

/**
 * The raw database columns when using a video query that returns a `doc` type video.
 */
export interface VideoRowDoc extends VideoRowBase {
  KeySymbol: null
  MepsDocumentId: number
}

/**
 * A union of the raw database columns when using a video query that returns any type video.
 */
export type VideoRow = VideoRowPub | VideoRowDoc

/**
 * Either an image or video row based on `DataType`.
 */
export type DocumentMediaRow =
  | (ImageRow & { DataType: 0 })
  | (VideoRow & { DataType: 2 | 3 })

/**
 * The raw database columns when using an article query.
 */
export interface ArticleRow {
  DocumentId: number
  ContextTitle: string
  Title: string
}

/**
 * The raw database columns when reading the JSON export of the `Language` table from `mepsunit.db`.
 *
 * The export can be found in `data/languages.json`.
 */
export interface LanguageRow {
  LanguageId: number
  Symbol: string
  EnglishName: string
  VernacularName: string
  IsoName: string
  IsoAlpha2Code: string
  IsoAlpha3Code: string
  PrimaryIetfCode: string
  PrimaryFallbackLanguageId: number
  IsSignLanguage: number
  ScriptId: number
  AssociatedTextLanguageId: number
}

/**
 * The raw database columns when using a relation publications query.
 */
interface RelatedPublicationRow {
  RefMepsDocumentId: number
  RefBeginParagraphOrdinal: number | null
  RefEndParagraphOrdinal: number | null
}
