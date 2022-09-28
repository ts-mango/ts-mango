# judgeTrue

## 引入

```ts
import { judgeTrue } from 'ts-mango'
```

## 介绍

`judgeTrue` 可以检测一个值的真假性

## 参数

- `target: any`：要检测的值

## 返回

`boolean`

## 例子

```ts
import { judgeTrue } from 'ts-mango'

console.log(judgeTrue(undefined)) // false
console.log(judgeTrue(0)) // false
console.log(judgeTrue({})) // true
```
