<template>
  123123123123
</template>

<script lang="ts" setup>
const props = defineProps<{
  random: number
  }>()

console.log(props)

const emit = defindEmits<{
  (e: 'talk', value: string): void
}>()
</script>

<style scoped>

</style>
