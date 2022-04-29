/**
 * 节流
 * @param fn 逻辑函数
 * @param time 执行逻辑的间隔(毫秒)
 * @returns
 */
export const throttle = (fn: Function, time: number = 1000): Function => {
  let flag: boolean = true
  return function () {
    if (flag) {
      setTimeout(() => {
        fn()
        flag = true
      }, time)
    }
    flag = false
  }
}
