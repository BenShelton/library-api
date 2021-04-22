import { Router } from 'express'
import { isValidDate, CatalogDatabase } from '@library-api/core'

import { CATALOG_PATH, DOWNLOAD_DIR } from '../constants'

import { Media } from '../../types/api'

const router = Router()

router.get('/watchtower', async (req, res) => {
  const { date } = req.query as Partial<Media.Watchtower.QueryParams>
  if (!isValidDate(date)) return res.status(401).json({ message: 'Invalid Date' })

  const db = new CatalogDatabase(CATALOG_PATH)
  const publication = await db.getWT(date, DOWNLOAD_DIR)
  if (!publication) return res.status(404).json({ message: 'No Watchtower Found' })

  const images = await publication.getImages(date)
  const videos = await publication.getVideos(date)

  const response: Media.Watchtower.Response = {
    message: {
      images,
      videos
    }
  }

  return res.json(response)
})

router.get('/oclm', async (req, res) => {
  const { date } = req.query as Partial<Media.OCLM.QueryParams>
  if (!isValidDate(date)) return res.status(401).json({ message: 'Invalid Date' })

  const db = new CatalogDatabase(CATALOG_PATH)
  const publication = await db.getOCLM(date, DOWNLOAD_DIR)
  if (!publication) return res.status(404).json({ message: 'No OCLM Workbook Found' })

  const images = await publication.getImages(date)
  const videos = await publication.getVideos(date)

  const response: Media.OCLM.Response = {
    message: {
      images,
      videos
    }
  }

  return res.json(response)
})

export const media = router
