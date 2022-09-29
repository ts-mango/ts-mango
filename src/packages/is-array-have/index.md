# isArrayHave

## 引入

```ts
import { isArrayHave } from 'ts-mango'
```

## 介绍

`isArrayHave` 可以检测数组中是否存在某个值

## 参数

- `arr: any[]`：数组
- `target: any`：要检测的值

## 返回

`boolean`

## 例子

```ts
import { isArrayHave } from 'ts-mango'

console.log(isArrayHave([1, 2, 3], 3)) // true
console.log(isArrayHave(['a', 'b', 'c'], 'c')) // true
console.log(isArrayHave([1, 2, 3], 9)) // false
```
