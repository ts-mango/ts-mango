/**
 * 防抖
 * @param handle 回调函数
 * @param delay 时间
 * @returns Function
 */
export const debounce = (handle: Function, delay: number = 200): Function => {
  let timer: any = null
  return function (): void {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout((): void => {
      handle()
    }, delay)
  }
}
