import type { DebounceInterface } from './interface'

/**
 * 防抖
 * @param handle 回调函数
 * @param delay 时间
 * @returns Function
 */
export const debounce: DebounceInterface = (handle: Function, delay = 200): Function => {
  let timer: NodeJS.Timeout

  return function (): void {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout((): void => {
      handle()
    }, delay)
  }
}
