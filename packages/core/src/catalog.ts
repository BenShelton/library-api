import { join } from 'path'

import { downloadCatalog, downloadMediaCatalog } from './download'
import { getLanguageById } from './language'
import { checkExists } from './utils'
import { MediaCatalog } from './classes/Media'

/**
 * @todo Check for latest version, currently just checks existence of file.
 *
 * Checks whether the currently downloaded catalog is the latest version & updates it if not.
 *
 * @param path The path to download the catalog to.
 *
 * @returns `true` if the catalog was updated, `false` if it was already the latest version.
 */
export async function updateCatalog (path: string): Promise<boolean> {
  const exists = await checkExists(path)
  if (!exists) {
    await downloadCatalog(path)
    return true
  }
  return false
}

/**
 * @todo Check for latest version, currently just checks existence of file.
 *
 * Retrieves a media catalog file and returns a {@link MediaCatalog} instance if it exists.
 * Will download the file if it is not yet downloaded.
 *
 * @param dir The directory where media catalogs are to be stored.
 * @param languageId The Meps Language Id to use.
 *
 * @returns A {@link MediaCatalog} if it exists, `null` if not found.
 */
export async function getMediaCatalog (dir: string, languageId: number): Promise<MediaCatalog | null> {
  const language = getLanguageById(languageId)
  if (!language) return null
  const code = language.symbol
  const path = join(dir, `media-catalog-${code}.ndjson`)
  const exists = await checkExists(path)
  if (!exists) {
    try {
      await downloadMediaCatalog(code, path)
    } catch (err) {
      return null
    }
  }
  return new MediaCatalog({ path, languageId })
}
