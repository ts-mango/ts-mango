/**
 * 把数组最后一项移到第一项
 * @param arr 
 * @returns 
 */
export const endMoveStart = (arr: []): [] => {
  return arr.push(arr.shift())
}
