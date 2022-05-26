<template>
  <VTLink
    :class="{
      VPNavBarMenuLink: true,
      active: isActiveNav(
        page.relativePath,
        item.activeMatch || item.link,
        !!item.activeMatch
      ),
    }"
    :href="item.link"
    :noIcon="true"
  >
    {{ item.text }}
  </VTLink>
</template>

<script lang="ts" setup>
import { VTLink } from '../../core'
import { useData } from 'vitepress'
import { isActiveNav } from '../support/utils'
import { NavItemWithLink } from '../config'

const props = defineProps<{
  item: NavItemWithLink
}>()

const { page } = useData()

// console.log(props.item.activeMatch, props.item.link)
</script>

<style scoped>
.VPNavBarMenuLink {
  display: block;
  padding: 0 12px;
  line-height: calc(var(--vt-nav-height) - 1px);
  font-size: 13px;
  font-weight: 500;
  color: var(--vt-c-text-1);
  transition: color 0.25s;
}

.VPNavBarMenuLink:hover {
  color: rgb(246, 136, 51);
}
.active {
  color: rgb(246, 136, 51);
}
</style>
