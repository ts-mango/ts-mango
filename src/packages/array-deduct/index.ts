// import { getType } from '../get-type'

/**
 * 数组去重
 * @param arr 需要去重的数组
 * @returns 去重后的数组 如果传入的不是数组则返回空数组
 */
export const arrayDeduct = (arr: unknown[]): unknown[] => {
  // if (!Array.isArray(arr) && getType(arr) !== '[object Array]') {
  //   onTypeError('uniqueArray', 'Parameter is not an array')
  // }

  if (arr.length === 1) {
    return arr
  }
  return [...new Set(arr)]
}
