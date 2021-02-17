import path from 'path'

export const CATALOG_URL = 'https://download-a.akamaihd.net/meps/jwl/current/catalogs/v3/catalog.db.gz'
export const ROOT_DIR = path.join(__dirname, '..')
export const DOWNLOAD_DIR = path.join(ROOT_DIR, 'downloads')
export const CATALOG_FILE = 'catalog.db'
export const CATALOG_PATH = path.join(DOWNLOAD_DIR, CATALOG_FILE)
