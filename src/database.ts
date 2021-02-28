import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

import { CATALOG_PATH } from './constants'

import { QueryParams } from 'types/database'

function openDatabase (filename: string): ReturnType<typeof open> {
  return open({
    filename,
    mode: sqlite3.OPEN_READONLY,
    driver: sqlite3.cached.Database
  })
}

export async function getCatalogRow<T> (query: string, params?: QueryParams): Promise<T | undefined> {
  const db = await openDatabase(CATALOG_PATH)
  return db.get<T>(query, params)
}

export async function getCatalogRows<T> (query: string, params?: QueryParams): Promise<T[]> {
  const db = await openDatabase(CATALOG_PATH)
  return db.all<T[]>(query, params)
}
