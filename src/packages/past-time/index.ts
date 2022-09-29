/**
 * 计算从一个时间到现在过去多久
 * @param time 开始时间 格式为：'2021-01-28 00:00'
 * @returns xx天xx小时xx分钟xx秒
 */
export const pastTime = (time: string, format = 'DD天HH小时MM分钟SS秒'): string => {
  const now: number = new Date().getTime()
  const target: number = new Date(time.replace(/-/g, '/')).getTime()
  const diff: number = now - target

  const SECONDS: number = Math.floor(diff / 1000)
  const MINUTES: number = Math.floor(SECONDS / 60)
  const HOURS: number = Math.floor(MINUTES / 60)

  const config = {
    DD: Math.floor(HOURS / 24),
    HH: HOURS % 24,
    MM: MINUTES % 60,
    SS: SECONDS % 60
  }

  for (const key in config) {
    format = format.replace(key, config[key])
  }
  return format
}
