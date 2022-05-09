import { onError } from './utils/onError'

type Type =
  | 'String'
  | 'Number'
  | 'Object'
  | 'Function'
  | 'Boolean'
  | 'Set'
  | 'Map'
  | 'WeakMap'
  | 'WeakSet'
  | 'Date'
  | 'RegExp'
  | 'Array'
  | 'Null'
  | 'Undefined'

/**
 * 检测数据类型
 * @param target 要检查的数据
 * @param type 数据类型
 * @returns boolean
 */
export const isType = (target: any, type: Type): boolean => {
  if (!type) onError('isType', 'The second parameter is missing')
  const toString = Object.prototype.toString
  return toString.call(target) === `[object ${type}]`
}
