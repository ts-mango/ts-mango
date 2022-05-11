import { debounceInterface } from './type/debounce'
import { returnFunctionInterface } from './type/throttle'

/**
 * 防抖
 * @param handle 回调函数
 * @param delay 时间
 * @returns function
 */
export const debounce: debounceInterface = (handle: Function, delay: number = 200): returnFunctionInterface => {
  let timer: number | null = null
  return function (): void {
    const _self: unknown = this
    const _args: unknown = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout((): void => {
      handle.apply(_self, _args)
    }, delay)
  }
}
