import type { debounceInterface } from './type/debounce'

/**
 * 防抖
 * @param handle 回调函数
 * @param delay 时间
 * @returns Function
 */
export const debounce: debounceInterface = (handle: Function, delay: number = 200): Function => {
  let timer: number | null = null
  return function (): void {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout((): void => {
      handle()
    }, delay)
  }
}
