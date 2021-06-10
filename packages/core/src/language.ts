import { LanguageMapper } from './classes'
import languages from './data/languages.json'

import { LanguageDTO } from '../types/dto'

/**
 * Retrieves a list of all languages currently supported.
 *
 * @returns An array of languages.
 */
export function getLanguages (): LanguageDTO[] {
  return new LanguageMapper().MapLanguages(languages)
}

/**
 * Searches for the specified language based on the provided id.
 *
 * @param id The Meps Language Id to search for.
 *
 * @returns The language if it was found, `null` if it does not exist.
 */
export function getLanguageById (id: number): LanguageDTO | null {
  const language = languages.find(l => l.LanguageId === id)
  if (!language) return null
  return new LanguageMapper().MapLanguage(language)
}
