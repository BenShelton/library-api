import { Router } from 'express'
import { CatalogDatabase } from '@library-api/core'

import { catalog } from './catalog'
import { download } from './download'
import { media } from './media'
import { CATALOG_PATH } from '../constants'

const router = Router()

router.get('/monthly-publications', async (req, res) => {
  const db = new CatalogDatabase(CATALOG_PATH)
  const results = db.getMonthlyPublications()
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
