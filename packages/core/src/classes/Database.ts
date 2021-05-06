import { join } from 'path'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

import { Publication } from './Publication'
import { CatalogMapper } from './Mapper'
import { downloadPublication } from '../download'
import { checkExists } from '../utils'
import { PUBLICATION_TYPES } from '../constants'

import { MediaDetailsRow, PublicationRow, QueryParams } from '../../types/database'
import { MediaDetailsDTO, VideoDTO } from '../../types/dto'
import { PublicationType } from '../../types/publication'

export class Database {
  private _database: ReturnType<typeof open>

  constructor (filename: string) {
    this._database = open({
      filename,
      mode: sqlite3.OPEN_READONLY,
      driver: sqlite3.cached.Database
    })
  }

  async getRow<T> (query: string, params?: QueryParams): Promise<T | undefined> {
    const db = await this._database
    return db.get<T>(query, params)
  }

  async getRows<T> (query: string, params?: QueryParams): Promise<T[]> {
    const db = await this._database
    return db.all<T[]>(query, params)
  }
}

export class CatalogDatabase extends Database {
  private _mapper: CatalogMapper

  constructor (filename: string) {
    super(filename)
    this._mapper = new CatalogMapper()
  }

  async getMonthlyPublications (): Promise<PublicationRow[]> {
    const query = `
      SELECT DISTINCT pa.NameFragment AS NameFragment, p.PublicationTypeId AS PublicationTypeId, p.MepsLanguageId AS PubMepsLanguageId
      FROM Publication AS p INNER JOIN PublicationAsset pa ON p.Id = pa.PublicationId INNER JOIN DatedText AS dt ON dt.PublicationId = p.Id
      WHERE dt.Start <= date('now') AND dt.End >= date('now') AND PubMepsLanguageId = 0`
    return this.getRows<PublicationRow>(query)
  }

  async getPublication (date: string, downloadDir: string, type: PublicationType): Promise<Publication | null> {
    // TODO: Combine the queries below, they are almost identical
    const pubQuery = type === 'wt'
      ? `
      SELECT DISTINCT pa.NameFragment AS NameFragment, p.PublicationTypeId AS PublicationTypeId, p.MepsLanguageId AS PubMepsLanguageId
      FROM Publication AS p
      INNER JOIN PublicationAsset pa ON p.Id = pa.PublicationId
      INNER JOIN DatedText AS dt ON dt.PublicationId = p.Id
      WHERE dt.Start <= '${date}' AND dt.End >= '${date}' AND PubMepsLanguageId = 0 AND PublicationTypeId = ${PUBLICATION_TYPES.WATCHTOWER}`
      : `
      SELECT DISTINCT pa.NameFragment AS NameFragment, p.PublicationTypeId AS PublicationTypeId, p.MepsLanguageId AS PubMepsLanguageId
      FROM Publication AS p
      INNER JOIN PublicationAsset pa ON p.Id = pa.PublicationId
      INNER JOIN DatedText AS dt ON dt.PublicationId = p.Id
      WHERE dt.Start <= '${date}' AND dt.End >= '${date}' AND PubMepsLanguageId = 0 AND PublicationTypeId = ${PUBLICATION_TYPES.OCLM}`

    const result = await this.getRow<PublicationRow>(pubQuery)
    if (!result) return null

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const filename = result.NameFragment.split('/').pop()!.replace('.jwpub', '')
    const path = join(downloadDir, filename)
    const exists = await checkExists(path)
    if (!exists) {
      await downloadPublication(result.NameFragment, path)
    }
    return new Publication({ filename, dir: downloadDir, type })
  }

  async getMediaDetails (type: VideoDTO['type'], doc: string | number, issue: string | number, track: string | number): Promise<MediaDetailsDTO | null> {
    const query = type === 'doc'
      ? `
      SELECT DISTINCT ma.Title AS Title, ia.NameFragment AS NameFragment, ia.Width as Width, ia.Height as Height
      FROM ImageAsset AS ia
      INNER JOIN MediaAssetImageMap AS maim ON maim.ImageAssetId = ia.Id
      INNER JOIN MediaAsset AS ma ON ma.Id = maim.MediaAssetId
      WHERE ma.DocumentId = '${doc}' AND ma.Track = '${track}' AND ma.MepsLanguageId = 0`
      : `
      SELECT DISTINCT ma.Title AS Title, ia.NameFragment AS NameFragment, ia.Width as Width, ia.Height as Height
      FROM ImageAsset AS ia
      INNER JOIN MediaAssetImageMap AS maim ON maim.ImageAssetId = ia.Id
      INNER JOIN MediaAsset AS ma ON ma.Id = maim.MediaAssetId
      INNER JOIN Publication AS p ON p.Id = ma.PublicationId
      WHERE p.KeySymbol = '${doc}' AND p.IssueTagNumber = '${issue}' AND ma.Track = '${track}' AND ma.MepsLanguageId = 0`

    const results = await this.getRows<MediaDetailsRow>(query)
    if (!results.length) return null

    // there may be multiple, return the biggest
    const biggest = results.reduce((record, current) => {
      return current.Width > record.Width ? current : record
    })

    return this._mapper.MapMediaDetails(biggest)
  }
}
