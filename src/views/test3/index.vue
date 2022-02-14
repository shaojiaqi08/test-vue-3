<template>
  123123123123
</template>

<script lang="ts" setup>
  // import {defineEmits, defineProps} from 'vue'
  import {watch} from 'vue'
const props = defineProps<{
  random: number
  }>()

  watch(() => props.random, (newVal) => {
    console.log(props)
  })

console.log(props.random)

// const emit = defineEmits<{
//   (e: 'talk', value: string): void
// }>()
</script>

<style scoped>

</style>
