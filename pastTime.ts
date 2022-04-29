/**
 * 计算从一个时间到现在过去多久
 * @param { string } time 开始时间 格式为：'2021-01-28 00:00'
 * @returns xx天xx小时xx分钟xx秒
 */
export const pastTime = (time: string): string => {
  const nowStamp: number = new Date().getTime()
  const targetStamp: number = new Date(time.replace(/-/g, '/')).getTime()
  const difference: number = nowStamp - targetStamp
  const allSeconds: number = Math.floor(difference / 1000)
  const allMinutes: number = Math.floor(allSeconds / 60)
  const allHours: number = Math.floor(allMinutes / 60)

  const day: number = Math.floor(allHours / 24)
  const hours: number = allHours % 24
  const minutes: number = allMinutes % 60
  const seconds: number = allSeconds % 60
  return `${day}天${hours}小时${minutes}分钟${seconds}秒`
}
