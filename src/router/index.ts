import { Router } from 'express'

import { getRows, updateDatabase } from 'src/database'
import { Publication } from 'types/database'

const router = Router()

router.post('/update-db', async (req, res) => {
  await updateDatabase()
  res.json({ status: 'Updated' })
})

router.get('/monthly-publications', async (req, res) => {
  const query = `
    SELECT DISTINCT pa.NameFragment AS NameFragment, p.PublicationTypeId AS PublicationTypeId, p.MepsLanguageId AS PubMepsLanguageId
    FROM Publication AS p INNER JOIN PublicationAsset pa ON p.Id = pa.PublicationId INNER JOIN DatedText AS dt ON dt.PublicationId = p.Id
    WHERE dt.Start <= date('now') AND dt.End >= date('now') AND PubMepsLanguageId = 0`
  const results = await getRows<Publication>(query)
  res.json(results)
})

// handle 404
router.use((req, res) => {
  res.status(404).json({ error: 'Not found' })
})

export { router }
