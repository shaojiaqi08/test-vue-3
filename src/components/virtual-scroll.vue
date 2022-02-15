<template>
  <div class="virtual-scroll-container">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, nextTick, useSlots, ref } from "vue";

onMounted(() => {
  nextTick(() => {
    console.log(slotRef)
  })
})
defineExpose({
  name: 'virtual-scroll'
})
</script>

<style scoped lang="less">
.virtual-scroll-container{
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
