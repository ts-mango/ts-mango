<template></template>

<script lang="ts" setup>
  // import TsMango from '../../index'
  import { mergeArrayRepeat } from '../../index'

  const arr = [1, 2, 3]
  const arr2 = [1, 1, '2', '2', 'mango']

  const res = mergeArrayRepeat(arr, arr2) // [1, 2, 3, '2', 'mango']
  console.log(res)
</script>
