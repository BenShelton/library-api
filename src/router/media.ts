
import { Router } from 'express'

import { PUBLICATION_TYPES } from 'src/constants'
import { getCatalogRow } from 'src/database'
import { getPublication } from 'src/publication'
import { isValidDate } from 'src/utils'

import { PublicationRow } from 'types/database'
import { Media } from 'types/api'

const router = Router()

router.get('/watchtower', async (req, res) => {
  const { date } = req.query as Media.Watchtower.QueryParams
  if (!isValidDate(date)) return res.status(401).json({ message: 'Invalid Date' })

  const pubQuery = `
    SELECT DISTINCT pa.NameFragment AS NameFragment, p.PublicationTypeId AS PublicationTypeId, p.MepsLanguageId AS PubMepsLanguageId
    FROM Publication AS p
    INNER JOIN PublicationAsset pa ON p.Id = pa.PublicationId
    INNER JOIN DatedText AS dt ON dt.PublicationId = p.Id
    WHERE dt.Start <= '${date}' AND dt.End >= '${date}' AND PubMepsLanguageId = 0 AND PublicationTypeId = ${PUBLICATION_TYPES.WATCHTOWER}`
  const result = await getCatalogRow<PublicationRow>(pubQuery)
  if (!result) return res.status(404).json({ message: 'No Watchtower Found' })

  const publication = await getPublication(result)
  const images = await publication.getImages(date)
  const videos = await publication.getVideos(date)

  const response: Media.Watchtower.Response = {
    message: {
      images,
      videos
    }
  }

  return res.json(response)
})

export const media = router
