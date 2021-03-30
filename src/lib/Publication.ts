import { join } from 'path'

import { PublicationMapper } from './Mapper'
import { openDatabase } from 'src/database'
import { DOWNLOAD_DIR, PUBLICATION_CLASSES } from 'src/constants'

import { ArticleRow, ImageRow, VideoRow } from 'types/database'
import { ImageDTO, VideoDTO } from 'types/dto'

interface PublicationCtor {
  filename: string
}

/**
 * Provides methods for interacting with a downloaded publication.
 */
export class Publication {
  filename: string
  path: string
  private _mapper: PublicationMapper

  constructor ({ filename }: PublicationCtor) {
    this.filename = filename
    this.path = join(DOWNLOAD_DIR, filename)
    this._mapper = new PublicationMapper({ filename })
  }

  private async getDatabase (): ReturnType<typeof openDatabase> {
    const dbPath = join(this.path, 'contents', this.filename + '.db')
    return openDatabase(dbPath)
  }

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
    const db = await this.getDatabase()
    const rows = await db.all<ImageRow[]>(query)
    return this._mapper.MapImages(rows)
  }

  async getVideos (date: string): Promise<VideoDTO[]> {
    const offsetDate = date.replace(/-/g, '')
    const query = `
      SELECT M.KeySymbol, M.Track, M.IssueTagNumber
      FROM Multimedia M
      JOIN DocumentMultimedia DM ON M.MultimediaId = DM.MultimediaId
      INNER JOIN DatedText AS DT ON DT.BeginParagraphOrdinal = DM.BeginParagraphOrdinal
      WHERE DM.DocumentId = 1 AND DT.FirstDateOffset <= '${offsetDate}' AND DT.LastDateOffset >= '${offsetDate}'`
    const db = await this.getDatabase()
    const rows = await db.all<VideoRow[]>(query)
    return this._mapper.MapVideos(rows)
  }

  async getArticles (): Promise<ArticleRow[]> {
    const query = `
      SELECT DocumentId, ContextTitle, Title
      FROM Document
      WHERE D.Class IS ${PUBLICATION_CLASSES.WATCHTOWER_ARTICLE}`
    const db = await this.getDatabase()
    const rows = await db.all<ArticleRow[]>(query)
    return rows
  }
}
