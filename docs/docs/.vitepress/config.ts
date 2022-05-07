import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'

const config = {
  title: 'TsMango',
  base: '/mango/',
  head: [
    ['link', { rel: 'icon', href: 'https://tianyuhao.cn/mango/images/mango.png' }]
  ],
  description: 'TsMango 是一个用 typescript 编写的实用函数库。（TsMango is a utility function library written in typescript.）',
  themeConfig: {
    nav,
    sidebar,
    logo: 'https://tianyuhao.cn/mango/images/mango.png'
  }
}

export default config
