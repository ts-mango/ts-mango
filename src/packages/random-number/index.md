# randomNumber

## 引入

```ts
import { randomNumber } from 'ts-mango'
```

## 介绍

`randomNumber` 可以获取指定范围内的随机数

## 参数

参数取值范围为：包含最小值，但不包含最大值

- `max: number`：随机数范围的最大值
- `min: number`：随机数范围的最小值

## 返回

`number`

## 例子

```ts
import { randomNumber } from 'ts-mango'

console.log(randomNumber(10, 20)) // 12
```
