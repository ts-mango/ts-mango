import type { keepDecimalInterface } from '@ts-mango/type'
import { onTypeError } from '@ts-mango/utils'
import { isNumber } from './isNumber'

/**
 * 保留小数点后 n 位
 * @param num 带有小数的数字
 * @param no 保留位数
 * @returns 转换结果
 */
export const keepDecimal: keepDecimalInterface = (
  num: number,
  no: number = 2
): number => {
  if (!isNumber(num)) {
    onTypeError('keepDecimal', 'num is not a number')
  }
  return Number(num.toFixed(no))
}
