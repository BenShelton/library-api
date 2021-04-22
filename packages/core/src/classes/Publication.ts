import { join } from 'path'

import { PublicationMapper } from './Mapper'
import { Database } from './Database'
import { PUBLICATION_CLASSES } from '../constants'

import { ArticleRow, ImageRow, VideoRow } from '../../types/database'
import { ImageDTO, VideoDTO } from '../../types/dto'

export interface PublicationCtor {
  filename: string
  dir: string
}

/**
 * Provides methods for interacting with a downloaded publication.
 */
abstract class BasePublication {
  filename: string
  path: string
  database: Database
  _mapper: PublicationMapper

  constructor ({ filename, dir }: PublicationCtor) {
    this.filename = filename
    this.path = join(dir, filename)
    const dbPath = join(this.path, 'contents', this.filename + '.db')
    this.database = new Database(dbPath)
    this._mapper = new PublicationMapper({ filename })
  }
}

interface Publication extends BasePublication {
  getImages (date: string): Promise<ImageDTO[]>
  getVideos (date: string): Promise<VideoDTO[]>
  getArticles (): Promise<ArticleRow[]>
}

export class PublicationWT extends BasePublication implements Publication {
  async getImages (date: string): Promise<ImageDTO[]> {
    const offsetDate = date.replace(/-/g, '')
    const query = `
      SELECT D.ContextTitle, M.Caption, M.FilePath
      FROM Multimedia M
      JOIN DocumentMultimedia DM ON M.MultimediaId = DM.MultimediaId
      INNER JOIN Document D ON DM.DocumentId = D.DocumentId
      INNER JOIN InternalLink IL ON IL.MepsDocumentId = D.MepsDocumentId
      INNER JOIN DocumentInternalLink AS DIL ON DIL.InternalLinkId = IL.InternalLinkId
      INNER JOIN DatedText AS DT ON DT.EndParagraphOrdinal = DIL.EndParagraphOrdinal
      WHERE DT.FirstDateOffset <= '${offsetDate}' AND DT.LastDateOffset >= '${offsetDate}'`
    const rows = await this.database.getRows<ImageRow>(query)
    return this._mapper.MapImages(rows)
  }

  async getVideos (date: string): Promise<VideoDTO[]> {
    const offsetDate = date.replace(/-/g, '')
    const query = `
      SELECT M.KeySymbol, M.Track, M.IssueTagNumber, M.MepsDocumentId
      FROM Multimedia M
      JOIN DocumentMultimedia DM ON M.MultimediaId = DM.MultimediaId
      INNER JOIN DatedText AS DT ON DT.BeginParagraphOrdinal = DM.BeginParagraphOrdinal
      WHERE DM.DocumentId = 1 AND DT.FirstDateOffset <= '${offsetDate}' AND DT.LastDateOffset >= '${offsetDate}'`
    const rows = await this.database.getRows<VideoRow>(query)
    return this._mapper.MapVideos(rows)
  }

  async getArticles (): Promise<ArticleRow[]> {
    const query = `
      SELECT DocumentId, ContextTitle, Title
      FROM Document
      WHERE D.Class IS ${PUBLICATION_CLASSES.WATCHTOWER_ARTICLE}`
    const rows = await this.database.getRows<ArticleRow>(query)
    return rows
  }
}

export class PublicationOCLM extends BasePublication implements Publication {
  async getImages (date: string): Promise<ImageDTO[]> {
    const offsetDate = date.replace(/-/g, '')
    const query = `
      SELECT DISTINCT D.ContextTitle, M.Caption, M.FilePath
      FROM Multimedia M
      JOIN DocumentMultimedia DM ON M.MultimediaId = DM.MultimediaId
      INNER JOIN Document D ON DM.DocumentId = D.DocumentId
      INNER JOIN InternalLink IL ON IL.MepsDocumentId = D.MepsDocumentId
      INNER JOIN DocumentInternalLink AS DIL ON DIL.InternalLinkId = IL.InternalLinkId
      INNER JOIN DatedText AS DT ON DT.DocumentId = DIL.DocumentId
      WHERE DT.FirstDateOffset <= '${offsetDate}' AND DT.LastDateOffset >= '${offsetDate}'`
    const rows = await this.database.getRows<ImageRow>(query)
    return this._mapper.MapImages(rows)
  }

  async getVideos (date: string): Promise<VideoDTO[]> {
    const offsetDate = date.replace(/-/g, '')
    const query = `
      SELECT M.KeySymbol, M.Track, M.IssueTagNumber, M.MepsDocumentId
      FROM Multimedia M
      JOIN DocumentMultimedia DM ON M.MultimediaId = DM.MultimediaId
      INNER JOIN DatedText AS DT ON DT.DocumentId = DM.DocumentId
      WHERE M.DataType = 2 AND DT.FirstDateOffset <= '${offsetDate}' AND DT.LastDateOffset >= '${offsetDate}'`
    const rows = await this.database.getRows<VideoRow>(query)
    return this._mapper.MapVideos(rows)
  }

  async getArticles (): Promise<ArticleRow[]> {
    const query = `
      SELECT DocumentId, ContextTitle, Title
      FROM Document
      WHERE D.Class IS ${PUBLICATION_CLASSES.OCLM_WEEK}`
    const rows = await this.database.getRows<ArticleRow>(query)
    return rows
  }
}
