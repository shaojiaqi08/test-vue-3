<template>
  <div class="home">
    <a-button type="primary">Primary Button</a-button>
  </div>
</template>

<script setup lang="ts">
import {onMounted, computed} from 'vue'
import {useStore} from 'vuex'
const store = useStore()

onMounted(() => {
    store.dispatch('user/changeUserInfo')
    console.log(userInfo.value.token)
})

const userInfo = computed(() => store.state.user.userInfo)

</script>

<style scoped>

</style>
