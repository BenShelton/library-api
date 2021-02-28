import { join } from 'path'

import { openDatabase } from 'src/database'
import { DOWNLOAD_DIR, PUBLICATION_CLASSES } from 'src/constants'

import { ArticleRow, MediaRow } from 'types/database'

interface PublicationCtor {
  filename: string
}

/**
 * Provides methods for interacting with a downloaded publication.
 */
export class Publication {
  filename: string
  path: string

  constructor ({ filename }: PublicationCtor) {
    this.filename = filename
    this.path = join(DOWNLOAD_DIR, filename)
  }

  private async getDatabase (): ReturnType<typeof openDatabase> {
    const dbPath = join(this.path, 'contents', this.filename + '.db')
    return openDatabase(dbPath)
  }

  async getMedia (date: string): Promise<MediaRow[]> {
    // TODO: Extract Media for that date
    const query = `
      SELECT D.ContextTitle, M.Caption, M.FilePath
      FROM Multimedia M
      JOIN DocumentMultimedia DM ON M.MultimediaId = DM.MultimediaId
      JOIN Document D ON DM.DocumentId = D.DocumentId
      WHERE D.Class IS ${PUBLICATION_CLASSES.WATCHTOWER_ARTICLE}`
    const db = await this.getDatabase()
    const rows = await db.all<MediaRow[]>(query)
    return rows
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
