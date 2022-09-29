import type { RemoveStorageInterface } from './interface'

/**
 * 删除本地存储数据
 * @param name 本地存储名称
 */
export const removeStorage: RemoveStorageInterface = (name: string): void => {
  window.localStorage.removeItem(name)
}
