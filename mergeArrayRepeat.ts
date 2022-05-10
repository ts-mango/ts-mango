import { mergeArrayRepeatInterface } from './type/mergeArrayRepeat'

/**
 * 将多个数组合并成一个新的数组，并去重
 * 该方法可以传入一个或多个参数
 * @param target 数组元素
 * @returns 将多个数组合并后并去重
 */
export const mergeArrayRepeat: mergeArrayRepeatInterface = (...target: any[]): unknown[] => {
  if (target.length === 0) {
    return []
  }
  const res: unknown[] = []
  for (const arr of target) {
    res.push(...arr)
  }
  return [...new Set([...res])]
}
