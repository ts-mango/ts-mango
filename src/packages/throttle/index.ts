/**
 * 节流
 * @param handler 逻辑函数
 * @param wait 执行逻辑的间隔
 * @returns Function
 */
export const throttle = (handler: Function, wait: number = 1000): Function => {
  let prev: number = Number(new Date)
  return function (): void {
    const now: number = Number(new Date)
    if (now - prev > wait) {
      handler()
      prev = now
    }
  }
}
