import type { onLineInterface } from './type/onLine'
import { isUndefined } from './isUndefined'
import { onError } from './utils/onError'

/**
 * 检测当前是否处于联网状态
 * @returns boolean | never
 */
export const isOnLine: onLineInterface = (): boolean | never => {
  if (!isUndefined(window)) {
    return window.navigator.onLine
  }
  return onError('onLine', 'window not defined')
}
