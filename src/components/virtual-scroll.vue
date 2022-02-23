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
/**
 * 1. 传入每项预设高度initItemHeight
 * 2. 通过预设高度计算出页面最大高度totalHeight
 * 3. 渲染完成后，将当前item的高度缓存，并将真实高度替换缓存高度，然后重新计算totalHeight
 * 4. 滚动时，根据页面滚动的高度查找渲染的dom元素，如果dom元素已经被缓存，则使用缓存高度，否则使用预设高度渲染，等到渲染完成再替换成真实高度
 */
import { ref, withDefaults, Ref, onBeforeUpdate, computed, reactive, onMounted, nextTick } from "vue";

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
  initItemHeight: number
  initCount: number
}>(), {
  beforeItem: 2,
  afterItem: 2
})

const elPositions = reactive({
  position: []
})

const itemRefs: Ref<HTMLElement[] | null[]> = ref([])

// const visitHeight = computed(() => props.height)

const totalHeight = computed(() => props.dataList.length * props.initItemHeight)

// const visitCount = computed(() => Math.ceil(visitHeight.value / 56))

const visitData = computed(() => props.dataList.slice(startIdx.value, endIdx.value))

let transHeight = ref<number>(0)

let startIdx = ref<number>(0)

let endIdx = ref<number>(props.initCount)

function setItemRef (el) {
  if (el) itemRefs.value.push(el)
}

function scrollHandel (e) {
  // const scrollTop = e.target.scrollTop
  // startIdx.value = Math.floor(scrollTop / 56)
  // endIdx.value = 1 + startIdx.value + visitCount.value
  // transHeight.value = scrollTop - (scrollTop % 56)
}

onMounted(() => {
  nextTick(() => {
    itemRefs.value.forEach(item => {
      elPositions.position.push({
        top: item.offsetTop,
        height: item.offsetHeight
      })
    })
  })
})

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
