import { expect, test } from 'vitest'
import { randomString } from '../../index'

test('randomString', () => {
  expect(randomString(2, 'aaaaaa')).toBe('aa')
  expect(randomString(3, 'ddddddd')).toBe('ddd')
})
