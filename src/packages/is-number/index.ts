import { getType } from '../get-type'
import type { IsNumberInterface } from './interface'

/**
 * 检测一个数据是否为 Number 类型
 * @param target 要检测的数据
 * @returns boolean
 */
export const isNumber: IsNumberInterface = (target: unknown): boolean => {
  return typeof target === 'number' && getType(target) === '[object Number]'
}
