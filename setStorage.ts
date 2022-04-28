/**
 * 添加本地存储
 * @param { string } name 本地存储名称
 * @param { string } data 本地存储的数据
 */
export const setStorage = (name: string, data: any): void => {
  if (typeof data === 'object') {
    data = JSON.stringify(data)
  }
  window.localStorage.setItem(name, data)
}
