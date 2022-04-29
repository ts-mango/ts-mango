/**
 * 将多个数组合并成一个新的数组，并去重
 * 该方法可以传入一个或多个数组
 * @param target 数组元素
 * @returns 将多个数组合并后并去重
 */
export const mergeArrayRepeat = (...target: any[]): any[] => {
  const res = []
  for (const arr of target) {
    res.push(...arr)
  }
  return [...new Set([...res])]
}
