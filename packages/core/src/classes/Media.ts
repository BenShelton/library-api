import { MediaCatalogMapper } from './Mapper'
import { readLines } from '../utils'

import { MediaDetailsDTO, MediaCatalogDatabaseDTO } from '../../types/dto'
import { MediaCatalogCtor, MediaCatalogRow } from '../../types/media'

export class MediaCatalog {
  private _database: MediaCatalogDatabaseDTO | null = null
  private _mapper: MediaCatalogMapper
  path: string
  languageId: number

  /**
   * @param {Object} ctor See {@link MediaCatalogCtor}
   */
  constructor ({ path, languageId }: MediaCatalogCtor) {
    this.path = path
    this.languageId = languageId
    this._mapper = new MediaCatalogMapper()
  }

  /**
   * Loads the media catalog from the NDJSON file and transforms it into an object that is easier to work with
   *
   * Will cache the loaded database so subsequent calls will be quicker.
   */
  async getDatabase (): Promise<MediaCatalogDatabaseDTO> {
    if (this._database) return this._database
    const newDatabase: MediaCatalogDatabaseDTO = {
      version: 0,
      categories: [],
      mediaItems: []
    }
    await readLines(this.path, line => {
      const json: MediaCatalogRow = JSON.parse(line)
      switch (json.type) {
        case 'catalogSchemaVersion':
          newDatabase.version = json.o
          break
        case 'category':
          newDatabase.categories.push(json.o)
          break
        case 'media-item': {
          const details = json.o
          const { lsr, sqr } = details.images
          newDatabase.mediaItems.push({
            languageAgnosticId: details.languageAgnosticNaturalKey,
            id: details.naturalKey,
            doc: 'docID' in details.keyParts ? details.keyParts.docID : details.keyParts.pubSymbol,
            issue: 'issueDate' in details.keyParts ? details.keyParts.issueDate : undefined,
            track: details.keyParts.track,
            format: details.keyParts.formatCode,
            key: details.primaryCategory,
            title: details.title,
            duration: details.duration,
            image: lsr ? (lsr.xl || lsr.lg || lsr.md || lsr.sm || lsr.xs) : '',
            imageSqr: sqr ? (sqr.xl || sqr.lg || sqr.md || sqr.sm || sqr.xs) : ''
          })
        }
      }
    })
    this._database = newDatabase
    return newDatabase
  }

  /**
   * Retrieves information about a video from the media catalog.
   * The video details found within a publication's database contain limited information about the video itself.
   * Most of this information is contained within a separate file which is divided per language.
   *
   * This method allows passing in the video returned from the publication to get more details from the media catalog.
   * The returned image will be of the highest quality available (biggest size).
   *
   * @param video Pass in a returned {@link VideoDTO} from another method, see example.
   *
   * @returns MediaDetails if they exist, `null` if they are not found.
   *
   * @example
   * ```ts
   * const video = publication.getVideo(...)
   * const details = await mediaCatalog.getMediaDetails(video)
   * ```
   */
  async getMediaDetails ({ doc, issue, track }: { doc: string | number, issue: string | number, track: string | number }): Promise<MediaDetailsDTO | null> {
    const db = await this.getDatabase()
    const issueNum = Number(issue || 0)
    const detailIssue = issueNum ? String(issueNum).substr(0, 6) : null
    const details = db.mediaItems.find(item => {
      if (detailIssue) {
        if (detailIssue !== item.issue) return false
      }
      if (typeof item.doc === 'number') {
        if (item.doc !== +doc) return false
      } else {
        if (item.doc !== String(doc)) return false
      }
      if (item.track !== +track) return false

      return true
    })
    if (!details) return null
    return this._mapper.MapMediaDetails(details)
  }
}
