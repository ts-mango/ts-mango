import { isUndefined } from '../is-undefined'
import { onError } from '../_utils'
import type { IsOnLineInterface } from './interface'

/**
 * 检测当前是否处于联网状态
 * @returns boolean | never
 */
export const isOnLine: IsOnLineInterface = (): boolean | Error => {
  if (!isUndefined(window)) {
    return window.navigator.onLine
  }
  return onError('onLine', 'window not defined')
}
