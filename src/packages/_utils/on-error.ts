import type { OnTypeErrorInterface, OnErrorInterface } from '../_interface'

/**
 * 错误提示
 * @param name 函数名
 * @param msg 错误信息
 */
export const onTypeError: OnTypeErrorInterface = (name: string, msg: string): TypeError => {
  throw new TypeError(`🥭 TsMango.${name}: ${msg}`)
}

/**
 * 错误提示
 * @param name 函数名
 * @param msg 错误信息
 */
export const onError: OnErrorInterface = (name: string, msg: string): Error => {
  throw new Error(`🥭 TsMango.${name}: ${msg}`)
}
