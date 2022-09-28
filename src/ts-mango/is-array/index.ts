import { getType } from '../get-type'

/**
 * 检测一个数据是否为 Array 类型
 * @param target 要检测的数据
 * @returns boolean
 */
export const isArray = (target: unknown): boolean => {
  return Array.isArray(target) && getType(target) === '[object Array]'
}
