<script lang="ts" setup>
import { reactive } from 'vue'
import { DataType } from './types.ts'
import ListItem from './list-item.vue'
import VirtualScroll from '@/components/virtual-scroll.vue'

const data: DataType = reactive({
  list: []
})

for (let i = 0; i < 1000; i++) {
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
      <list-item v-for="item in data.list" :key="item.id">
        <div>
          <h3>{{ item.title }}</h3>
          <span>{{ item.content }}</span>
        </div>
      </list-item>
    </virtual-scroll>
  </div>
</template>

<style lang="less" scoped>
.page-container {
  width: 375px;
  height: 800px;
  border: 1px solid #333;
}
</style>
