import { getType } from '../get-type'
import type { IsUndefinedInterface } from './interface'

/**
 * 判断一个值是否为 undefined
 * @param target 要判断的值
 * @returns boolean
 */
export const isUndefined: IsUndefinedInterface = (target: unknown): boolean => {
  return target === undefined && typeof target === 'undefined' && getType(target) === '[object Undefined]'
}
