/**
 * 添加本地存储
 * @param { string } name 本地存储名称
 * @param { string } data 本地存储的数据
 */

type dataType = object | string | number | Array

export const setStorage = (name: string, data: ) => {
  if (typeof data === 'object') {
    data = JSON.stringify(data)
  }
  window.localStorage.setItem(name, data)
}
