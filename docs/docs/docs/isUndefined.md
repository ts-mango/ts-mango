# isUndefined

## 引入

```ts
import { isUndefined } from 'tsmango'
```

## 介绍

`isUndefined` 可以判断一个值是否为 `undefined`

## 参数

- `target: unknown`：要判断的值

## 返回

`boolean`

## 例子

```ts
import { isUndefined } from 'tsmango'

console.log(isUndefined(undefined)) // true
console.log(isUndefined(123)) // false
```
