import { join } from 'path'

import { DOWNLOAD_DIR } from 'src/constants'
import { checkExists } from 'src/utils'
import { downloadPublication } from 'src/download'
import { Publication } from './lib/Publication'

import { PublicationRow } from 'types/database'

export async function getPublication (row: PublicationRow): Promise<Publication> {
  const filename = row.NameFragment.split('/').pop()!.replace('.jwpub', '')
  const path = join(DOWNLOAD_DIR, filename)
  const exists = await checkExists(path)
  if (!exists) {
    await downloadPublication(row.NameFragment, path)
  }
  return new Publication({ filename })
}
