import type { isNumberInterface } from '@ts-mango/type'
import { getType } from './getType'

/**
 * 检测一个数据是否为 Number 类型
 * @param target 要检测的数据
 * @returns boolean
 */
export const isNumber: isNumberInterface = (target: unknown): boolean => {
  return typeof target === 'number' && getType(target) === '[object Number]'
}
