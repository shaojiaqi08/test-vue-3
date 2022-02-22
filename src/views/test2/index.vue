<script lang="ts" setup>
import { reactive } from 'vue'
import { DataType } from './types.ts'
import ListItem from './list-item.vue'
import VirtualScroll from '@/components/virtual-scroll.vue'

const data: DataType = reactive({
  list: []
})

for (let i = 0; i < 100; i++) {
  data.list.push({
    id: i,
    title: `标题${ i }`,
    content: `内容${ i }`,
  })
}
</script>

<template>
  <div class="page-container">
    <virtual-scroll :data-list="data.list" :height="798" :before-item="2" :after-item="2">
      <template #default="{item}">
        <div class="item">
          <h3>{{ item.title }}</h3>
          <span>{{ item.content }}</span>
        </div>
      </template>
    </virtual-scroll>
  </div>
</template>

<style lang="less" scoped>
.page-container {
  width: 375px;
  height: 800px;
  border: 1px solid #333;
  position: relative;
  overflow: hidden;

  .item{
    height: 56px;
  }
}
</style>
