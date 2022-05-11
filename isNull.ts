import type { isNullInterface } from './type/isNull'
import { getType } from './getType'

/**
 * 判断一个值是否是 null
 * @param target 检测的值
 * @returns boolean
 */
export const isNull: isNullInterface = (target: unknown): boolean => {
  return target === null && getType(target) === '[Object Null]'
}
