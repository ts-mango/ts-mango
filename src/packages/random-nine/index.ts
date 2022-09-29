import type { RandomNineInterface } from './interface'

/**
 * 获取 0-9 的随机数
 * @returns 0-9 的随机数
 */
export const randomNine: RandomNineInterface = (): number => {
  return Math.floor(Math.random() * 9)
}
