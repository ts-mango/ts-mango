import { expect, test } from 'vitest'
import { randomString } from '../../index'

test('randomString', () => {
  expect(randomString(2, 'cccc')).toBe('cc')
  expect(randomString(3, 'ddddddd')).toBe('ddd')
})
