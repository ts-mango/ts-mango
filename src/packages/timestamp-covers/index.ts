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
  return config
}

/**
 * 将时间戳转换为指定时间格式
 * @param times 时间戳
 * @param format 日期格式
 * @returns 指定日期格式
 */
export const timestampCovers = (times: number | string, format = 'YYYY-MM-DD HH:mm:ss'): string => {
  const date: Date = new Date(parseInt(times.toString()))
  const config: any = dateConfig(date)
  for (const key in config) {
    format = format.replace(key, config[key])
  }
  return format
}
