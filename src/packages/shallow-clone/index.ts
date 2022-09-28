import { getType } from '../get-type'

/**
 * 浅克隆
 * @param obj 需要克隆的对象
 * @returns 克隆好的新对象
 */
export const shallowClone = (obj: { [propName: string]: any }): object => {
  // if (getType(obj) !== '[object Object]') {
  //   onTypeError('shallowClone', 'Parameter is not a object')
  // }
  const res: any = {}
  for (const key in obj) {
    res[key] = obj[key]
  }
  return res
}
