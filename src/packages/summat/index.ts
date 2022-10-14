/**
 * 多个数字求和
 * @param args 
 * @returns 
 */
export const summat = (...args): number => {
  return args.reduce((a, b) => a + b)
}
