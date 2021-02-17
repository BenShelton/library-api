import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

import { CATALOG_FILE, CATALOG_PATH, CATALOG_URL } from './constants'
import { downloadFile } from './download'

export async function updateDatabase (): Promise<void> {
  await downloadFile(CATALOG_URL, CATALOG_FILE)
}

function openDatabase (): ReturnType<typeof open> {
  return open({
    filename: CATALOG_PATH,
    mode: sqlite3.OPEN_READONLY,
    driver: sqlite3.cached.Database
  })
}

export async function getRows<T> (query: string, params?: string | string[] | Record<string, string>): Promise<T[]> {
  const db = await openDatabase()
  return db.all<T[]>(query, params)
}
