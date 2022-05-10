import { getType } from './getType'
import { isUndefinedInterface } from './type/isUndefined'

/**
 * 判断一个值是否为 undefined
 * @param target 要判断的值
 * @returns boolean
 */
export const isUndefined: isUndefinedInterface = (target: unknown): boolean => {
  return target === undefined && typeof target === 'undefined' && getType(target) === '[Object Undefined]'
}
