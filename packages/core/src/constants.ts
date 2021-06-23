/**
 * The URL used as a base for downloading publications.
 *
 * This is the site hosting most of the files.
 */
export const PUBLICATION_URL = 'https://download-a.akamaihd.net'

/**
 * The URL of the current catalog.
 */
export const CATALOG_URL = `${PUBLICATION_URL}/meps/jwl/current/catalogs/v3/catalog.db.gz` as const

/**
 * The URL used as for checking media options.
 *
 * This returns a list of options of download qualities based on the passed in params.
 */
export const MEDIA_URL = 'https://api.hag27.com/GETPUBMEDIALINKS'

/**
 * The URL of all the media catalogs.
 *
 * These are NDJSON files that list images and other metadata used for media found within publications.
 */
export const MEDIA_CATALOGS_URL = 'https://app.jw-cdn.org/catalogs/media'

/**
 * Integer enums used to refer to certain publication types in the catalog database.
 */
export enum PUBLICATION_TYPES {
  WATCHTOWER = 14,
  OCLM = 30
}

/**
 * Integer enums used to refer to certain article types in a publication database.
 */
export enum PUBLICATION_CLASSES {
  WATCHTOWER_ARTICLE = 40,
  OCLM_WEEK = 106
}

/**
 * Params for the current songbook publication, without the track.
 *
 * Used internally to provide methods which only require a track in order to retrieve a song.
 */
export const SONG_PUBLICATION = {
  type: 'pub',
  doc: 'sjjm',
  issue: 0
} as const
