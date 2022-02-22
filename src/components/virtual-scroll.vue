<template>
  <div class="virtual-scroll-container" @scroll="scrollHandel">
    <div :style="`height:${totalHeight}px`" class="virtual-list"></div>
    <div :style="`top: ${transHeight}px`" class="container-list">
      <div class="list-item" v-for="item in visitData" :key="item.id" :ref="setItemRef">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, withDefaults, Ref, onBeforeUpdate, computed } from "vue";

export interface ItemType {
  id: number
  title: string
  content: string
}

const props = withDefaults(defineProps<{
  dataList: ItemType[]
  height: number
  beforeItem: number
  afterItem: number
  initCount: number
}>(), {
  beforeItem: 2,
  afterItem: 2
})

const itemRefs: Ref<HTMLElement[] | null[]> = ref([])

const visitHeight = computed(() => props.height)

const totalHeight = computed(() => props.dataList.length * 56)

const visitCount = computed(() => Math.ceil(visitHeight.value / 56))

const visitData = computed(() => props.dataList.slice(startIdx.value, endIdx.value))

let transHeight = ref<number>(0)

let startIdx = ref<number>(0)

let endIdx = ref(visitCount.value)

function setItemRef (el) {
  if (el) itemRefs.value.push(el)
}

function scrollHandel (e) {
  const scrollTop = e.target.scrollTop
  startIdx.value = Math.floor(scrollTop / 56)
  endIdx.value = 1 + startIdx.value + visitCount.value
  transHeight.value = scrollTop - (scrollTop % 56)
}

onBeforeUpdate(() => {
  itemRefs.value = []
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

.container-list {
  position: absolute;
  left: 0;
  right: 0;
  //top: 0;
  bottom: 0;
}
</style>
