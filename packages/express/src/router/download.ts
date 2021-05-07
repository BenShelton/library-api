import { Router } from 'express'
import { join } from 'path'
import { createReadStream } from 'fs'
import { checkExists, getVideoStream } from '@library-api/core'

import { DOWNLOAD_DIR } from '../constants'

import { Download } from '../../types/api'

const router = Router()

router.get('/image', (req, res) => {
  const { publication, file } = req.query as Partial<Download.Image.QueryParams>
  if (!publication || !file) return res.status(401).json({ message: 'Publication and File are required' })
  const imagePath = join(DOWNLOAD_DIR, publication, 'contents', file)
  if (!checkExists(imagePath)) return res.status(404).json({ message: 'No Image Found' })
  return createReadStream(imagePath).pipe(res)
})

router.get('/video', async (req, res) => {
  const { type, doc, track, issue } = req.query as Partial<Download.Video.QueryParams>
  if (!type || !doc || !track || !issue) return res.status(401).json({ message: 'Type, Doc, Track and Issue are required' })
  const stream = await getVideoStream({ type, doc, track, issue })
  if (!stream) return res.status(404).json({ message: 'No Video Found' })
  return stream.pipe(res)
})

export const download = router
