# arrayMereDeduct

## 引入

```ts
import { arrayMereDeduct } from 'ts-mango'
```

## 介绍

`arrayMereDeduct` 可以将多个数组合并成一个新的数组，并去重，该方法可以传入一个或多个参数

## 参数

- `...target: any[]`：数组元素

## 返回

`unknown[]`

返回新数组，不会改变原数组

## 例子

```ts
import { arrayMereDeduct } from 'ts-mango'

const arr = [1, 2, 3]
const arr2 = [1, 1, '2', '2', 'mango']

const res = arrayMereDeduct(arr, arr2) // [1, 2, 3, '2', 'mango']
console.log(res)
```
