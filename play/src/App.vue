<template>
  <button @click="change" :style="{ color }">点击切换颜色</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import tsmango from '../../index'

const color = ref('')
function change() {
  color.value = tsmango.randomColor()
}
</script>
