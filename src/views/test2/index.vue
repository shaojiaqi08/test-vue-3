<script setup lang="ts">
    import Test3 from '@/views/test3/index.vue'
    function getRandom(){
      return Math.ceil(Math.random() * 100)
    }
</script>

<template>
  1231
  <a-button type="primary">Primary Button</a-button>
  <Test3 :random="getRandom()"/>
</template>

<style scoped>

</style>
