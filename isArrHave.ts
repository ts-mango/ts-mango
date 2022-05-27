import { isArrHaveInterface } from './type'

/**
 * 检测一个数组上是否存在某个值
 * @param arr 数组
 * @param target 要检测的值
 * @returns boolean
 */
export const isArrHave: isArrHaveInterface = (arr: any[], target: any): boolean => {
  if (arr.length === 0) {
    return false
  }
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true
    }
  }
  return false
}
