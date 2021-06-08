import { join } from 'path'

import { PublicationMapper } from './Mapper'
import { Database } from './Database'
import { PUBLICATION_CLASSES } from '../constants'

import { ArticleRow, ImageRow, VideoRow } from '../../types/database'
import { ImageDTO, VideoDTO } from '../../types/dto'
import { PublicationCtor, PublicationType } from '../../types/publication'

// TODO: Combine the queries below as most are similar

/**
 * Provides methods for interacting with a downloaded publication.
 */
export class Publication {
  private _mapper: PublicationMapper
  private _database: Database
  filename: string
  path: string
  contentsPath: string
  type: PublicationType

  /**
   * @param {Object} ctor See {@link PublicationCtor}
   */
  constructor ({ filename, dir, type }: PublicationCtor) {
    this.filename = filename
    this.path = join(dir, filename)
    this.type = type
    this.contentsPath = join(this.path, 'contents')
    const dbPath = join(this.contentsPath, this.filename + '.db')
    this._database = new Database(dbPath)
    this._mapper = new PublicationMapper({ filename })
  }

  /**
   * Retrieves all the images for a particular date from the publication.
   * As a publication includes multiple articles this chooses the one for that day and only returns the relevant images.
   *
   * @todo Validate date.
   *
   * @param date The date to search for, must be formatted as `yyyy-mm-dd`.
   *
   * @returns An array of mapped images, the array will be empty if no images were found.
   */
  async getImages (date: string): Promise<ImageDTO[]> {
    const offsetDate = date.replace(/-/g, '')
    const query = this.type === 'wt'
      ? `
      SELECT D.ContextTitle, M.Caption, M.FilePath, M.MultimediaId, M.CategoryType
      FROM Multimedia M
      JOIN DocumentMultimedia DM ON M.MultimediaId = DM.MultimediaId
      INNER JOIN Document D ON DM.DocumentId = D.DocumentId
      INNER JOIN InternalLink IL ON IL.MepsDocumentId = D.MepsDocumentId
      INNER JOIN DocumentInternalLink AS DIL ON DIL.InternalLinkId = IL.InternalLinkId
      INNER JOIN DatedText AS DT ON DT.EndParagraphOrdinal = DIL.EndParagraphOrdinal
      WHERE DT.FirstDateOffset <= '${offsetDate}' AND DT.LastDateOffset >= '${offsetDate}'`
      : `
      SELECT DISTINCT D.ContextTitle, M.Caption, M.FilePath, M.MultimediaId, M.CategoryType
      FROM Multimedia M
      JOIN DocumentMultimedia DM ON M.MultimediaId = DM.MultimediaId
      INNER JOIN Document D ON DM.DocumentId = D.DocumentId
      INNER JOIN InternalLink IL ON IL.MepsDocumentId = D.MepsDocumentId
      INNER JOIN DocumentInternalLink AS DIL ON DIL.InternalLinkId = IL.InternalLinkId
      INNER JOIN DatedText AS DT ON DT.DocumentId = DIL.DocumentId
      WHERE DT.FirstDateOffset <= '${offsetDate}' AND DT.LastDateOffset >= '${offsetDate}'`
    const rows = await this._database.getRows<ImageRow>(query)
    return this._mapper.MapImages(rows)
  }

  /**
   * Retrieves all the videos for a particular date from the publication.
   * As a publication includes multiple articles this chooses the one for that day and only returns the relevant videos.
   *
   * @todo Validate date.
   *
   * @param date The date to search for, must be formatted as `yyyy-mm-dd`.
   *
   * @returns An array of mapped videos, the array will be empty if no videos were found.
   */
  async getVideos (date: string): Promise<VideoDTO[]> {
    const offsetDate = date.replace(/-/g, '')
    const query = this.type === 'wt'
      ? `
      SELECT M.KeySymbol, M.Track, M.IssueTagNumber, M.MepsDocumentId, M.MultimediaId
      FROM Multimedia M
      JOIN DocumentMultimedia DM ON M.MultimediaId = DM.MultimediaId
      INNER JOIN DatedText AS DT ON DT.BeginParagraphOrdinal = DM.BeginParagraphOrdinal
      WHERE DM.DocumentId = 1 AND DT.FirstDateOffset <= '${offsetDate}' AND DT.LastDateOffset >= '${offsetDate}'`
      : `
      SELECT M.KeySymbol, M.Track, M.IssueTagNumber, M.MepsDocumentId, M.MultimediaId
      FROM Multimedia M
      JOIN DocumentMultimedia DM ON M.MultimediaId = DM.MultimediaId
      INNER JOIN DatedText AS DT ON DT.DocumentId = DM.DocumentId
      WHERE M.DataType = 2 AND DT.FirstDateOffset <= '${offsetDate}' AND DT.LastDateOffset >= '${offsetDate}'`
    const rows = await this._database.getRows<VideoRow>(query)
    return this._mapper.MapVideos(rows)
  }

  /**
   * @deprecated This is not tested and may no longer work.
   *
   * Returns raw database rows for all the articles in this publication.
   */
  async getArticles (): Promise<ArticleRow[]> {
    const query = this.type === 'wt'
      ? `
      SELECT DocumentId, ContextTitle, Title
      FROM Document
      WHERE D.Class IS ${PUBLICATION_CLASSES.WATCHTOWER_ARTICLE}`
      : `
      SELECT DocumentId, ContextTitle, Title
      FROM Document
      WHERE D.Class IS ${PUBLICATION_CLASSES.OCLM_WEEK}`
    const rows = await this._database.getRows<ArticleRow>(query)
    return rows
  }
}
