<template></template>

<script lang="ts" setup>
// import TsMango from '../../index'
import { isType } from '../../index'

console.log(isType([], 'Array')) // false
console.log(isType(123, 'Number')) // true
</script>
