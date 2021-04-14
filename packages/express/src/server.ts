import express from 'express'
import { createDir } from '@library-api/core'

import { updateCatalog } from './catalog'
import { router } from './router'
import { DOWNLOAD_DIR } from './constants'

const PORT = 3000

;(async () => {
  // setup system files
  await createDir(DOWNLOAD_DIR)
  await updateCatalog()

  const app = express()
  app.use(router)

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
})()
