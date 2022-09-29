import { expect, test } from 'vitest'
import { judgeTrue } from '../index'

test('judgeTrue', () => {
  expect(judgeTrue(1)).toBe(true)
  expect(judgeTrue(1.221)).toBe(true)
  expect(judgeTrue({})).toBe(true)
  expect(judgeTrue([])).toBe(true)
  expect(judgeTrue('12')).toBe(true)
  expect(judgeTrue(new Date)).toBe(true)
  expect(judgeTrue(false)).toBe(false)
  expect(judgeTrue(true)).toBe(true)
  expect(judgeTrue(null)).toBe(false)
  expect(judgeTrue(undefined)).toBe(false)
  expect(judgeTrue('')).toBe(false)
  expect(judgeTrue(-1)).toBe(true)
  expect(judgeTrue(0)).toBe(false)
  expect(judgeTrue([{}])).toBe(true)
})
