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
