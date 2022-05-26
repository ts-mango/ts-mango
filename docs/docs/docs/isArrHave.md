# isArrHave

## 引入

```ts
import { isArrHave } from 'tsmango'
```

## 介绍

`isArrHave` 可以检测数组中是否存在某个值

## 参数

- `arr: any[]`：数组
- `target: any`：要检测的值

## 返回

`boolean`

## 例子

```ts
import { isArrHave } from 'tsmango'

console.log(isArrHave([1, 2, 3], 3)) // true
console.log(isArrHave(['a', 'b', 'c'], 'c')) // true
console.log(isArrHave([1, 2, 3], 9)) // false
```
