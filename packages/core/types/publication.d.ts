export type PublicationType = 'wt' | 'oclm'

export interface PublicationCtor {
  filename: string
  dir: string
  type: PublicationType
}
