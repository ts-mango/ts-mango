import { expect, test } from 'vitest'
import { isString } from '../../index'

test('isString', () => {
  expect(isString(1)).toBe(false)
  expect(isString(1.221)).toBe(false)
  expect(isString({})).toBe(false)
  expect(isString([])).toBe(false)
  expect(isString('12')).toBe(true)
  expect(isString(new Date)).toBe(false)
  expect(isString(false)).toBe(false)
})
