import { join } from 'path'

import { DOWNLOAD_DIR } from 'src/constants'
import { checkExists } from 'src/utils'
import { downloadPublication } from 'src/download'
import { Publication } from './lib/Publication'

import { PublicationRow } from 'types/database'

export async function getPublication (row: PublicationRow): Promise<Publication> {
  const filename = join(DOWNLOAD_DIR, row.NameFragment.split('/').pop()!)
  const exists = await checkExists(filename)
  if (!exists) {
    await downloadPublication(row.NameFragment, filename)
  }
  return new Publication({ filename })
}
