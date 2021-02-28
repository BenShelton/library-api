interface PublicationCtor {
  filename: string
}

/**
 * Provides methods for interacting with a downloaded publication.
 */
export class Publication {
  filename: string
  constructor ({ filename }: PublicationCtor) {
    this.filename = filename
  }

  async getMedia (date: string): Promise<string[]> {
    // TODO: Extract Media for that date
    // const mediaQuery = `
    //   SELECT D.ContextTitle, M.Caption, M.FilePath
    //   FROM Multimedia M
    //   JOIN DocumentMultimedia DM ON M.MultimediaId = DM.MultimediaId
    //   JOIN Document D ON DM.DocumentId = D.DocumentId
    //   WHERE D.Class IS 40`
    return []
  }
}
