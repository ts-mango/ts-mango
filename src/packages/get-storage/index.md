# getStorage

## 引入

```ts
import { getStorage } from 'ts-mango'
```

## 介绍

`getStorage` 用于获取本地存储的数据

## 参数

- `name: string`：本地存储名称

## 返回

`string | object | null`

## 例子

```ts
import { getStorage } from 'ts-mango'

console.log(getStorage('name'))
```
