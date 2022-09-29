export const sidebar = {
  '/packages/': [
    {
      text: '类型',
      items: [
        { text: 'getType 获取数据类型', link: '/packages/get-type/index' },
        { text: 'isArray 是否为数组', link: '/packages/is-array/index' },
        { text: 'isNumber 是否为数字', link: '/packages/is-number/index' },
        { text: 'isString 是否为字符串', link: '/packages/is-string/index' },
        { text: 'isNull 是否为 null', link: '/packages/is-null/index' },
        { text: 'isUndefined 是否为 undefined', link: '/packages/is-undefined/index' },
        { text: 'isObject 是否为对象', link: '/packages/is-object/index' },
        { text: 'judge-true 判断值是真假', link: '/packages/judge-true/index' },
      ]
    },
    {
      text: '数字',
      items: [
        { text: 'keepDecimal 保留小数点', link: '/packages/keep-decimal/index' },
      ]
    },
    {
      text: '数组',
      items: [
        { text: 'arrayDeduct', link: '/packages/array-deduct/index' },
        { text: 'arrayMereDeduct', link: '/packages/array-mere-deduct/index' },
      ]
    },
    {
      text: '时间',
      items: [
        { text: 'currentDate 获取当前的时间', link: '/packages/current-date/index' },
        { text: 'pastTime 计算时间过去了多久', link: '/packages/past-time/index' },
        { text: 'timestampCovers 将时间戳转换为正常时间', link: '/packages/timestamp-covers/index' },
      ]
    },
    {
      text: '函数',
      items: [
        { text: 'debounce 防抖', link: '/packages/debounce/index' },
        { text: 'throttle 节流', link: '/packages/throttle/index' },
      ]
    },
    {
      text: '对象',
      items: [
        { text: 'shallowClone 浅克隆', link: '/packages/shallow-clone/index' },
        { text: 'deepClone 深克隆', link: '/packages/deep-clone/index' },
      ]
    },
    {
      text: '随机',
      items: [
        { text: 'randomColor 随机颜色', link: '/packages/random-color/index' },
        { text: 'randomNine 0~9 随机数', link: '/packages/random-nine/index' },
        { text: 'randomNine 自定义范围随机数', link: '/packages/random-number/index' },
        { text: 'randomString 随机字符串', link: '/packages/random-string/index' },
      ]
    },
    {
      text: '杂项',
      items: [
        { text: 'removeStorage 移除本地存储', link: '/packages/remove-storage/index' },
        { text: 'setStorage 设置本地存储', link: '/packages/set-storage/index' },
      ]
    }
  ]
}
