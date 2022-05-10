# getType

## 引入

```ts
import { getType } from 'tsmango'
```

## 介绍

`getType` 可以获得一个数据的数据类型

## 参数

- `target: unknown`：要检测的数据

## 返回

`string`

## 例子

```ts
import { getType } from 'tsmango'

console.log(getType(1)) // [Object Number]
console.log(getType({})) // [Object Object]
```
