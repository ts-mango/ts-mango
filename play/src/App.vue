<template></template>

<script lang="ts" setup>
import { dateFormat, getType } from '../../index'

const now = new Date()

console.log(dateFormat(now)) // 2022-05-11 16:00:13
console.log(dateFormat(now, 'YYYY-MM-DD')) // 2022-05-11
console.log(dateFormat(now, 'YYYY年MM月DD日')) // 2022年05月11日
</script>
