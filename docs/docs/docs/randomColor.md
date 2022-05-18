# randomColor

## 引入

```ts
import { randomColor } from 'tsmango'
```

## 介绍

`randomColor` 可以获取随机 HEX 颜色值

## 参数

无参数

## 返回

`string`

## 例子

```html
<template>
  <button @click="change" :style="{ color }">点击切换颜色</button>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { randomColor } from 'tsmango'

  const color = ref('')
  function change() {
    color.value = randomColor()
  }
</script>
```
