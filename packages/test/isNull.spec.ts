import { expect, test } from 'vitest'
import { isNull } from '@ts-mango/mango'

test('isNull', () => {
  expect(isNull(1)).toBe(false)
  expect(isNull({})).toBe(false)
  expect(isNull([])).toBe(false)
  expect(isNull('123')).toBe(false)
  expect(isNull(new Date())).toBe(false)
  expect(isNull(null)).toBe(true)
})
