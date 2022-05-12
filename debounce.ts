import type { debounceInterface } from './type/debounce'
import type { returnFunctionInterface } from './type/throttle'

/**
 * 防抖
 * @param handle 回调函数
 * @param delay 时间
 * @returns returnFunctionInterface
 */
export const debounce: debounceInterface = (handle: Function, delay: number = 200): returnFunctionInterface => {
  let timer: number | null = null
  return function (): void {
    const _self: any = this
    const _args: unknown = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout((): void => {
      handle.apply(_self, _args)
    }, delay)
  }
}
