# isType

## 引入

```ts
import { isType } from 'tsmango'
```

## 介绍

`isType` 可检测一条数据是否为某个数据类型

## 参数

```ts
type Type =
  | 'String'
  | 'Number'
  | 'Object'
  | 'Function'
  | 'Boolean'
  | 'Set'
  | 'Map'
  | 'WeakMap'
  | 'WeakSet'
  | 'Date'
  | 'RegExp'
  | 'Array'
  | 'Null'
  | 'Undefined'
```

- `target: unknown`：要检查的数据
- `type: Type`：数据类型

## 返回

`boolean`

## 例子

```ts
import { isType } from 'tsmango'

console.log(isType([], 'String')) // false
console.log(isType(123, 'Number')) // true
```
