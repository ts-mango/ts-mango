import type { JudgeTrueInterface } from './interface'

/**
 * 检测一个值是 true 还是 false
 * @param target 要检测的值
 * @returns boolean
 */
export const judgeTrue: JudgeTrueInterface = (target: unknown): boolean => {
  return !!target
}
