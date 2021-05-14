import { downloadCatalog } from './download'
import { checkExists } from './utils'

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
