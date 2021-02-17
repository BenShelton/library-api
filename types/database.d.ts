export type QueryParams = string | string[] | Record<string, string>

export interface Publication {
  NameFragment: string
  PublicationTypeId: number
  PubMepsLanguageId: number
}
