import { Router } from 'express'

import { media } from './media'
import { getCatalogRows } from 'src/database'
import { downloadCatalog } from 'src/download'

import { PublicationRow } from 'types/database'

const router = Router()

router.post('/update-catalog', async (req, res) => {
  // TODO: Check version of catalog & update only if necessary
  await downloadCatalog()
  res.json({ message: 'Updated' })
})

router.get('/monthly-publications', async (req, res) => {
  const query = `
    SELECT DISTINCT pa.NameFragment AS NameFragment, p.PublicationTypeId AS PublicationTypeId, p.MepsLanguageId AS PubMepsLanguageId
    FROM Publication AS p INNER JOIN PublicationAsset pa ON p.Id = pa.PublicationId INNER JOIN DatedText AS dt ON dt.PublicationId = p.Id
    WHERE dt.Start <= date('now') AND dt.End >= date('now') AND PubMepsLanguageId = 0`
  const results = await getCatalogRows<PublicationRow>(query)
  res.json(results)
})

router.use('/media', media)

// handle 404
router.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

export { router }
