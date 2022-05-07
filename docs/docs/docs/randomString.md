# randomString

## 引入

```ts
import { randomString } from 'tsmango'
```

## 介绍

`randomString` 可以获取指定位数的随机字符串

## 参数

1. `length: number`：指定位数
2. `chars?: string`：随机的指定字符

如果不传递 `chars` 参数，则默认为：`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`

## 返回

`string`
