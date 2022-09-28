/**
 * 返回数据的类型
 * @param target 要检测的数据
 * @returns 数据的类型
 */
export const getType = (target: unknown): string => {
  return Object.prototype.toString.call(target)
}
