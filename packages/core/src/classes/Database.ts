import { join } from 'path'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

import { Publication } from './Publication'
import { downloadPublication } from '../download'
import { checkExists } from '../utils'
import { PUBLICATION_TYPES } from '../constants'

import { PublicationRow, QueryParams } from '../../types/database'
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
}
