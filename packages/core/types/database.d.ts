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
 * The raw database columns when using an article query.
 */
export interface ArticleRow {
  DocumentId: number
  ContextTitle: string
  Title: string
}
