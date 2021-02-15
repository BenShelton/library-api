import { CATALOG_URL } from './constants'
import { downloadFile } from './download'

export async function updateDatabase (): Promise<void> {
  await downloadFile(CATALOG_URL, 'catalog.db')
}
