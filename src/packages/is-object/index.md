# isObject

## 引入

```ts
import { isObject } from 'ts-mango'
```

## 介绍

`isObject` 可以检测一个数据是否为一个对象

## 参数

- `target: unknown`：要检测的数据

## 返回

`boolean`

## 例子

```ts
import { isObject } from 'ts-mango'

console.log(isObject({})) // true
console.log(isObject('123')) // false
```
