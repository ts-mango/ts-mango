import type { throttleInterface, returnFunctionInterface } from './type/throttle'

/**
 * 节流
 * @param handler 逻辑函数
 * @param wait 执行逻辑的间隔
 * @returns returnFunctionInterface
 */
export const throttle: throttleInterface = (handler: Function, wait: number = 1000): returnFunctionInterface => {
  let prev: number = Number(new Date)
  return function (): void {
    const now: number = Number(new Date)
    if (now - prev > wait) {
      handler.apply(this, arguments)
      prev = now
    }
  }
}
