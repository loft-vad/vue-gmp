<script lang="ts" setup>
import { ref } from 'vue'

const searchText = ref('')
</script>

<template>
  <form v-on:submit.prevent="() => console.log(searchText)">
    <input type="text" placeholder="Enter text to search" v-model.trim="searchText">
  </form>
</template>

<style scoped lang="scss">
input {
  background: rgba(50, 50, 50, 0.8);
  mix-blend-mode: normal;
  opacity: 0.7;
  border-radius: 4px;
  width: 100%;
  border: none;
  padding: 17px 19px 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
}
</style>
