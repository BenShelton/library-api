import { join } from 'path'
import { PublicationWT } from '@library-api/core'
import { PublicationRow } from '@library-api/core/types/database'

import { DOWNLOAD_DIR } from './constants'
import { checkExists } from './utils'
import { downloadPublication } from './download'

export async function getPublicationWT (row: PublicationRow): Promise<PublicationWT> {
  const filename = row.NameFragment.split('/').pop()!.replace('.jwpub', '')
  const path = join(DOWNLOAD_DIR, filename)
  const exists = await checkExists(path)
  if (!exists) {
    await downloadPublication(row.NameFragment, path)
  }
  return new PublicationWT({ filename, dir: DOWNLOAD_DIR })
}
