<script lang="ts" setup>
import { ref } from 'vue'

const text = ref<string>('Heading')
</script>

<template>
  <h1 class="">{{ text }}</h1>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
}
</style>
