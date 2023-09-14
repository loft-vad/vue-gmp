<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/components/atoms/Input/Input.vue';
import Button from '@/components/atoms/Button/Button.vue';
defineProps<{
  searchTerm: string
}>()
</script>

<template>
  <form v-on:submit.prevent="() => console.log(searchTerm)" class="searchWrapper">
    <Input :searchTerm="searchTerm" />
    <Button />
  </form>
</template>

<style scoped lang="scss">
.searchWrapper {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}
</style>
