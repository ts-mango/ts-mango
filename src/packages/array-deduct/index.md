# arrayDeduct

## 引入

```ts
import { arrayDeduct } from 'ts-mango'
```

## 介绍

`arrayDeduct` 可以去除数组中重复的元素

## 参数

- `arr: unknown[]`：需要去重的数组

## 返回

`arr: unknown[]`

## 例子

```ts
import { arrayDeduct } from 'ts-mango'

const res = arrayDeduct([1, 1, '2', '2', 'mango'])
console.log(res) // [1, '2', 'mango']
```
