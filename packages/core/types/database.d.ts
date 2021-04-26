export type QueryParams = string | string[] | Record<string, string>

export interface PublicationRow {
  NameFragment: string
  PublicationTypeId: number
  PubMepsLanguageId: number
}

export interface ImageRow {
  MultimediaId: number
  ContextTitle: string
  Caption: string
  FilePath: string
}

interface VideoRowBase {
  MultimediaId: number
  Track: number
  IssueTagNumber: number
}

export interface VideoRowPub extends VideoRowBase {
  KeySymbol: string
  MepsDocumentId: null
}

export interface VideoRowDoc extends VideoRowBase {
  KeySymbol: null
  MepsDocumentId: number
}

export type VideoRow = VideoRowPub | VideoRowDoc

export interface ArticleRow {
  DocumentId: number
  ContextTitle: string
  Title: string
}
