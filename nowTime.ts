import { nowTimeInterface } from './type/nowTime'

/**
 * 将时间戳转换为真正的时间格式
 * @param times 时间戳
 * @returns xxxx年 xx月 xx日 xx时 xx分 xx秒
 */
export const nowTime: nowTimeInterface = (times: string | number): string => {
  const date: Date = new Date(parseInt(times.toString()))
  const Y: number = date.getFullYear()
  const M: string | number = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const D: string | number = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const H: string | number = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const Mi: string | number = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const S: string | number = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return `${Y}年 ${M}月 ${D}日 ${H}时 ${Mi}分 ${S}秒`
}
