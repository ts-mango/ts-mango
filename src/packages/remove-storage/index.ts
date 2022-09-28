/**
 * 删除本地存储数据
 * @param name 本地存储名称
 */
export const removeStorage = (name: string): void => {
  window.localStorage.removeItem(name)
}
