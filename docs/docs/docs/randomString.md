# randomString

## 引入

```ts
import { randomString } from 'tsmango'
```

## 介绍

`randomString` 可以获取指定位数的随机字符串

## 参数

- `length: number`：指定位数
- `chars?: string`：随机的指定字符

如果不传递 `chars` 参数，则默认为：`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`

## 返回

`string`

## 例子

```ts
import { randomString } from 'tsmango'

console.log(randomString(6)) // F4QLUf
console.log(randomString(6, '-][;[..;[;.;]!@##$%&*(()))')) // &@).]&
```
