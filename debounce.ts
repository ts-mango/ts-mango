import { debounceInterface } from './type/debounce'

/**
 * 防抖
 * @param fn 回调函数
 * @param delay 时间
 * @returns function
 */
export const debounce: debounceInterface = (fn: Function, time: number = 200): Function => {
  let timer: number | null = null
  return function (): void {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout((): void => {
      fn()
    }, time)
  }
}
