import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import getBase from '../../src/vitepress/config/baseConfig'

export default (async () => {
  const base = await getBase()
  return {
    ...base,

    vite: {
      ...base.vite,
      build: {
        minify: false
      }
    },

    title: 'TsMango',
    base: '/mango/',
    head: [
      [
        'link',
        { rel: 'icon', href: 'https://tianyuhao.cn/mango/images/mango.svg' }
      ]
    ],
    description:
      'TsMango 是一个用 typescript 编写的实用函数库。（TsMango is a utility function library written in typescript.）',
    themeConfig: {
      nav,
      sidebar,
      socialLinks: [
        { icon: 'github', link: 'https://github.com/tyh2001/TsMango' }
      ],
      logo: 'https://tianyuhao.cn/mango/images/mango.svg'
    }
  }
})()
