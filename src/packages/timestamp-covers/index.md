# timestampCovers

## 引入

```ts
import { timestampCovers } from 'tsmango'
```

## 介绍

`timestampCovers` 可以将某个时间戳转换为正常的时间格式

## 参数

- `times: string | number`：时间戳
- `format: string = 'YYYY-MM-DD HH:mm:ss'`：时间格式

第二个参数可以自定义返回的格式类型，其中 `YYYY` `MM` `DD` `HH` `mm` `ss` 必须严格遵守大小写格式才可以正常工作

## 返回

`string`

## 例子

```ts
import { timestampCovers } from 'tsmango'

console.log(timestampCovers(324242432432)) // 1980-04-11 03:20:32
console.log(timestampCovers(1213242134434, 'YYYY/MM/DD')) // 2008/06/12
```
