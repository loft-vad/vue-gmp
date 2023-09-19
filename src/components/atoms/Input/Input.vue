<script setup lang="ts">
import { ref } from 'vue'
const searchText = ref('')
defineProps(['modelValue']) // defineModel - TODO
defineEmits<{ (name: 'update:modelValue', value: string): void }>()
</script>

<template>
  <input type="text" placeholder="Enter text to search" :value="modelValue"
    @input="$emit('update:modelValue', $event.target?.value as string)">
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
