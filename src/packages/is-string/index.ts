import { getType } from '../get-type'
import type { IsStringInterface } from './interface'

/**
 * 判断一个值是否为字符串
 * @param target 要检测的值
 */
export const isString: IsStringInterface = (target: unknown): boolean => {
  return typeof target === 'string' && getType(target) === '[object String]'
}
