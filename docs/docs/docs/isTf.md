# isTf

## 引入

```ts
import { isTf } from 'tsmango'
```

## 介绍

`isTf` 可以检测一个值的真假性

## 参数

- `target: any`：要检测的值

## 返回

`boolean`

## 例子

```ts
import { isTf } from 'tsmango'

console.log(isTf(undefined)) // false
console.log(isTf(0)) // false
console.log(isTf({})) // true
```
