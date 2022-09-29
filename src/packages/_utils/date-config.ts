import type { DateConfigReturnInterface } from '../_interface'

/**
 * 返回日期对象
 * @param date 日期对象
 * @returns 日期对象数组
 */
export const dateConfig = (date: Date): DateConfigReturnInterface => {
  const config: DateConfigReturnInterface = {
    'YYYY': date.getFullYear(),
    'MM': date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
    'DD': date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
    'HH': date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
    'mm': date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
    'ss': date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  }
  return config
}
