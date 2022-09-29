import { expect, test } from 'vitest'
import { isArrayHave } from '../index'

test('isArrayHave', () => {
  expect(isArrayHave([1, 2, 3, 4], 4)).toBe(true)
  expect(isArrayHave([1, 2, 3, 4], 9)).toBe(false)
  expect(isArrayHave(['a', 'b', 'c'], 'c')).toBe(true)
  expect(isArrayHave([{}, {}, {}], {})).toBe(false)
  expect(isArrayHave([true, true, true], true)).toBe(true)
})
