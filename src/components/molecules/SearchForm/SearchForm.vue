<script setup lang="ts">
import { ref } from 'vue';
import Input from '@/components/atoms/Input/Input.vue';
import Button from '@/components/atoms/Button/Button.vue';

const { modelValue } = defineProps<{
  modelValue: string
}>()
defineEmits<{ (name: 'update:modelValue', value: string): void }>()

</script>

<template>
  <form class="searchWrapper">
    <Input :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)" />
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
