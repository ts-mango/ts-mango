# debounce

## 引入

```ts
import { debounce } from 'tsmango'
```

## 介绍

`debounce` 是一个防抖函数。用于在需要执行一些操作，如果不加以限制，就会执行很多次的逻辑，这对性能是有很大的损耗的，那么防抖就用在对于短时间内连续触发的事件。在事件停止后的 `delay` 时间后触发逻辑。

## 参数

- `handle: Function`：回调参数
- `delay: number = 200`：延时的时间

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
import { debounce } from 'tsmango'

const text = ref('tsmango')

interface updateInterface {
  (e: Event): void
}

const update: updateInterface = debounce((e: Event): void => {
  text.value = (e.target as HTMLInputElement).value
}, 900)
</script>
```
