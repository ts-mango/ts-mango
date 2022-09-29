import type { SetStorageInterface } from './interface'

/**
 * 添加本地存储
 * @param name 本地存储名称
 * @param data 本地存储的数据
 */
export const setStorage: SetStorageInterface = (name: string, data: string | object): void => {
  if (typeof data === 'object') {
    data = JSON.stringify(data)
  }
  window.localStorage.setItem(name, data)
}
