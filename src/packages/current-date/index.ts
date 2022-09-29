import { getType } from '../get-type'
import { dateConfig, onTypeError } from '../_utils'
import type { DateConfigReturnInterface } from '../_interface'
import type { CurrentDateInterface } from './interface'

/**
 * 获取当前的时间
 * @param date 日期对象
 * @param format 日期格式
 * @returns 指定格式的日期
 */
export const currentDate: CurrentDateInterface = (date: Date, format = 'YYYY-MM-DD HH:mm:ss'): string => {
  if (getType(date) !== '[object Date]') {
    onTypeError('dateFormat', 'The first parameter is not of type Date')
  }
  const config: DateConfigReturnInterface = dateConfig(date)
  for (const key in config) {
    format = format.replace(key, config[key])
  }
  return format
}
