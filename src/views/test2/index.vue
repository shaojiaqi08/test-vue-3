<script setup lang="ts">
  import { reactive } from 'vue'
  import { DataType } from './types.ts'

  const data: DataType = reactive({
    list: []
  })

  for ( let i = 0; i < 1000; i++ ) {
    data.list.push({
      id: i,
      title: `标题${ i }`,
      content: `内容${ i }`,
    })
  }
</script>

<template>
  <div class="page-container">
    <virtual-scroll>
      <list-item v-for="item in data.list" :key="item.id" :data="item"/>
    </virtual-scroll>
  </div>
</template>

<style scoped lang="less">
  .page-container{
    width: 375px;
    height: 800px;
    border: 1px solid #333;
  }
</style>
