import fs from 'fs'
import express from 'express'

import { router } from './router'
import { DOWNLOAD_DIR } from './constants'

const PORT = 3000

// setup system files
fs.mkdirSync(DOWNLOAD_DIR, { recursive: true })

const app = express()
app.use(router)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
