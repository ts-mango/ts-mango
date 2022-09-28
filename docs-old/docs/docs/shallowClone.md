# shallowClone

## 引入

```ts
import { shallowClone } from 'tsmango'
```

## 介绍

`shallowClone` 可以浅克隆一个对象

## 参数

- `obj: object`：需要克隆的对象

## 返回

`object`

## 例子

```ts
import { shallowClone } from 'tsmango'

const obj = {
  name: 'admin',
  age: 12
}

const clone = shallowClone(obj)

console.log(obj) // {name: 'admin', age: 12}
console.log(clone) // {name: 'admin', age: 12}
console.log(obj === clone) // false
```
