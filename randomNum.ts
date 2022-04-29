/**
 * 获取指定参数范围的随机数
 * 该方法的取值范围为：包含最小值，但不包含最大值
 * @param min 随机数范围的最小值
 * @param max 随机数范围的最大值
 * @returns 指定参数范围的随机数
 */
export const randomNum = (max: number, min: number): number => {
  return Math.floor(Math.random() * (max - min)) + min
}
