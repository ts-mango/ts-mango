import { onError } from './utils/onError'

/**
 * 浅克隆
 * @param obj 需要克隆的对象
 * @returns 克隆好的新对象
 */
export const shallowClone = (obj: object): object => {
  if (!(obj instanceof Object)) onError('shallowClone', 'Parameter is not a object')
  const res: object = {}
  for (const key in obj) {
    res[key] = obj[key]
  }
  return res
}
