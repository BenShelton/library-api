import { join } from 'path'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

import { Publication } from './Publication'
import { CatalogMapper } from './Mapper'
import { downloadPublication } from '../download'
import { checkExists } from '../utils'
import { PUBLICATION_TYPES, SONG_PUBLICATION } from '../constants'

import { MediaDetailsRow, PublicationRow } from '../../types/database'
import { MediaDetailsDTO, VideoDTO } from '../../types/dto'
import { PublicationType } from '../../types/publication'

type QueryParams = string | string[] | Record<string, string>

/**
 * Wraps a `sqlite3` database and provides abstracted methods to access database information.
 */
export class Database {
  private _database: ReturnType<typeof open>

  /**
   * @param path The path to the database.
   */
  constructor (path: string) {
    this._database = open({
      filename: path,
      mode: sqlite3.OPEN_READONLY,
      driver: sqlite3.cached.Database
    })
  }

  /**
   * Returns the first matched row of the provided query.
   * The return type must be provided in TS as the row structure is unknown.
   *
   * @param query The SQL query to run.
   * @param params Query params to use.
   *
   * @returns A single row if it exists, or `undefined` if not found.
   *
   * @example
   * ```ts
   * const db = new Database(path)
   * const row = await db.getRow<PublicationRow>(query)
   * ```
   */
  async getRow<T> (query: string, params?: QueryParams): Promise<T | undefined> {
    const db = await this._database
    return db.get<T>(query, params)
  }

  /**
   * Returns all matched rows of the provided query.
   * The return type of a single row must be provided in TS as the row structure is unknown.
   *
   * @param query The SQL query to run.
   * @param params Query params to use.
   *
   * @returns An array of matched rows. If none were found an empty array will be returned.
   *
   * @example
   * ```ts
   * const db = new Database(path)
   * const rows = await db.getRows<PublicationRow>(query)
   * ```
   */
  async getRows<T> (query: string, params?: QueryParams): Promise<T[]> {
    const db = await this._database
    return db.all<T[]>(query, params)
  }
}

/**
 * Provides extra methods for running preset queries against a catalog.
 */
export class CatalogDatabase extends Database {
  private _mapper: CatalogMapper

  /**
   * @param path The path to the database.
   */
  constructor (path: string) {
    super(path)
    this._mapper = new CatalogMapper()
  }

  /**
   * @deprecated This has a hardcoded date and returns unmapped data, use {@link getPublication} instead.
   *
   * @returns All the publications for the current month based on today.
   */
  async getMonthlyPublications (): Promise<PublicationRow[]> {
    const query = `
      SELECT DISTINCT pa.NameFragment AS NameFragment, p.PublicationTypeId AS PublicationTypeId, p.MepsLanguageId AS PubMepsLanguageId
      FROM Publication AS p INNER JOIN PublicationAsset pa ON p.Id = pa.PublicationId INNER JOIN DatedText AS dt ON dt.PublicationId = p.Id
      WHERE dt.Start <= date('now') AND dt.End >= date('now') AND PubMepsLanguageId = 0`
    return this.getRows<PublicationRow>(query)
  }

  /**
   * Searches the database for the specified publication based on a date.
   * If that publication is not yet downloaded, will download it to the specified directory.
   *
   * @todo Validate date.
   *
   * @param date The date to search for, must be formatted as `yyyy-mm-dd`.
   * @param downloadDir The directory to download the publication to if it does not exist.
   * @param type See {@link PublicationType}
   * @param languageId The Meps Language Id to search for. Defaults to `0` (English).
   *
   * @returns A {@link Publication} class to help access the downloaded publication, or `null` if not found.
   */
  async getPublication (date: string, downloadDir: string, type: PublicationType, languageId = 0): Promise<Publication | null> {
    const pubTypeId = type === 'wt'
      ? PUBLICATION_TYPES.WATCHTOWER
      : PUBLICATION_TYPES.OCLM
    const pubQuery = `
      SELECT DISTINCT pa.NameFragment AS NameFragment, p.PublicationTypeId AS PublicationTypeId, p.MepsLanguageId AS PubMepsLanguageId
      FROM Publication AS p
      INNER JOIN PublicationAsset pa ON p.Id = pa.PublicationId
      INNER JOIN DatedText AS dt ON dt.PublicationId = p.Id
      WHERE dt.Start <= '${date}' AND dt.End >= '${date}' AND PubMepsLanguageId = ${languageId} AND PublicationTypeId = ${pubTypeId}`

    const result = await this.getRow<PublicationRow>(pubQuery)
    if (!result) return null

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const filename = result.NameFragment.split('/').pop()!.replace('.jwpub', '')
    const path = join(downloadDir, filename)
    const exists = await checkExists(path)
    if (!exists) {
      await downloadPublication(result.NameFragment, path)
    }
    return new Publication({ filename, dir: downloadDir, type, languageId })
  }

  /**
   * @deprecated These details are no longer found in the main catalog.
   * Use {@link getMediaCatalog} instead and use the `getMediaDetails` method on the returned class.
   *
   * Retrieves information about a video from the main catalog.
   * The video details found within a publication's database contain limited information about the video itself.
   * Most of this information is contained within the main catalog but mapped completely differently.
   *
   * This method allows passing in the video returned from the publication to get more details from the catalog.
   * The returned image will be of the highest quality available (biggest size).
   *
   * @param video Pass in a returned {@link VideoDTO} from another method, see example.
   *
   * @returns MediaDetails if they exist, `null` if they are not found.
   *
   * @example
   * ```ts
   * const video = publication.getVideo(...)
   * const details = await db.getMediaDetails(video)
   * ```
   */
  async getMediaDetails ({ type, doc, issue, track, languageId = 0 }: { type: VideoDTO['type'], doc: string | number, issue: string | number, track: string | number, languageId?: number }): Promise<MediaDetailsDTO | null> {
    const query = `
      SELECT DISTINCT ma.Title AS Title, ma.Id As Id, ia.NameFragment AS NameFragment, ia.Width as Width, ia.Height as Height
      FROM ImageAsset AS ia
      INNER JOIN MediaAssetImageMap AS maim ON maim.ImageAssetId = ia.Id
      INNER JOIN MediaAsset AS ma ON ma.Id = maim.MediaAssetId
      ${type === 'doc'
        ? `WHERE ma.DocumentId = '${doc}'`
        : `
        INNER JOIN Publication AS p ON p.Id = ma.PublicationId
        WHERE p.KeySymbol = '${doc}' AND p.IssueTagNumber = '${issue}'`
      }
      AND ma.Track = '${track}' AND ma.MepsLanguageId = ${languageId}`

    const results = await this.getRows<MediaDetailsRow>(query)
    if (!results.length) return null

    // there may be multiple, return the biggest
    const biggest = results.reduce((record, current) => {
      return current.Width > record.Width ? current : record
    })

    return this._mapper.MapMediaDetails(biggest)
  }

  /**
   * @deprecated These details may be removed from the main catalog in future.
   * Use {@link getMediaCatalog} instead and use the `getSongDetails` method on the returned class.
   *
   * Retrieves the video MediaDetails of a chosen song number.
   *
   * @param track The number of the track.
   * @param languageId The Meps Language Id to search for. Defaults to `0` (English).
   *
   * @returns MediaDetails if they exist, `null` if they are not found.
   */
  async getSongDetails (track: number, languageId = 0): Promise<MediaDetailsDTO | null> {
    return this.getMediaDetails({ ...SONG_PUBLICATION, track, languageId })
  }
}
