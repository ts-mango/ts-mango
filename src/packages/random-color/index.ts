/**
 * 生成随机颜色
 * @returns string
 */
export const randomColor = (): string => {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')
}
