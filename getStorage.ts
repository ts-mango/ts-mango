import type { getStorageInterface } from './type/getStorage'

/**
 * 获取本地存储
 * @param name 本地存储名称
 */
export const getStorage: getStorageInterface = (name: string): string | object | null => {
  const data: string | null = window.localStorage.getItem(name)
  if (!data) {
    return null
  }
  return JSON.parse(data)
}
