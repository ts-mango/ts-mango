import { removeStorageInterface } from './type/removeStorage'

/**
 * 删除本地存储数据
 * @param name 本地存储名称
 */
export const removeStorage: removeStorageInterface = (name: string): void => {
  window.localStorage.removeItem(name)
}
