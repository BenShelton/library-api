import { readFile } from 'fs/promises'
import { join } from 'path'
import { ipcMain, dialog, app } from 'electron'
import log from 'electron-log'
import {
  CatalogDatabase,
  checkExists,
  downloadFile,
  downloadSongStream,
  downloadVideoStream,
  emptyDir,
  Publication,
  updateCatalog
} from '@library-api/core'
import { MediaDetailsDTO, VideoDTO } from '@library-api/core/types/dto'

import { imageExtensions, videoExtensions } from 'shared/src/extensions'
import { initDirectories } from './directories'
import { getControlWindow, getDisplayWindow } from './window'
import { CATALOG_PATH, DOWNLOAD_DIR, VIDEO_DIR } from './constants'
import { showErrorDialog } from './logger'

import {
  SettingsClearDownloads,
  CatalogUpdate,
  DisplayMedia,
  DownloadSong,
  DownloadVideo,
  IPCVideoDTO,
  MediaImage,
  MediaPick,
  MediaVideo,
  PublicationMedia,
  SongDetails,
  VideoDetails
} from 'shared/types/ipc'

function getVideoPaths (id: string): { imagePath: string, videoPath: string } {
  const srcPath = join(VIDEO_DIR, id.replace('#', ''))
  return {
    imagePath: srcPath + '_preview.jpg',
    videoPath: srcPath + '_video.mp4'
  }
}

async function processVideoDetails (details: MediaDetailsDTO): Promise<VideoDetails> {
  const { imagePath, videoPath } = getVideoPaths(details.id)

  const imageDownloaded = await checkExists(imagePath)
  if (!imageDownloaded) {
    await downloadFile(details.url, imagePath)
  }
  const imageSrc = await readFile(imagePath, { encoding: 'base64' })

  const downloaded = await checkExists(videoPath)

  return {
    details,
    id: details.id,
    src: 'data:image/jpeg;base64,' + imageSrc,
    text: details.caption,
    downloaded
  }
}

async function placeholderVideoDetails (video: VideoDTO): Promise<VideoDetails> {
  const detailsId = video.id + '_placeholder'
  const { videoPath } = getVideoPaths(detailsId)
  const imageSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlIGZpbGw9IiMyNGU4YmQiPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGZpbGw9IiMyNGU4YmQiIGlkPSJGaWxsLTQ3IiBkPSJtMzIuMSw1NmMtMTMuMiwwIC0yMy45LC0xMC43IC0yMy45LC0yMy45czEwLjcsLTIzLjkgMjMuOSwtMjMuOWMxMy4yLDAgMjMuOSwxMC43IDIzLjksMjMuOXMtMTAuNywyMy45IC0yMy45LDIzLjlsMCwwem0wLC00NS4yYy0xMS43LDAgLTIxLjMsOS42IC0yMS4zLDIxLjNjMCwxMS43IDkuNiwyMS4zIDIxLjMsMjEuM2MxMS43LDAgMjEuMywtOS42IDIxLjMsLTIxLjNjMCwtMTEuOCAtOS42LC0yMS4zIC0yMS4zLC0yMS4zbDAsMHoiIGNsYXNzPSJzdDAiLz4KICA8cGF0aCBmaWxsPSIjMjRlOGJkIiBpZD0iRmlsbC00OCIgZD0ibTI0LjcsMjQuNWMwLjQsLTEuMSAwLjksLTIgMS42LC0yLjdjMC43LC0wLjcgMS42LC0xLjMgMi42LC0xLjdjMSwtMC40IDIuMiwtMC42IDMuNSwtMC42YzEsMCAyLDAuMiAyLjksMC41YzAuOSwwLjMgMS43LDAuOCAyLjQsMS4zczEuMiwxLjMgMS42LDIuMWMwLjQsMC44IDAuNiwxLjggMC42LDIuOWMwLDEuNCAtMC4zLDIuNSAtMC45LDMuNXMtMS40LDEuOSAtMi4zLDIuOGMtMC44LDAuOCAtMS40LDEuNCAtMS44LDEuOGMtMC41LDAuNCAtMC44LDAuOSAtMSwxLjNzLTAuNCwwLjkgLTAuNCwxLjVjLTAuMSwwLjYgLTAuMSwxIC0wLjEsMi4xbC0yLjMsMGMwLC0xLjEgMCwtMS42IDAuMiwtMi4zYzAuMSwtMC44IDAuNCwtMS40IDAuNywtMi4xYzAuMywtMC42IDAuOCwtMS4yIDEuMywtMS44YzAuNiwtMC42IDEuMiwtMS4yIDIsLTEuOWMwLjcsLTAuNiAxLjMsLTEuMyAxLjcsLTIuMWMwLjUsLTAuOCAwLjcsLTEuNyAwLjcsLTIuNmMwLC0wLjcgLTAuMSwtMS40IC0wLjQsLTJjLTAuMywtMC42IC0wLjcsLTEuMSAtMS4xLC0xLjZzLTEsLTAuOCAtMS43LC0xYy0wLjYsLTAuMiAtMS4zLC0wLjQgLTIsLTAuNGMtMSwwIC0xLjksMC4yIC0yLjYsMC41Yy0wLjgsMC4zIC0xLjQsMC44IC0xLjksMS40Yy0wLjUsMC42IC0wLjksMS4zIC0xLjEsMi4xYy0wLjIsMC44IC0wLjQsMS41IC0wLjMsMi40bC0yLjMsMGMtMC4xLC0xLjQgMCwtMi4zIDAuNCwtMy40bDAsMHptNiwxNy41bDIuOCwwbDAsMi44bC0yLjgsMGwwLC0yLjh6IiBjbGFzcz0ic3QwIi8+CiA8L2c+Cjwvc3ZnPg=='
  const downloaded = await checkExists(videoPath)

  return {
    details: {
      id: detailsId,
      caption: '(Unknown Video)',
      filename: '',
      height: 0,
      width: 0,
      url: ''
    },
    id: video.id,
    src: imageSrc,
    text: '(Unknown Video)',
    downloaded
  }
}

