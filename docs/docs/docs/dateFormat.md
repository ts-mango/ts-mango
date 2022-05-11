# dateFormat

## 引入

```ts
import { dateFormat } from 'tsmango'
```

## 介绍

`dateFormat` 可以将当前的时间转换为指定格式的时间格式

## 参数

- `date: Date`：日期对象
- `format: string = 'YYYY-MM-DD HH:mm:ss'`：日期格式

## 返回

`string`

## 例子

```ts
import { dateFormat } from 'tsmango'

const now = new Date()

console.log(dateFormat(now)) // 2022-05-11 16:00:13
console.log(dateFormat(now, 'YYYY-MM-DD')) // 2022-05-11
console.log(dateFormat(now, 'YYYY年MM月DD日')) // 2022年05月11日
```
