import type { isNumberInterface } from '@ts-mango/type'
import { getType } from './getType'

/**
 * 判断一个值是否为字符串
 * @param target 要检测的值
 */
export const isString: isNumberInterface = (target: unknown): boolean => {
  return typeof target === 'string' && getType(target) === '[object String]'
}
