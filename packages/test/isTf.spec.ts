import { expect, test } from 'vitest'
import { isTf } from '../../index'

test('isTf', () => {
  expect(isTf(1)).toBe(true)
  expect(isTf(1.221)).toBe(true)
  expect(isTf({})).toBe(true)
  expect(isTf([])).toBe(true)
  expect(isTf('12')).toBe(true)
  expect(isTf(new Date())).toBe(true)
  expect(isTf(false)).toBe(false)
  expect(isTf(true)).toBe(true)
  expect(isTf(null)).toBe(false)
  expect(isTf(undefined)).toBe(false)
  expect(isTf('')).toBe(false)
  expect(isTf(-1)).toBe(true)
  expect(isTf(0)).toBe(false)
  expect(isTf([{}])).toBe(true)
})
