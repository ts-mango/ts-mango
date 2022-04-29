/**
 * 浅克隆
 * @param { object } obj 需要克隆的对象
 * @returns 克隆好的新对象
 */
export const shallowClone = (obj: object): object => {
  if (!(obj instanceof Object)) {
    throw new Error('Parameter is not a object')
  }
  const res: object = {}
  for (const key in obj) {
    res[key] = obj[key]
  }
  return res
}
