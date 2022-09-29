/**
 * 检测一个数组上是否存在某个值
 * @param arr 数组
 * @param target 要检测的值
 * @returns boolean
 */
export const isArrayHave = (arr: unknown[], target: unknown): boolean => {
  if (arr.length === 0) {
    return false
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true
    }
  }
  return false
}
