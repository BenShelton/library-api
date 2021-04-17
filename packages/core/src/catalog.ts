import { downloadCatalog } from './download'
import { checkExists } from './utils'

/**
 * Checks whether the currently downloaded catalog is the latest version & updates it if not.
 *
 * Returns `true` if the catalog was updated, `false` if it was already the latest version.
 */
export async function updateCatalog (path: string): Promise<boolean> {
  // TODO: Check for newer catalog & download
  const exists = await checkExists(path)
  if (!exists) {
    await downloadCatalog(path)
    return true
  }
  return false
}
