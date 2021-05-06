import { app } from 'electron'
import path from 'path'

export const ROOT_DIR = app.getPath('userData')
export const DOWNLOAD_DIR = path.join(ROOT_DIR, 'downloads')
export const VIDEO_DIR = path.join(DOWNLOAD_DIR, 'videos')
export const CATALOG_FILE = 'catalog.db'
export const CATALOG_PATH = path.join(DOWNLOAD_DIR, CATALOG_FILE)
