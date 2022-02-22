<script lang="ts" setup>
import { reactive } from 'vue'
import { DataType } from './types.ts'
import ListItem from './list-item.vue'
import VirtualScroll from '@/components/virtual-scroll.vue'

const data: DataType = reactive({
  list: []
})
let content = ``
let temp = 'Invalid string length'
for (let i = 0; i < 100; i++) {
  content = content + temp
  data.list.push({
    id: i,
    title: `标题${ i }`,
    content: content,
  })
}
</script>

<template>
  <div class="page-container">
    <virtual-scroll :init-count="10" :data-list="data.list" :height="798" :before-item="2" :after-item="2">
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
}
</style>
