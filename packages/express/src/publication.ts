import { join } from 'path'
import { PublicationWT, PublicationOCLM, PublicationCtor } from '@library-api/core'
import { PublicationRow } from '@library-api/core/types/database'

import { DOWNLOAD_DIR } from './constants'
import { checkExists } from './utils'
import { downloadPublication } from './download'

async function getPublication (row: PublicationRow): Promise<PublicationCtor> {
  const filename = row.NameFragment.split('/').pop()!.replace('.jwpub', '')
  const path = join(DOWNLOAD_DIR, filename)
  const exists = await checkExists(path)
  if (!exists) {
    await downloadPublication(row.NameFragment, path)
  }
  return { filename, dir: DOWNLOAD_DIR }
}

export async function getPublicationWT (row: PublicationRow): Promise<PublicationWT> {
  const ctor = await getPublication(row)
  return new PublicationWT(ctor)
}

export async function getPublicationOCLM (row: PublicationRow): Promise<PublicationOCLM> {
  const ctor = await getPublication(row)
  return new PublicationOCLM(ctor)
}
