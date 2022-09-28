# isNumber

## 引入

```ts
import { isNumber } from 'ts-mango'
```

## 介绍

`isNumber` 可以检测一个数据是否为一个数字

## 参数

- `target: unknown`：要检测的数据

## 返回

`boolean`

## 例子

```ts
import { isNumber } from 'ts-mango'

console.log(isNumber(1)) // true
console.log(isNumber({})) // false
```
