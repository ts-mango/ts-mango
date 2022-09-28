# isString

## 引入

```ts
import { isString } from 'ts-mango'
```

## 介绍

`isString` 可以检测一个数据是否为一个数字

## 参数

- `target: unknown`：要检测的数据

## 返回

`boolean`

## 例子

```ts
import { isString } from 'ts-mango'

console.log(isString('123')) // true
console.log(isString({})) // false
```
