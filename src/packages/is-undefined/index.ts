import { getType } from '../get-type'

/**
 * 判断一个值是否为 undefined
 * @param target 要判断的值
 * @returns boolean
 */
export const isUndefined = (target: unknown): boolean => {
  return target === undefined && typeof target === 'undefined' && getType(target) === '[object Undefined]'
}
