
import { join } from 'path'
import { Router } from 'express'

import { DOWNLOAD_DIR, PUBLICATION_TYPES, PUBLICATION_URL } from 'src/constants'
import { getRow } from 'src/database'
import { checkExists } from 'src/utils'
import { downloadFile } from 'src/download'

import { Publication } from 'types/database'

const router = Router()

router.get('/watchtower', async (req, res) => {
  const { date } = req.query
  if (!date) return res.status(401).json({ message: 'Invalid Date' })

  const pubQuery = `
    SELECT DISTINCT pa.NameFragment AS NameFragment, p.PublicationTypeId AS PublicationTypeId, p.MepsLanguageId AS PubMepsLanguageId
    FROM Publication AS p INNER JOIN PublicationAsset pa ON p.Id = pa.PublicationId INNER JOIN DatedText AS dt ON dt.PublicationId = p.Id
    WHERE dt.Start <= '${date}' AND dt.End >= '${date}' AND PubMepsLanguageId = 0 AND PublicationTypeId = ${PUBLICATION_TYPES.WATCHTOWER}`
  const result = await getRow<Publication>(pubQuery)
  if (!result) return res.status(404).json({ message: 'No Watchtower Found' })

  const filename = join(DOWNLOAD_DIR, result.NameFragment.split('/').pop()!)
  const exists = await checkExists(filename)
  if (!exists) {
    await downloadFile(PUBLICATION_URL + result.NameFragment, filename)
  }

  // TODO: Extract Media for that date
  // const mediaQuery = `
  //   SELECT D.ContextTitle, M.Caption, M.FilePath
  //   FROM Multimedia M
  //   JOIN DocumentMultimedia DM ON M.MultimediaId = DM.MultimediaId
  //   JOIN Document D ON DM.DocumentId = D.DocumentId
  //   WHERE D.Class IS 40`

  return res.json({ message: 'TBD' })
})

export const media = router
