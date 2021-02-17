import path from 'path'

export const PUBLICATION_URL = 'https://download-a.akamaihd.net'
export const CATALOG_URL = PUBLICATION_URL + '/meps/jwl/current/catalogs/v3/catalog.db.gz'
export const MEDIA_URL = 'https://api.hag27.com/GETPUBMEDIALINKS'

export const ROOT_DIR = path.join(__dirname, '..')
export const DOWNLOAD_DIR = path.join(ROOT_DIR, 'downloads')
export const CATALOG_FILE = 'catalog.db'
export const CATALOG_PATH = path.join(DOWNLOAD_DIR, CATALOG_FILE)

export const PUBLICATION_TYPES = {
  WATCHTOWER: 14,
  OCLM: 30
}
