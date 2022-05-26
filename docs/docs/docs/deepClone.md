# deepClone

## 引入

```ts
import { deepClone } from 'tsmango'
```

## 介绍

`deepClone` 用于深度克隆一个对象或者数组

## 参数

- `object | unknown[]`：需要克隆的对象或者数组

## 返回

`object | unknown[]`

## 例子

```ts
import { deepClone } from 'tsmango'

const obj = {
  name: 'admin',
  age: 12,
  arr: [1, 2, 3, 4],
}

const clone = deepClone(obj)

console.log(obj) // {name: 'admin', age: 12, arr: Array(4)}
console.log(clone) // {name: 'admin', age: 12, arr: Array(4)}
console.log(obj === clone) // false
console.log(obj.arr === clone.arr) // false
```
