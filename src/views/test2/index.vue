<script setup lang="ts">
  import {reactive} from 'vue'
  import VirtualScroll from '@/components/virtual-scroll.vue'
  import ListItem from './list-item.vue'
  interface DataType {
    list: Array<ItemType | null>
  }
  interface ItemType{
    id: number
    title: string
    content: string
  }
  const data: DataType = reactive({
    list: []
  })

  for(let i = 0; i < 1000; i++){
    data.list.push({
      id: i,
      title: `标题${i}`,
      content: `内容${i}`,
    })
  }
</script>

<template>
  <div class="page-container">
    <VirtualScroll>
      <list-item v-for="item in data.list" :key="item.id" :data="item"/>
    </VirtualScroll>
  </div>
</template>

<style scoped lang="less">
  .page-container{
    width: 375px;
    height: 800px;
    border: 1px solid #333;
  }
</style>
