# isNull

## 引入

```ts
import { isNull } from 'ts-mango'
```

## 介绍

`isNull` 可以检测一个值是否为 `null` 数据类型

## 参数

- `target: unknown`：检测的值

## 返回

`boolean`

## 例子

```ts
import { isNull } from 'ts-mango'

let a
let b = null

console.log(isNull(a)) // false
console.log(isNull(b)) // true
```
