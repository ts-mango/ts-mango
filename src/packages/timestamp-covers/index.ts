import { dateConfig } from '../_utils'
import type { DateConfigReturnInterface } from '../_interface'
import type { TimestampCoversInterface } from './interface'

/**
 * 将时间戳转换为指定时间格式
 * @param times 时间戳
 * @param format 日期格式
 * @returns 指定日期格式
 */
export const timestampCovers: TimestampCoversInterface = (times: number | string, format = 'YYYY-MM-DD HH:mm:ss'): string => {
  const date: Date = new Date(parseInt(times.toString()))
  const config: DateConfigReturnInterface = dateConfig(date)
  for (const key in config) {
    format = format.replace(key, config[key])
  }
  return format
}
