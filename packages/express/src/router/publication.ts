import { Router } from 'express'
import { isValidDate, CatalogDatabase } from '@library-api/core'
import { ImageDTO, VideoDTO } from '@library-api/core/types/dto'

import { CATALOG_PATH, DOWNLOAD_DIR } from '../constants'

import { Publication } from '../../types/api'

const router = Router()

router.get<Publication.RelatedPublications.Params>('/:type/related-publications', async (req, res) => {
  const { type } = req.params
  if (type !== 'wt' && type !== 'oclm') return res.status(401).json({ message: 'Route should be /wt/related-publications or /oclm/related-publications' })
  const { date, languageId } = req.query as Partial<Publication.RelatedPublications.QueryParams>
  if (!isValidDate(date)) return res.status(401).json({ message: 'Invalid Date' })

  const language = Number(languageId || 0)
  if (isNaN(language)) {
    return res.status(401).json({ message: 'LanguageId must be a number' })
  }

  const db = new CatalogDatabase(CATALOG_PATH)
  const publication = await db.getPublication(date, DOWNLOAD_DIR, type, language)
  if (!publication) return res.status(404).json({ message: 'No Publication Found' })

  const publications = await publication.getRelatedPublications(date)

  const response: Publication.RelatedPublications.Response = {
    message: {
      publications
    }
  }

  return res.json(response)
})

router.get<Publication.RelatedMedia.Params>('/:type/related-media', async (req, res) => {
  const { type } = req.params
  if (type !== 'wt' && type !== 'oclm') return res.status(401).json({ message: 'Route should be /wt/related-media or /oclm/related-media' })
  const { date, languageId } = req.query as Partial<Publication.RelatedMedia.QueryParams>
  if (!isValidDate(date)) return res.status(401).json({ message: 'Invalid Date' })

  const language = Number(languageId || 0)
  if (isNaN(language)) {
    return res.status(401).json({ message: 'LanguageId must be a number' })
  }

  const db = new CatalogDatabase(CATALOG_PATH)
  const publication = await db.getPublication(date, DOWNLOAD_DIR, type, language)
  if (!publication) return res.status(404).json({ message: 'No Publication Found' })

  const publications = await publication.getRelatedPublications(date)

  const images: ImageDTO[] = []
  const videos: VideoDTO[] = []

  for (const publication of publications) {
    const media = await db.getRelatedPublicationMedia(publication, DOWNLOAD_DIR, language)
    if (media) {
      images.push(...media.images)
      videos.push(...media.videos)
    }
  }

  const response: Publication.RelatedMedia.Response = {
    message: {
      media: {
        images,
        videos
      }
    }
  }

  return res.json(response)
})

export const publication = router
