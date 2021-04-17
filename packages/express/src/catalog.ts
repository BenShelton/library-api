import { checkExists, downloadCatalog } from '@library-api/core'

import { CATALOG_PATH } from './constants'

/**
 * Checks whether the currently downloaded catalog is the latest version & updates it if not.
 *
 * Returns `true` if the catalog was updated, `false` if it was already the latest version.
 */
export async function updateCatalog (): Promise<boolean> {
  // TODO: Check for newer catalog & download
  const exists = await checkExists(CATALOG_PATH)
  if (!exists) {
    await downloadCatalog(CATALOG_PATH)
    return true
  }
  return false
}
