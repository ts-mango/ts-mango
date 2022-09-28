# isArray

## 引入

```ts
import { isArray } from 'ts-mango'
```

## 介绍

`isArray` 可以检测一个数据是否为一个数组

## 参数

- `target: unknown`：要检测的数据

## 返回

`boolean`

## 例子

```ts
import { isArray } from 'ts-mango'

console.log(isArray([1, 2, 3])) // true
console.log(isArray({})) // false
```
