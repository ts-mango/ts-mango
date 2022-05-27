import { onTypeErrorInterface } from '../type/onError'

/**
 * 错误提示
 * @param name 函数名
 * @param msg 错误信息
 */
export const onTypeError: onTypeErrorInterface = (name: string, msg: string): never => {
  throw new TypeError(`TsMango.${name}: ${msg}`)
}

/**
 * 错误提示
 * @param name 函数名
 * @param msg 错误信息
 */
export const onError: onTypeErrorInterface = (name: string, msg: string): never => {
  throw new Error(`TsMango.${name}: ${msg}`)
}
