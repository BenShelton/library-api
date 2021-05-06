import { Router } from 'express'
import { isValidDate, CatalogDatabase } from '@library-api/core'
import { ImageDTO, VideoDTO } from '@library-api/core/types/dto'

import { CATALOG_PATH, DOWNLOAD_DIR } from '../constants'

import { Media, ImageDTOWithURL, VideoDTOWithURL } from '../../types/api'

const router = Router()

function addImageURL (image: ImageDTO): ImageDTOWithURL {
  return {
    ...image,
    url: `/download/image?publication=${image.filename}&file=${image.filePath}`
  }
}

function addVideoURL (video: VideoDTO): VideoDTOWithURL {
  const urlSearchParams = new URLSearchParams({
    type: video.type,
    doc: String(video.doc),
    track: String(video.track),
    issue: String(video.issue)
  })
  return {
    ...video,
    url: '/download/video?' + urlSearchParams.toString()
  }
}

router.get('/watchtower', async (req, res) => {
  const { date } = req.query as Partial<Media.Watchtower.QueryParams>
  if (!isValidDate(date)) return res.status(401).json({ message: 'Invalid Date' })

  const db = new CatalogDatabase(CATALOG_PATH)
  const publication = await db.getPublication(date, DOWNLOAD_DIR, 'wt')
  if (!publication) return res.status(404).json({ message: 'No Watchtower Found' })

  const images = (await publication.getImages(date))
    .map(image => addImageURL(image))
  const videos = (await publication.getVideos(date))
    .map(video => addVideoURL(video))

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
  const publication = await db.getPublication(date, DOWNLOAD_DIR, 'oclm')
  if (!publication) return res.status(404).json({ message: 'No OCLM Workbook Found' })

  const images = (await publication.getImages(date))
    .map(image => addImageURL(image))
  const videos = (await publication.getVideos(date))
    .map(video => addVideoURL(video))

  const response: Media.OCLM.Response = {
    message: {
      images,
      videos
    }
  }

  return res.json(response)
})

router.get('/details', async (req, res) => {
  const { type, doc, issue, track } = req.query as Partial<Media.Details.QueryParams>
  if (type !== 'doc' && type !== 'pub') {
    return res.status(401).json({ message: 'Type must be one of "doc" or "pub"' })
  }
  if (doc === undefined || issue === undefined || track === undefined) {
    return res.status(401).json({ message: 'Doc, Issue & Track are required' })
  }

  const db = new CatalogDatabase(CATALOG_PATH)
  const details = await db.getMediaDetails({ type, doc, issue, track })
  if (!details) return res.status(404).json({ message: 'No Media Details Found' })

  const response: Media.Details.Response = {
    message: {
      details
    }
  }

  return res.json(response)
})

export const media = router
