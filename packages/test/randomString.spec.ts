import { expect, test } from 'vitest'
import { randomString } from '@ts-mango/mango'

test('randomString', () => {
  expect(randomString(2, 'cccc')).toBe('cc')
  expect(randomString(3, 'ddddddd')).toBe('ddd')
})
