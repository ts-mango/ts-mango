/**
 * 深克隆
 * @param params 需要克隆的参数
 * @returns 克隆好的结果
 */
export const deepClone = (params: object | any[]): object | any[] => {
  if (typeof params !== 'object') {
    throw new Error('TsMango.deepClone: Parameter is not a object')
  }
  const res: object | [] = params instanceof Array ? [] : {}
  for (const [key, val] of Object.entries(params)) {
    res[key] = typeof val === 'object' ? deepClone(val) : val
  }
  return res
}
