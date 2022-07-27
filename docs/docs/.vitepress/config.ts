import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TsMango',
  base: '/mango/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://tianyuhao.cn/mango/images/mango.svg'
      }
    ]
  ],
  description,
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ts-mango/ts-mango'
      }
    ],
    logo: 'https://tianyuhao.cn/mango/images/mango.svg',
    editLink: {
      pattern: 'https://github.com/ts-mango/ts-mango/blob/master/docs/:path'
    }
  }
})
