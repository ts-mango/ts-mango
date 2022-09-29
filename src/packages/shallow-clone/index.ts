import { getType } from '../get-type'
import { onTypeError } from '../_utils'
import type { ShallowCloneInterface } from './interface'

/**
 * 浅克隆
 * @param obj 需要克隆的对象
 * @returns 克隆好的新对象
 */
export const shallowClone: ShallowCloneInterface = (obj: Record<string, unknown>): object => {
  if (getType(obj) !== '[object Object]') {
    onTypeError('shallowClone', 'Parameter is not a object')
  }
  const res = {}
  for (const key in obj) {
    res[key] = obj[key]
  }
  return res
}
