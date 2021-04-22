import { join } from 'path'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

import { PublicationCtor, PublicationOCLM, PublicationWT } from './Publication'
import { downloadPublication } from '../download'
import { checkExists } from '../utils'
import { PUBLICATION_TYPES } from '../constants'

import { PublicationRow, QueryParams } from '../../types/database'

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
  private async _getPublicationCtor (row: PublicationRow, downloadDir: string): Promise<PublicationCtor> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const filename = row.NameFragment.split('/').pop()!.replace('.jwpub', '')
    const path = join(downloadDir, filename)
    const exists = await checkExists(path)
    if (!exists) {
      await downloadPublication(row.NameFragment, path)
    }
    return { filename, dir: downloadDir }
  }

  async getMonthlyPublications (): Promise<PublicationRow[]> {
    const query = `
      SELECT DISTINCT pa.NameFragment AS NameFragment, p.PublicationTypeId AS PublicationTypeId, p.MepsLanguageId AS PubMepsLanguageId
      FROM Publication AS p INNER JOIN PublicationAsset pa ON p.Id = pa.PublicationId INNER JOIN DatedText AS dt ON dt.PublicationId = p.Id
      WHERE dt.Start <= date('now') AND dt.End >= date('now') AND PubMepsLanguageId = 0`
    return this.getRows<PublicationRow>(query)
  }

  async getWT (date: string, downloadDir: string): Promise<PublicationWT | null> {
    const pubQuery = `
      SELECT DISTINCT pa.NameFragment AS NameFragment, p.PublicationTypeId AS PublicationTypeId, p.MepsLanguageId AS PubMepsLanguageId
      FROM Publication AS p
      INNER JOIN PublicationAsset pa ON p.Id = pa.PublicationId
      INNER JOIN DatedText AS dt ON dt.PublicationId = p.Id
      WHERE dt.Start <= '${date}' AND dt.End >= '${date}' AND PubMepsLanguageId = 0 AND PublicationTypeId = ${PUBLICATION_TYPES.WATCHTOWER}`
    const result = await this.getRow<PublicationRow>(pubQuery)
    if (!result) return null

    const ctor = await this._getPublicationCtor(result, downloadDir)
    return new PublicationWT(ctor)
  }

  async getOCLM (date: string, downloadDir: string): Promise<PublicationWT | null> {
    const pubQuery = `
      SELECT DISTINCT pa.NameFragment AS NameFragment, p.PublicationTypeId AS PublicationTypeId, p.MepsLanguageId AS PubMepsLanguageId
      FROM Publication AS p
      INNER JOIN PublicationAsset pa ON p.Id = pa.PublicationId
      INNER JOIN DatedText AS dt ON dt.PublicationId = p.Id
      WHERE dt.Start <= '${date}' AND dt.End >= '${date}' AND PubMepsLanguageId = 0 AND PublicationTypeId = ${PUBLICATION_TYPES.OCLM}`
    const result = await this.getRow<PublicationRow>(pubQuery)
    if (!result) return null

    const ctor = await this._getPublicationCtor(result, downloadDir)
    return new PublicationOCLM(ctor)
  }
}
