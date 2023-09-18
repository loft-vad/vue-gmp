<script setup lang="ts">
import { ref } from 'vue';
import Input from '@/components/atoms/Input/Input.vue';
import Button from '@/components/atoms/Button/Button.vue';

const { searchText } = defineProps<{
  searchText: string
}>()

</script>

<template>
  <form class="searchWrapper">
    <Input :searchText="searchText" />
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
