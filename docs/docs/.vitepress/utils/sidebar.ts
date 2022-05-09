// export const sidebar = [
//   {
//     text: '数组',
//     children: [
//       { text: '深克隆', link: '/mango/docs/deepClone' },
//       { text: '数组去重', link: '/mango/docs/uniqueArray' },
//       { text: '合并并去重', link: '/mango/docs/mergeArrayRepeat' },
//     ]
//   },
//   {
//     text: '字符串',
//     children: [
//       { text: '随机字符串', link: '/mango/docs/randomString' },
//     ]
//   },
//   {
//     text: '数字',
//     children: [
//       { text: '保留小数点 n 位', link: '/mango/docs/keepDecimal' },
//       { text: '指定范围随机数', link: '/mango/docs/randomNum' },
//       { text: '获取 0-9 随机数', link: '/mango/docs/witTenNum' },
//     ]
//   },
//   {
//     text: '函数',
//     children: [
//       { text: '防抖', link: '/mango/docs/debounce' },
//       { text: '节流', link: '/mango/docs/throttle' },
//     ]
//   },
//   {
//     text: '对象',
//     children: [
//       { text: '对象浅克隆', link: '/mango/docs/shallowClone' },
//     ]
//   },
//   {
//     text: '时间',
//     children: [
//       { text: '计算时间过去多久', link: '/mango/docs/pastTime' },
//       { text: '将时间戳转换为正常的时间', link: '/mango/docs/nowTime' },
//     ]
//   },
//   {
//     text: '杂项',
//     children: [
//       { text: '获取本地存储', link: '/mango/docs/getStorage' },
//       { text: '删除本地存储', link: '/mango/docs/removeStorage' },
//       { text: '添加本地存储', link: '/mango/docs/setStorage' },
//     ]
//   }
// ]

export const sidebar = {
  '/docs/': [
    {
      text: '数组',
      link: '/mango/docs/deepClone',
      items: [
        { text: '深克隆', link: '/mango/docs/deepClone' },
        { text: '数组去重', link: '/mango/docs/uniqueArray' },
        { text: '合并并去重', link: '/mango/docs/mergeArrayRepeat' },
      ]
    },
    {
      text: '字符串',
      link: '/mango/docs/randomString',
      items: [
        { text: '随机字符串', link: '/mango/docs/randomString' },
      ]
    },
    {
      text: '数字',
      link: '/mango/docs/keepDecimal',
      items: [
        { text: '保留小数点 n 位', link: '/mango/docs/keepDecimal' },
        { text: '指定范围随机数', link: '/mango/docs/randomNum' },
        { text: '获取 0-9 随机数', link: '/mango/docs/witTenNum' },
      ]
    },
    {
      text: '函数',
      link: '/mango/docs/debounce',
      items: [
        { text: '防抖', link: '/mango/docs/debounce' },
        { text: '节流', link: '/mango/docs/throttle' },
      ]
    },
    {
      text: '对象',
      link: '/mango/docs/shallowClone',
      items: [
        { text: '对象浅克隆', link: '/mango/docs/shallowClone' },
      ]
    },
    {
      text: '类型',
      link: '/mango/docs/isType',
      items: [
        { text: '检测数据类型', link: '/mango/docs/isType' },
        { text: '判断一个值是否是 null', link: '/mango/docs/isNull' },
      ]
    },
    {
      text: '时间',
      link: '/mango/docs/pastTime',
      items: [
        { text: '计算时间过去多久', link: '/mango/docs/pastTime' },
        { text: '将时间戳转换为正常的时间', link: '/mango/docs/nowTime' },
      ]
    },
    {
      text: '杂项',
      link: '/mango/docs/getStorage',
      items: [
        { text: '获取本地存储', link: '/mango/docs/getStorage' },
        { text: '删除本地存储', link: '/mango/docs/removeStorage' },
        { text: '添加本地存储', link: '/mango/docs/setStorage' },
      ]
    }
  ]
}
