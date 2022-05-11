import type { uniqueArrayInterface } from './type/uniqueArray'
import { onTypeError } from './utils/onError'
import { getType } from './getType'

/**
 * 数组去重
 * @param arr 需要去重的数组
 * @returns 去重后的数组 如果传入的不是数组则返回空数组
 */
export const uniqueArray: uniqueArrayInterface = (arr: unknown[]): unknown[] => {
  if (!Array.isArray(arr) && getType(arr) !== '[Object Array]') {
    onTypeError('uniqueArray', 'Parameter is not an array')
  }

  if (arr.length === 1) {
    return arr
  }
  return [...new Set(arr)]
}
