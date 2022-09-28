import { getType } from '../get-type'

/**
 * 检测一个数据是否为 object 类型
 * @param target 要检测的数据
 * @returns boolean
 */
export const isObject = (target: unknown): boolean => {
  return typeof target === 'object' && target !== null && !Array.isArray(target) && getType(target) === '[object Object]'
}
