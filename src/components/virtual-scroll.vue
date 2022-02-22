<template>
  <div class="virtual-scroll-container">
    <div class="virtual-list" :style="`height:1000px`"></div>
    <div class="container-list">
      <div class="list-item" v-for="item in visitData" :key="item.id" :ref="setItemRef">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, defineProps, withDefaults } from "vue";
export interface ItemType{
  id: number
  title: string
  content: string
}
const props = withDefaults(defineProps<{
  initCount: number
  dataList: ItemType[]
  height: number
  beforeItem: number
  afterItem: number
}>(), {
  beforeItem: 2,
  afterItem: 2
})

const itemRefs = ref([])

function setItemRef(el) {
  if (el) itemRefs.value.push(el)
}
const visitData = props.dataList.slice(0, props.initCount)
console.log(visitData)
onMounted(() => {
  nextTick(() => {
    // console.log(slotRef)

  })
})
</script>

<script lang="ts">
  export default {
    name: 'virtual-scroll'
  }
</script>

<style scoped lang="less">
.virtual-scroll-container{
  position: relative;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  overflow: auto;
}

.virtual-list{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}

.container-list{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
</style>
