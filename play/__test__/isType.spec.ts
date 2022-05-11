import { expect, test } from 'vitest'
import { isType } from '../../index'

test('isType', () => {
  expect(isType(1, 'Number')).toBe(true)
  expect(isType(true, 'Boolean')).toBe(true)
  expect(isType({}, 'Object')).toBe(true)
  expect(isType([], 'Array')).toBe(true)
  expect(isType('123', 'String')).toBe(true)
  expect(isType(function () { }, 'Array')).toBe(false)
  expect(isType(function () { }, 'Function')).toBe(true)
})
