import type { isNumberInterface } from './type/isNumber'
import { getType } from './getType'

/**
 * 检测一个数据是否为 Array 类型
 * @param target 要检测的数据
 * @returns boolean
 */
export const isArray: isNumberInterface = (target: unknown): boolean => {
  return Array.isArray(target) && getType(target) === '[object Array]'
}
