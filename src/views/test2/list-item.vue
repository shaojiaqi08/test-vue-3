<template>
<div class="list-item">
  <h3>{{ props.data.title }}</h3>
  <span>{{ props.data.content }}</span>
</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
interface dataType{
  id: number
  title: string
  content: string
}
const props = defineProps<{
  data: dataType
}>()

// console.log(props.data)
</script>

<style scoped lang="less">

</style>
