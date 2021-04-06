import { join } from 'path'
import { Publication } from '@library-api/core'
import { PublicationRow } from '@library-api/core/types/database'

import { DOWNLOAD_DIR } from './constants'
import { checkExists } from './utils'
import { downloadPublication } from './download'

export async function getPublication (row: PublicationRow): Promise<Publication> {
  const filename = row.NameFragment.split('/').pop()!.replace('.jwpub', '')
  const path = join(DOWNLOAD_DIR, filename)
  const exists = await checkExists(path)
  if (!exists) {
    await downloadPublication(row.NameFragment, path)
  }
  return new Publication({ filename, dir: DOWNLOAD_DIR })
}