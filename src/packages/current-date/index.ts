import { getType } from '../get-type'

/**
 * 返回日期对象
 * @param date 日期对象
 * @returns 日期对象数组
 */
const dateConfig = (date: Date) => {
  const config = {
    'YYYY': date.getFullYear(),
    'MM': date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
    'DD': date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
    'HH': date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
    'mm': date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
    'ss': date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  }
  console.log(config)
  return config
}

/**
 * 获取当前的时间
 * @param date 日期对象
 * @param format 日期格式
 * @returns 指定格式的日期
 */
export const currentDate = (date: Date, format: any = 'YYYY-MM-DD HH:mm:ss'): string => {
  // if (getType(date) !== '[object Date]') {
  //   onTypeError('dateFormat', 'The first parameter is not of type Date')
  // }
  const config: any = dateConfig(date)
  for (const key in config) {
    format = format.replace(key, config[key])
  }
  return format
}