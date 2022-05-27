import type { dateFormatInterface } from './type'
import type { configInterface } from './type'
import { getType } from './getType'
import { onTypeError } from './utils'
import { dateConfig } from './utils'

/**
 * 获取当前的时间
 * @param date 日期对象
 * @param format 日期格式
 * @returns 指定格式的日期
 */
export const dateFormat: dateFormatInterface = (date: Date, format: any = 'YYYY-MM-DD HH:mm:ss'): string => {
  if (getType(date) !== '[object Date]') {
    onTypeError('dateFormat', 'The first parameter is not of type Date')
  }
  const config: any = dateConfig(date)
  for (const key in config) {
    format = format.replace(key, config[key])
  }
  return format
}
