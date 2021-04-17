
import { Router } from 'express'
import { updateCatalog } from '@library-api/core'

import { CATALOG_PATH } from '../constants'

import { Catalog } from '../../types/api'

const router = Router()

router.post('/update', async (req, res) => {
  const updated = await updateCatalog(CATALOG_PATH)
  const message = updated ? 'Updated' : 'Already Up To Date'
  res.json({ message } as Catalog.Update.Response)
})

export const catalog = router
