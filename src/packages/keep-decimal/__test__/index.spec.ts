import { expect, test } from 'vitest'
import { keepDecimal } from '../index'

test('keepDecimal', () => {
  expect(keepDecimal(1.12121, 3)).toBe(1.121)
  expect(keepDecimal(1.12121, 0)).toBe(1)
  expect(keepDecimal(1.22, 2)).toBe(1.22)
})
