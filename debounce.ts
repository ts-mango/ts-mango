/**
 * 防抖
 * @param fn 回调函数
 * @param delay 时间
 * @returns function
 */
export const debounce = (fn: Function, time: number = 200): Function => {
  let timer: any = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, time)
  }
}
