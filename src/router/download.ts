import { Router } from 'express'
import { join } from 'path'
import { createReadStream } from 'fs'

import { DOWNLOAD_DIR } from 'src/constants'
import { checkExists } from 'src/utils'
import { downloadVideoStream } from 'src/download'

import { Download } from 'types/api'

const router = Router()

router.get('/image', (req, res) => {
  const { publication, file } = req.query as Partial<Download.Image.QueryParams>
  if (!publication || !file) return res.status(401).json({ message: 'Publication and File are required' })
  const imagePath = join(DOWNLOAD_DIR, publication, 'contents', file)
  if (!checkExists(imagePath)) return res.status(404).json({ message: 'No Image Found' })
  return createReadStream(imagePath).pipe(res)
})

router.get('/video', async (req, res) => {
  const { publication, track, issue } = req.query as Partial<Download.Video.QueryParams>
  const trackNum = Number(track)
  const issueNum = Number(issue)
  if (!publication || isNaN(trackNum) || isNaN(issueNum)) return res.status(401).json({ message: 'Publication, Track and Issue are required' })
  const stream = await downloadVideoStream({ publication, track: trackNum, issue: issueNum })
  if (!stream) return res.status(404).json({ message: 'No Video Found' })
  return stream.pipe(res)
})

export const download = router
