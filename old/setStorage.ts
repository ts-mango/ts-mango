import type { setStorageInterface } from './type'

/**
 * 添加本地存储
 * @param name 本地存储名称
 * @param data 本地存储的数据
 */
export const setStorage: setStorageInterface = (name: string, data: any): void => {
  if (typeof data === 'object') {
    data = JSON.stringify(data)
  }
  window.localStorage.setItem(name, data)
}
