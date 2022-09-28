# setStorage

## 引入

```ts
import { setStorage } from 'tsmango'
```

## 介绍

`setStorage` 可以设置一个新的本地存储数据

## 参数

- `name: string`：本地存储名称
- `data: any`：本地存储的数据

## 返回

`void`

## 例子

```ts
import { setStorage } from 'tsmango'

console.log(setStorage('name', { name: 'admin' }))
```
