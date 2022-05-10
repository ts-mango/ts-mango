import { onTypeError } from './utils/onError'
import { Type, isTypeInterface, toStringInterface } from './type/isType'

/**
 * 检测数据类型
 * @param target 要检查的数据
 * @param type 数据类型
 * @returns boolean
 */
export const isType: isTypeInterface = (target: unknown, type: Type): boolean => {
  if (!type) {
    onTypeError('isType', 'The second parameter is missing')
  }

  const toString: toStringInterface = Object.prototype.toString
  return toString.call(target) === `[object ${type}]`
}
