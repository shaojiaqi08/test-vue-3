<script setup lang="ts">
  import { ref } from 'vue'
  import Test3 from '@/views/test3/index.vue'

  function getRandom () {
    return Math.ceil(Math.random() * 100)
  }

  let num = ref<number>(getRandom())

  setTimeout(() => {
    num.value = getRandom()
    // console.log(num)
  }, 2000)
</script>

<template>
  <Test3 :random="num"/>
</template>

<style scoped>

</style>
