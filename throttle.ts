import { throttleInterface } from './type/throttle'

/**
 * 节流
 * @param fn 逻辑函数
 * @param time 执行逻辑的间隔
 * @returns Function
 */
export const throttle: throttleInterface = (fn: Function, time: number = 1000): Function => {
  let flag: boolean = true
  return function (): void {
    if (flag) {
      setTimeout((): void => {
        fn()
        flag = true
      }, time)
    }
    flag = false
  }
}
