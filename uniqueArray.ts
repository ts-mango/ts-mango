import { onTypeError } from './utils/onError'

/**
 * 数组去重
 * @param arr 需要去重的数组
 * @returns 去重后的数组 如果传入的不是数组则返回空数组
 */
export const uniqueArray = (arr: any[]): any[] => {
  if (!Array.isArray(arr)) onTypeError('uniqueArray', 'Parameter is not an array')
  if (arr.length === 1) {
    return arr
  }
  return [...new Set(arr)]
}