async function sendMedia (src: string): Promise<void> {
  const displayWindow = await getDisplayWindow()
  displayWindow.webContents.send('display:media', { src } as DisplayMedia['Args'])
}

export function initIPC (): void {
  ipcMain.handle('catalog:update', async (): Promise<CatalogUpdate['Response']> => {
    try {
      await updateCatalog(CATALOG_PATH)
      return true
    } catch (err) {
      log.error(err)
      return false
    }
  })

  ipcMain.handle('publication:media', async (_event, args: PublicationMedia['Args']): Promise<PublicationMedia['Response']> => {
    const db = new CatalogDatabase(CATALOG_PATH)
    let publication: Publication | null = null
    try {
      publication = await db.getPublication(args.date, DOWNLOAD_DIR, args.type, args.languageId)
    } catch (err) {
      log.info('Unable to download publication', args, err)
      return null
    }
    if (!publication) return null

    const baseImages = await publication.getImages(args.date)
    const { contentsPath } = publication
    const images = await Promise.all(baseImages.map(async (image) => {
      const srcURL = join(contentsPath, image.filePath)
      const src = await readFile(srcURL, { encoding: 'base64' })
      return {
        ...image,
        src: 'data:image/jpeg;base64,' + src,
        text: image.caption,
        downloaded: true
      }
    }))

    const baseVideos = await publication.getVideos(args.date)
    try {
      const videos: IPCVideoDTO[] = await Promise.all(baseVideos.map(async (video) => {
        const details = await db.getMediaDetails(video)
        if (!details) {
          log.error(`Cannot load details for video: ${video.id}`)
          const videoDetails = await placeholderVideoDetails(video)
          return {
            ...video,
            ...videoDetails
          }
        }

        const videoDetails = await processVideoDetails(details)

        return {
          ...video,
          ...videoDetails
        }
      }))
      return {
        videos,
        images
      }
    } catch (err) {
      log.error('Cannot load details for video', err)
      await showErrorDialog(err)
      return null
    }
  })

  ipcMain.handle('download:video', async (_event, args: DownloadVideo['Args']): Promise<DownloadVideo['Response']> => {
    const { videoPath } = getVideoPaths(args.details.id)
    const stream = await downloadVideoStream(args, videoPath)
    if (!stream) throw new Error(`Could not load video stream for video detail: ${args.details.id}`)
  })

  ipcMain.handle('download:song', async (_event, args: DownloadSong['Args']): Promise<DownloadSong['Response']> => {
    const { videoPath } = getVideoPaths(args.details.id)
    const stream = await downloadSongStream(args.track, videoPath, args.languageId)
    if (!stream) throw new Error(`Could not load song stream for song: ${args.track}`)
  })

  ipcMain.handle('song:details', async (_event, args: SongDetails['Args']): Promise<SongDetails['Response']> => {
    const db = new CatalogDatabase(CATALOG_PATH)
    const details = await db.getSongDetails(args.track, args.languageId)
    if (!details) throw new Error('Could not find details')
    const videoDetails = processVideoDetails(details)
    return videoDetails
  })

  ipcMain.handle('settings:clearDownloads', async (): Promise<SettingsClearDownloads['Response']> => {
    await emptyDir(DOWNLOAD_DIR)
    await initDirectories()
  })

  ipcMain.handle('media:pick', async (): Promise<MediaPick['Response']> => {
    const window = await getControlWindow()
    const { canceled, filePaths } = await dialog.showOpenDialog(window, {
      title: 'Choose the media you want to display',
      defaultPath: app.getPath('downloads'),
      filters: [
        {
          name: 'Media',
          extensions: [
            ...imageExtensions,
            ...videoExtensions
          ]
        }
      ]
    })
    if (canceled || !filePaths.length) return false
    const file = filePaths[0]
    await sendMedia('file:///' + file)
    return true
  })

  ipcMain.on('media:image', async (_event, args: MediaImage['Args']) => {
    await sendMedia(args.src)
  })

  ipcMain.on('media:video', async (_event, args: MediaVideo['Args']) => {
    const { videoPath } = getVideoPaths(args.details.id)
    await sendMedia('file:///' + videoPath)
  })

  ipcMain.on('media:clear', async () => {
    const displayWindow = await getDisplayWindow()
    displayWindow.webContents.send('display:clear')
  })
}
