import { getType } from '../get-type'
import type { IsNullInterface } from './interface'

/**
 * 判断一个值是否是 null
 * @param target 检测的值
 * @returns boolean
 */
export const isNull: IsNullInterface = (target: unknown): boolean => {
  return target === null && getType(target) === '[object Null]'
}
