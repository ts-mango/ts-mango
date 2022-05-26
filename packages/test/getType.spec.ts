import { expect, test } from 'vitest'
import { getType } from '../../index'

test('getType', () => {
  expect(getType(1)).toBe('[object Number]')
  expect(getType(true)).toBe('[object Boolean]')
  expect(getType({})).toBe('[object Object]')
  expect(getType([])).toBe('[object Array]')
  expect(getType('123')).toBe('[object String]')
  expect(getType(new Date())).toBe('[object Date]')
  expect(getType(null)).toBe('[object Null]')
  expect(getType(undefined)).toBe('[object Undefined]')
  expect(getType(new Set())).toBe('[object Set]')
  expect(getType(new Map())).toBe('[object Map]')
  expect(getType(new WeakMap())).toBe('[object WeakMap]')
  expect(getType(new WeakSet())).toBe('[object WeakSet]')
})
