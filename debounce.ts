/**
 * 防抖
 * @param fn 回调函数
 * @param delay 时间
 * @returns 
 */
export const debounce = (fn: Function, delay: number = 200) => {
  let timer: any = null
  return function () {
    const args = arguments
    const that = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(that, args)
    }, delay)
  }
}
