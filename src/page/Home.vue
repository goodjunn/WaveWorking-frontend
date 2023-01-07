<script setup>
//
</script>

<template>
  <h1>{{ $t('hello') }}</h1>
  <div>
    Home.vue 這裡是首頁
  </div>
  <router-link
    :to="`/Channel`"
    class="text-blue-600"
  >
    進入音樂頻道
  </router-link>
</template>

<style scoped>
</style>
