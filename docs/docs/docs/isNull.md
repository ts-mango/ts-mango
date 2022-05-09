# isNull

## 引入

```ts
import { isNull } from 'tsmango'
```

## 介绍

`isNull` 可以检测一个值是否为 `null` 数据类型

## 参数

- `target: any`：检测的值

## 返回

`boolean`

## 例子

```ts
import { isNull } from 'tsmango'

let a
let b = null

console.log(isNull(a)) // false
console.log(isNull(b)) // true
```
