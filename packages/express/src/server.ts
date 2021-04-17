import express from 'express'
import { createDir, updateCatalog } from '@library-api/core'

import { router } from './router'
import { CATALOG_PATH, DOWNLOAD_DIR } from './constants'

const PORT = 3000

;(async () => {
  // setup system files
  await createDir(DOWNLOAD_DIR)
  await updateCatalog(CATALOG_PATH)

  const app = express()
  app.use(router)

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
})()
