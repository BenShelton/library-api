export type QueryParams = string | string[] | Record<string, string>

export interface PublicationRow {
  NameFragment: string
  PublicationTypeId: number
  PubMepsLanguageId: number
}

export interface MediaRow {
  ContextTitle: string
  Caption: string
  FilePath: string
}

export interface ArticleRow {
  DocumentId: number
  ContextTitle: string
  Title: string
}
