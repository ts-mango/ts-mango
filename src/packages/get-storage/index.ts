import type { GetStorageInterface } from './interface'

/**
 * 获取本地存储
 * @param name 本地存储名称
 */
export const getStorage: GetStorageInterface = (name: string): string | null => {
  const data: string | null = window.localStorage.getItem(name)
  return data
}
