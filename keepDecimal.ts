/**
 * 保留小数点后 n 位
 * @param num 带有小数的数字
 * @param no 保留位数
 * @returns 转换结果
 */
export const keepDecimal = (num: number, no: number = 2): number => {
  if (typeof num !== 'number') {
    num = Number(num)
  }
  return Number(num.toFixed(no))
}
