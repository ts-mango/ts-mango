import { isNumber } from '../is-number'
import { onTypeError } from '../_utils'
import type { KeepDecimalInterface } from './interface'

/**
 * 保留小数点后 n 位
 * @param num 带有小数的数字
 * @param no 保留位数
 * @returns 转换结果
 */
export const keepDecimal: KeepDecimalInterface = (num: number, no = 2): number => {
  if (!isNumber(num)) {
    onTypeError('keepDecimal', 'num is not a number')
  }
  return Number(num.toFixed(no))
}
