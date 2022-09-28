import type { witTenNumInterface } from './type'

/**
 * 获取 0-9 的随机数
 * @returns 0-9 的随机数
 */
export const witTenNum: witTenNumInterface = (): number => {
  return Math.floor(Math.random() * 9)
}
