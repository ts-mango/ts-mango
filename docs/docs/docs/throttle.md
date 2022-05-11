# throttle

## 引入

```ts
import { throttle } from 'tsmango'
```

## 介绍

`throttle` 是一个处理节流的函数，可控制高频事件逻辑执行的次数，取消高频触发，变为每隔 `wait` 时间后触发一次

## 参数

- `handler: Function`：逻辑函数
- `wait: number = 1000`：执行逻辑的间隔

## 返回

`Function`

## 例子

```vue
<template>
  <input type="text" :value="text" @input="update" />
  <h1>{{ text }}</h1>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { throttle } from '../../index'

const text = ref('tsmango')

interface updateInterface {
  (e: Event): void
}

const update: updateInterface = throttle((e: Event): void => {
  text.value = (e.target as HTMLInputElement).value
}, 900)
</script>
```
