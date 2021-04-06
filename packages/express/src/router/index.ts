import { Router } from 'express'
import { getCatalogRows } from '@library-api/core'
import { PublicationRow } from '@library-api/core/types/database'

import { catalog } from './catalog'
import { download } from './download'
import { media } from './media'
import { CATALOG_PATH } from 'src/constants'

const router = Router()

router.get('/monthly-publications', async (req, res) => {
  const query = `
    SELECT DISTINCT pa.NameFragment AS NameFragment, p.PublicationTypeId AS PublicationTypeId, p.MepsLanguageId AS PubMepsLanguageId
    FROM Publication AS p INNER JOIN PublicationAsset pa ON p.Id = pa.PublicationId INNER JOIN DatedText AS dt ON dt.PublicationId = p.Id
    WHERE dt.Start <= date('now') AND dt.End >= date('now') AND PubMepsLanguageId = 0`
  const results = await getCatalogRows<PublicationRow>(CATALOG_PATH, query)
  res.json(results)
})

router.use('/catalog', catalog)
router.use('/download', download)
router.use('/media', media)

// handle 404
router.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

export { router }
