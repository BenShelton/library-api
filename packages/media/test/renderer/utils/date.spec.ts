import {
  closestPreviousMonday,
  isWeekend
} from '@renderer/utils/date'

/**
 * '2021-05-17' = Mon 17th May 2021
 * '2021-05-18' = Tue 18th May 2021
 * '2021-05-19' = Wed 19th May 2021
 * '2021-05-20' = Thu 20th May 2021
 * '2021-05-21' = Fri 21st May 2021
 * '2021-05-22' = Sat 22nd May 2021
 * '2021-05-23' = Sun 23rd May 2021
 * '2021-05-24' = Mon 24th May 2021
 */

describe('Renderer/Utils: Date', () => {
  describe('closestPreviousMonday', () => {
    test('should return the closest previous monday', () => {
      expect(closestPreviousMonday(new Date('2021-05-17')).toISOString()).toContain('2021-05-17')
      expect(closestPreviousMonday(new Date('2021-05-18')).toISOString()).toContain('2021-05-17')
      expect(closestPreviousMonday(new Date('2021-05-19')).toISOString()).toContain('2021-05-17')
      expect(closestPreviousMonday(new Date('2021-05-20')).toISOString()).toContain('2021-05-17')
      expect(closestPreviousMonday(new Date('2021-05-21')).toISOString()).toContain('2021-05-17')
      expect(closestPreviousMonday(new Date('2021-05-22')).toISOString()).toContain('2021-05-17')
      expect(closestPreviousMonday(new Date('2021-05-23')).toISOString()).toContain('2021-05-17')
      expect(closestPreviousMonday(new Date('2021-05-24')).toISOString()).toContain('2021-05-24')

      expect(closestPreviousMonday(new Date('2021-01-01')).toISOString()).toContain('2020-12-28')
    })
  })

  describe('isWeekend', () => {
    test('should return true if a weekend', () => {
      expect(isWeekend(new Date('2021-05-17'))).toBe(false)
      expect(isWeekend(new Date('2021-05-18'))).toBe(false)
      expect(isWeekend(new Date('2021-05-19'))).toBe(false)
      expect(isWeekend(new Date('2021-05-20'))).toBe(false)
      expect(isWeekend(new Date('2021-05-21'))).toBe(false)
      expect(isWeekend(new Date('2021-05-22'))).toBe(true)
      expect(isWeekend(new Date('2021-05-23'))).toBe(true)
      expect(isWeekend(new Date('2021-05-24'))).toBe(false)
    })
  })
})
