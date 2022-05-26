import { expect, test } from 'vitest'
import { isNumber } from '../../index'

test('isNumber', () => {
  expect(isNumber(1)).toBe(true)
  expect(isNumber(1.221)).toBe(true)
  expect(isNumber({})).toBe(false)
  expect(isNumber([])).toBe(false)
  expect(isNumber('12')).toBe(false)
  expect(isNumber(new Date)).toBe(false)
  expect(isNumber(false)).toBe(false)
})
