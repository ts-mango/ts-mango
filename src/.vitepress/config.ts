import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'

const config = defineConfig({
  title: 'ts-mango',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://tianyuhao.cn/images/ts-mango/ts-mango.svg'
      }
    ]
  ],
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ts-mango/ts-mango'
      }
    ],
    logo: 'https://tianyuhao.cn/images/ts-mango/ts-mango.svg',
    nav,
    sidebar
  }
})

export default config
