import type { isTfInterface } from './type'

/**
 * 检测一个值是 true 还是 false
 * @param target 要检测的值
 * @returns boolean
 */
export const isTf: isTfInterface = (target: any): boolean => {
  return !!target
}
