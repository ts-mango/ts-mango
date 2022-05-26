import { expect, test } from 'vitest'
import { randomNum } from '@ts-mango/mango'

test('randomNum', () => {
  expect(randomNum(0, 1)).toBe(0)
  expect(randomNum(11, 12)).toBe(11)
})
