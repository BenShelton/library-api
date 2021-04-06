import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

import { QueryParams } from '../types/database'

// TODO: Make this a class
export function openDatabase (filename: string): ReturnType<typeof open> {
  return open({
    filename,
    mode: sqlite3.OPEN_READONLY,
    driver: sqlite3.cached.Database
  })
}

export async function getCatalogRow<T> (path: string, query: string, params?: QueryParams): Promise<T | undefined> {
  const db = await openDatabase(path)
  return db.get<T>(query, params)
}

export async function getCatalogRows<T> (path: string, query: string, params?: QueryParams): Promise<T[]> {
  const db = await openDatabase(path)
  return db.all<T[]>(query, params)
}
