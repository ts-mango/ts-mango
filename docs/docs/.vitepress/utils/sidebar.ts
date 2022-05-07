export const sidebar = [
  {
    text: '数组',
    children: [
      { text: '深克隆', link: '/docs/deepClone' },
      { text: '数组去重', link: '/docs/uniqueArray' },
      { text: '合并并去重', link: '/docs/mergeArrayRepeat' },
    ]
  },
  {
    text: '字符串',
    children: [
      { text: '随机字符串', link: '/docs/randomString' },
    ]
  },
  {
    text: '数字',
    children: [
      { text: '保留小数点 n 位', link: '/docs/keepDecimal' },
      { text: '指定范围随机数', link: '/docs/randomNum' },
      { text: '获取 0-9 随机数', link: '/docs/witTenNum' },
    ]
  },
  {
    text: '函数',
    children: [
      { text: '防抖', link: '/docs/debounce' },
      { text: '节流', link: '/docs/throttle' },
    ]
  },
  {
    text: '对象',
    children: [
      { text: '对象浅克隆', link: '/docs/shallowClone' },
    ]
  },
  {
    text: '时间',
    children: [
      { text: '计算时间过去多久', link: '/docs/pastTime' },
      { text: '将时间戳转换为正常的时间', link: '/docs/nowTime' },
    ]
  },
  {
    text: '杂项',
    children: [
      { text: '获取本地存储', link: '/docs/getStorage' },
      { text: '删除本地存储', link: '/docs/removeStorage' },
      { text: '添加本地存储', link: '/docs/setStorage' },
    ]
  }
]