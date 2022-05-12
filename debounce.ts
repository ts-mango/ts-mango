import type { debounceInterface } from './type/debounce'

/**
 * 防抖
 * @param handle 回调函数
 * @param delay 时间
 * @returns Function
 */
export const debounce: debounceInterface = function (handle: Function, delay: number = 200): Function {
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
