import type { dateFormatInterface } from './type/dateFormat'
import type { configInterface } from './type/dateConfig'
import { getType } from './getType'
import { onTypeError } from './utils/onError'
import { dateConfig } from './utils/dateConfig'

/**
 * 获取当前的时间
 * @param date 日期对象
 * @param format 日期格式
 * @returns 指定格式的日期
 */
export const dateFormat: dateFormatInterface = (date: Date, format: string = 'YYYY-MM-DD HH:mm:ss'): string => {
  if (getType(date) !== '[object Date]') {
    onTypeError('dateFormat', 'The first parameter is not of type Date')
  }
  const config: configInterface = dateConfig(date)
  for (const key in config) {
    format = format.replace(key, config[key])
  }
  return format
}