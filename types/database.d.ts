export type QueryParams = string | string[] | Record<string, string>

export interface PublicationRow {
  NameFragment: string
  PublicationTypeId: number
  PubMepsLanguageId: number
}
