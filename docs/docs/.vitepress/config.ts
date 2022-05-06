import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'

const config = {
  title: 'TsMango',
  base: '/mango/',
  description: 'TsMango 是一个用 typescript 编写的实用函数库。（TsMango is a utility function library written in typescript.）',
  themeConfig: {
    nav,
    sidebar
  }
}

export default config
