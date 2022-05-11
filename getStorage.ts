import type { getStorageInterface } from './type/getStorage'

/**
 * 获取本地存储
 * @param name 本地存储名称
 */
export const getStorage: getStorageInterface = (name: string): string | null => {
  const data: string | null | JSON = window.localStorage.getItem(name)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}
