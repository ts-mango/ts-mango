export const sidebar = {
  '/packages/': [
    {
      text: '类型',
      link: '/packages/is-array/index',
      items: [
        { text: 'getType', link: '/packages/get-type/index' },
        { text: 'isArray', link: '/packages/is-array/index' },
        { text: 'isNumber', link: '/packages/is-number/index' },
        { text: 'isString', link: '/packages/is-string/index' },
        { text: 'isNull', link: '/packages/is-null/index' },
        { text: 'isUndefined', link: '/packages/is-undefined/index' },
        { text: 'isObject', link: '/packages/is-object/index' },
        { text: 'judge-true', link: '/packages/judge-true/index' },
      ]
    },
    {
      text: '数组',
      // link: '/packages/array-deduct/index',
      items: [
        { text: 'arrayDeduct', link: '/packages/array-deduct/index' },
        { text: 'arrayMereDeduct', link: '/packages/array-mere-deduct/index' },
      ]
    },
    {
      text: '时间',
      items: [
        { text: 'currentDate 获取当前的时间', link: '/packages/current-date/index' }
      ]
    },
    {
      text: '函数',
      items: [
        { text: 'debounce 防抖', link: '/packages/debounce/index' }
      ]
    },
    {
      text: '对象',
      items: [
        { text: 'deepClone 深克隆', link: '/packages/deep-clone/index' }
      ]
    }
  ]
}
