export const sidebar = {
  '/docs/': [
    {
      text: '开始使用',
      link: 'docs/start',
      items: [
        { text: '快速上手', link: 'docs/start' },
        { text: '更新日志', link: 'docs/CHANGELOG' },
        { text: '贡献指南', link: 'docs/CONTRIBUTING' }
      ]
    },
    {
      text: '数字',
      link: 'docs/keepDecimal',
      items: [
        { text: '保留小数点 n 位', link: 'docs/keepDecimal' },
        { text: '指定范围随机数', link: 'docs/randomNum' },
        { text: '获取 0-9 随机数', link: 'docs/witTenNum' }
      ]
    },
    {
      text: '字符串',
      link: 'docs/randomString',
      items: [
        { text: '随机字符串', link: 'docs/randomString' },
        { text: '随机颜色', link: 'docs/randomColor' }
      ]
    },
    {
      text: '数组',
      link: 'docs/uniqueArray',
      items: [
        { text: '数组去重', link: 'docs/uniqueArray' },
        { text: '合并并去重', link: 'docs/mergeArrayRepeat' },
        { text: '检测数组是否存在某个值', link: 'docs/isArrHave' }
      ]
    },
    {
      text: '对象',
      link: 'docs/shallowClone',
      items: [
        { text: '浅克隆', link: 'docs/shallowClone' },
        { text: '深克隆', link: 'docs/deepClone' }
      ]
    },
    {
      text: '函数',
      link: 'docs/debounce',
      items: [
        { text: '防抖', link: 'docs/debounce' },
        { text: '节流', link: 'docs/throttle' }
      ]
    },
    {
      text: '类型',
      link: 'docs/isType',
      items: [
        { text: '获取数据类型', link: 'docs/getType' },
        { text: '检测一个值是否是 null', link: 'docs/isNull' },
        { text: '检测一个值是否是 number', link: 'docs/isNumber' },
        { text: '检测一个值是否是 string', link: 'docs/isString' },
        { text: '检测一个值是否是 object', link: 'docs/isObject' },
        { text: '检测一个值是否是 array', link: 'docs/isArray' },
        { text: '检测一个值是否是 undefined', link: 'docs/isUndefined' },
        { text: '检测一个值是否为真', link: 'docs/isTf' }
      ]
    },
    {
      text: '时间',
      link: 'docs/pastTime',
      items: [
        { text: '计算时间过去多久', link: 'docs/pastTime' },
        { text: '将时间戳转换为正常的时间', link: 'docs/nowTime' },
        { text: '获取当前的时间', link: 'docs/dateFormat' }
      ]
    },
    {
      text: '杂项',
      link: 'docs/getStorage',
      items: [
        { text: '获取本地存储', link: 'docs/getStorage' },
        { text: '删除本地存储', link: 'docs/removeStorage' },
        { text: '添加本地存储', link: 'docs/setStorage' },
        { text: '当前是否联网状态', link: 'docs/isOnLine' }
      ]
    }
  ]
}
