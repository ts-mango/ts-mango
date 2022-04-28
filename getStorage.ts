/**
 * 获取本地存储
 * @param { string } name 本地存储名称
 */
export const getStorage = (name: string): string => {
  const data: string = window.localStorage.getItem(name)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}
