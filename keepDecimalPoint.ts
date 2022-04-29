/**
 * 保留小数点后 n 位
 * @param { number } num 小数
 * @param { number } no 保留位数
 * @returns 转换结果
 */
export const keepDecimalPoint = (num: number, no: number = 2): number => {
  if (typeof num !== 'number') {
    num = Number(num)
  }
  return Number(num.toFixed(no))
}
