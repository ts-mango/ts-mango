<template></template>

<script lang="ts" setup>
// import TsMango from '../../index'
import { isNull } from '../../index'

let a
let b = null

console.log(isNull(a)) // false
console.log(isNull(b)) // true
</script>
