import fs from 'fs'
import express from 'express'

import { updateDatabase } from './database'
import { DOWNLOAD_DIR } from './constants'

const PORT = 3000

const app = express()

// setup system files
fs.mkdirSync(DOWNLOAD_DIR, { recursive: true })

app.post('/update-db', async (req, res) => {
  await updateDatabase()
  res.send('Updated')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
