import type { RandomStringInterface } from './interface'

/**
 * 生成随机字符串
 * @param length 指定位数
 * @param chars 字符串指定字符
 * @returns 随机字符串
 */
export const randomString: RandomStringInterface = (length: number, chars?: string): string => {
  chars = chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let res = ''
  for (let i = 0; i < length; i++) {
    res += chars[Math.floor(Math.random() * chars.length)]
  }
  return res
}
