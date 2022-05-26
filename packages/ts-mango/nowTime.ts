import type { configInterface } from './type/dateConfig'
import type { nowTimeInterface } from './type/nowTime'
import { dateConfig } from './utils/dateConfig'

/**
 * 将时间戳转换为指定时间格式
 * @param times 时间戳
 * @param format 日期格式
 * @returns 指定日期格式
 */
export const nowTime: nowTimeInterface = (
  times: number | string,
  format: string = 'YYYY-MM-DD HH:mm:ss'
): string => {
  const date: Date = new Date(parseInt(times.toString()))
  const config: any = dateConfig(date)
  for (const key in config) {
    format = format.replace(key, config[key])
  }
  return format
}
