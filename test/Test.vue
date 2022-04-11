<template>
  <div v-for="item in list" :key="item">{{ item }}</div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const list = ref([123, 2])
</script>
