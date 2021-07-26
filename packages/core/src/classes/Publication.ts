import { join } from 'path'

import { PublicationMapper } from './Mapper'
import { Database } from './Database'
import { PUBLICATION_CLASSES } from '../constants'

import { ArticleRow, DocumentMediaRow, ImageRow, RelatedPublicationRow, VideoRow } from '../../types/database'
import { ImageDTO, RelatedPublicationDTO, VideoDTO } from '../../types/dto'
import { PublicationCtor, PublicationType } from '../../types/publication'

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
  languageId: number

  /**
   * @param {Object} ctor See {@link PublicationCtor}
   */
  constructor ({ filename, dir, type, languageId = 0 }: PublicationCtor) {
    this.filename = filename
    this.path = join(dir, filename)
    this.type = type
    this.languageId = languageId
    this.contentsPath = join(this.path, 'contents')
    const dbPath = join(this.contentsPath, this.filename + '.db')
    this._database = new Database(dbPath)
    this._mapper = new PublicationMapper({ filename, languageId, contentsPath: this.contentsPath })
  }

  private _datedPublicationsQuery (date: string, documentJoin: string): string {
    const offsetDate = date.replace(/-/g, '')
    return `
      INNER JOIN Document D ON ${documentJoin}
      JOIN InternalLink IL ON IL.MepsDocumentId = D.MepsDocumentId ${this.type !== 'wt' ? 'OR D.DocumentId = DIL.DocumentId' : ''}
      INNER JOIN DocumentInternalLink AS DIL ON DIL.InternalLinkId = IL.InternalLinkId
      INNER JOIN DatedText AS DT ON ${
        this.type === 'wt'
          ? 'DT.EndParagraphOrdinal = DIL.EndParagraphOrdinal'
          : 'DT.DocumentId = DIL.DocumentId'
      }
      WHERE DT.FirstDateOffset <= '${offsetDate}' AND DT.LastDateOffset >= '${offsetDate}'`
  }

  /**
   * Retrieves all the related publications.
   *
   * @param date The date to search for, must be formatted as `yyyy-mm-dd`.
   *
   * @returns An array of mapped related publications, the array will be empty if none are found.
   */
  async getRelatedPublications (date: string): Promise<RelatedPublicationDTO[]> {
    const query = `
      SELECT DISTINCT E.RefMepsDocumentId, E.RefBeginParagraphOrdinal, E.RefEndParagraphOrdinal
      FROM Extract E
      INNER JOIN DocumentExtract DE ON DE.ExtractId = E.ExtractId
      ${this._datedPublicationsQuery(date, 'D.DocumentId = DE.DocumentId')}`
    const rows = await this._database.getRows<RelatedPublicationRow>(query)
    return this._mapper.MapRelatedPublications(rows)
  }

  /**
   * @todo Also support begin and end paragraphs.
   *
   * Retrieves all the media for specified document (article) within a publication.
   *
   * @param date The date to search for, must be formatted as `yyyy-mm-dd`.
   *
   * @returns An array of mapped related publications, the array will be empty if none are found.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getMediaByDocumentId ({ id, beginParagraph, endParagraph }: { id: number, beginParagraph?: number | null, endParagraph?: number | null }): Promise<{ images: ImageDTO[], videos: VideoDTO[] }> {
    const query = `
      SELECT DISTINCT D.ContextTitle, M.Caption, M.FilePath, M.MultimediaId, M.CategoryType, M.KeySymbol, M.Track, M.IssueTagNumber, M.MepsDocumentId, M.MultimediaId, M.DataType
      FROM Multimedia M
      INNER JOIN DocumentMultimedia DM ON DM.MultimediaId = M.MultimediaId
      INNER JOIN Document D on D.DocumentId = DM.DocumentId
      WHERE D.MepsDocumentId = ${id}`
    const rows = await this._database.getRows<DocumentMediaRow>(query)
    const images = this._mapper.MapImages(rows.filter(r => r.DataType === 0) as ImageRow[])
    const videos = this._mapper.MapVideos(rows.filter(r => r.DataType !== 0) as VideoRow[])
    return {
      images,
      videos
    }
  }

  /**
   * Retrieves all the images for a particular date stored within the publication itself.
   * As a publication includes multiple articles this chooses the one for that day and only returns the relevant images.
   *
   * If you also want images from related articles use {@link getRelatedPublications}.
   *
   * @todo Validate date.
   *
   * @param date The date to search for, must be formatted as `yyyy-mm-dd`.
   *
   * @returns An array of mapped images, the array will be empty if no images were found.
   */
  async getImages (date: string): Promise<ImageDTO[]> {
    const query = `
      SELECT DISTINCT D.ContextTitle, M.Caption, M.FilePath, M.MultimediaId, M.CategoryType
      FROM Multimedia M
      JOIN DocumentMultimedia DM ON M.MultimediaId = DM.MultimediaId
      ${this._datedPublicationsQuery(date, 'D.DocumentId = DM.DocumentId')}
      AND M.DataType = 0`
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
    const documentJoin = `D.DocumentId = DM.DocumentId ${this.type === 'wt' ? 'OR DT.BeginParagraphOrdinal = DM.BeginParagraphOrdinal' : ''}`
    const query = `
      SELECT DISTINCT M.KeySymbol, M.Track, M.IssueTagNumber, M.MepsDocumentId, M.MultimediaId
      FROM Multimedia M
      JOIN DocumentMultimedia DM ON M.MultimediaId = DM.MultimediaId
      ${this._datedPublicationsQuery(date, documentJoin)}
      AND M.DataType = 2`
    const rows = await this._database.getRows<VideoRow>(query)
    return this._mapper.MapVideos(rows)
  }

  /**
   * @deprecated This is not tested and may no longer work.
   *
   * Returns raw database rows for all the articles in this publication.
   */
  async getArticles (): Promise<ArticleRow[]> {
    const articleClass = this.type === 'wt'
      ? PUBLICATION_CLASSES.WATCHTOWER_ARTICLE
      : PUBLICATION_CLASSES.OCLM_WEEK
    const query = `
      SELECT DocumentId, ContextTitle, Title
      FROM Document
      WHERE D.Class IS ${articleClass}`
    const rows = await this._database.getRows<ArticleRow>(query)
    return rows
  }
}
