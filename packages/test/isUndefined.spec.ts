import { expect, test } from 'vitest'
import { isUndefined } from '../../index'

test('isUndefined ', () => {
  expect(isUndefined(1)).toBe(false)
  expect(isUndefined(1.221)).toBe(false)
  expect(isUndefined({})).toBe(false)
  expect(isUndefined([])).toBe(false)
  expect(isUndefined('12')).toBe(false)
  expect(isUndefined(new Date())).toBe(false)
  expect(isUndefined(false)).toBe(false)
  expect(isUndefined(undefined)).toBe(true)
})
