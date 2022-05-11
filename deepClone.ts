import type { deepCloneInterface } from './type/deepClone'
import { onTypeError } from './utils/onError'

/**
 * 深克隆
 * @param params 需要克隆的参数
 * @returns 克隆好的结果
 */
export const deepClone: deepCloneInterface = (params: object | unknown[]): object | unknown[] => {
  if (typeof params !== 'object') {
    onTypeError('deepClone', 'Parameter is not a object')
  }
  const res: object | unknown[] = params instanceof Array ? [] : {}

  for (const [key, val] of Object.entries(params)) {
    res[key] = typeof val === 'object' ? deepClone(val) : val
  }
  return res
}
