import { expect, test } from 'vitest'
import { isObject } from '../../index'

test('isObject', () => {
  expect(isObject(1)).toBe(false)
  expect(isObject(1.221)).toBe(false)
  expect(isObject({})).toBe(true)
  expect(isObject({ name: 1 })).toBe(true)
  expect(isObject([])).toBe(false)
  expect(isObject(null)).toBe(false)
  expect(isObject(new Set)).toBe(false)
  expect(isObject(new Map)).toBe(false)
  expect(isObject(new WeakSet)).toBe(false)
  expect(isObject(Symbol)).toBe(false)
  expect(isObject('12')).toBe(false)
  expect(isObject(new Date)).toBe(false)
  expect(isObject(false)).toBe(false)
})
