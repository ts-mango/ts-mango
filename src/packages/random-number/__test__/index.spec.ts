import { expect, test } from 'vitest'
import { randomNumber } from '../index'

test('randomNum', () => {
  expect(randomNumber(0, 1)).toBe(0)
  expect(randomNumber(11, 12)).toBe(11)
})
