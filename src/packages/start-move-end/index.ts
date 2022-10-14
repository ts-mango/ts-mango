/**
 * 把数组的第一项放到最后一项
 * @param arr 
 * @returns 
 */
export const startMoveEnd = (arr: []): [] => {
  return arr.unshift(arr.pop())
}
