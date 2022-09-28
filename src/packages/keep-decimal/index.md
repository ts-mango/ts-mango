# keepDecimal

## 引入

```ts
import { keepDecimal } from 'ts-mango'
```

## 介绍

`keepDecimal` 可用于保留小数点后 `n` 位数

## 参数

- `num: number`：带有小数的数字
- `no: number = 2`：保留位数

## 返回

`number`

## 例子

```ts
import { keepDecimal } from 'ts-mango'

console.log(keepDecimal(20.12121, 2)) // 20.12
```
