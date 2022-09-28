# pastTime

## 引入

```ts
import { pastTime } from 'ts-mango'
```

## 介绍

`pastTime` 可以计算从一个时间到现在过去多久

## 参数

- `time: string`：开始时间 格式为：`'2021-01-28 00:00'`
- `format: string = 'DD天HH小时MM分钟SS秒'`：时间格式

第二个参数可以自定义返回的格式类型，其中 `DD` `HH` `MM` `SS` 必须是大写字母

## 返回

`string`

## 例子

```ts
import { pastTime } from 'ts-mango'

console.log(pastTime('2022-5-2 12:20')) // 9天3小时26分钟35秒
console.log(pastTime('1990-5')) // 11698天16小时47分钟12秒
console.log(pastTime('2006-5', 'DD-HH-MM-SS')) // 5854-15-48-10
```
