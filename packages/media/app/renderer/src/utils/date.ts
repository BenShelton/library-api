import { SelectOption } from 'types/select'

/**
 * Returns the most recent previous Monday
 */
export function closestPreviousMonday (): Date {
  const thisWeek = new Date()
  thisWeek.setHours(12)
  const day = thisWeek.getDay()
  thisWeek.setDate(thisWeek.getDate() - (day === 0 ? 7 : day - 1))
  return thisWeek
}

/**
 * Returns true if the passed in date is a Saturday or Sunday
 */
export function isWeekend (date: Date): boolean {
  const day = date.getDay()
  return day === 0 || day === 6
}

/**
 * Returns an array of select options for every week of the year, starting on Monday
 *
 * @param year number | string
 */
export function getMondaysOfYear (year: number | string): SelectOption<string>[] {
  const d = new Date(year + '-01-01')
  const mondays: SelectOption<string>[] = []
  // get the first Monday in the year
  while (d.getDay() !== 1) {
    d.setDate(d.getDate() + 1)
  }
  // avoid timezone offsets
  d.setHours(12)
  // get all the other Mondays in the year
  while (d.getFullYear() === year) {
    const sunday = new Date(d)
    sunday.setDate(d.getDate() + 6)
    const options = { month: 'short', day: 'numeric' } as const
    const text = `${d.toLocaleDateString(undefined, options)} - ${sunday.toLocaleDateString(undefined, options)}`
    mondays.push({ value: formatISODate(d), text })
    d.setDate(d.getDate() + 7)
  }
  return mondays
}

/**
 * Returns a `yyyy-mm-dd` string from a date
 *
 * @param date Date
 */
export function formatISODate (date: Date): string {
  return date.toISOString().slice(0, 10)
}
