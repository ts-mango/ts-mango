import { expect, test } from 'vitest'
import { isArrHave } from '../../index'

test('isArrHave', () => {
  expect(isArrHave([1, 2, 3, 4], 4)).toBe(true)
  expect(isArrHave([1, 2, 3, 4], 9)).toBe(false)
  expect(isArrHave(['a', 'b', 'c'], 'c')).toBe(true)
  expect(isArrHave([{}, {}, {}], {})).toBe(false)
  expect(isArrHave([true, true, true], true)).toBe(true)
})
