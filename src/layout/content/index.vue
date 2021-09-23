<template>
  <a-layout :style="{ marginLeft: '200px' }">
    <a-layout-header :style="{ background: '#fff', padding: 0 }" />
    <a-layout-content :style="{ margin: '24px 16px 24px', 'overflow-y': 'auto', background: '#fff', height: 'calc(100vh - 64px - 48px)'}">
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
