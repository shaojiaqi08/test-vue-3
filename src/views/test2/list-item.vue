<template>
<div class="list-item" :ref="setItemRef" v-if="visible">
  <slot></slot>
</div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
let itemRefs = null
let visible = false
const setItemRef = el => {
  if (el) {
    itemRefs = el
  }
}
const intersectionObserver = new IntersectionObserver(function(entries) {
  console.log(entries)
  visible = entries[0].isVisible
});

onMounted(() => {
  nextTick(() => {
    intersectionObserver.observe(itemRefs);
  })
})
</script>

<style scoped lang="less">

</style>
