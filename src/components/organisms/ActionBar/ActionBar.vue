<script setup lang="ts">
// import SearchForm from '@/components/molecules/SearchForm/SearchForm.vue';
import Switcher from '@/components/molecules/Switcher/Switcher.vue';
import { useMoviesStore } from '@/stores/movies';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const { values } = defineProps<{
  values?: [] | undefined,
}>()
defineEmits<{ (name: 'update:modelValue', value: string): void }>()
const options = ref(['Release date', 'Rating']);
const selected = ref(options.value[0]);

const store = useMoviesStore()
const { amount } = storeToRefs(store)

// <SearchForm :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)" />
</script>

<template>
  <div class="wrapper">
    <div class="counter">
      {{ amount }} movie found
    </div>
    <div>
      <Switcher :values="options" v-model="selected" label="Sort by" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: $color-secondary;
  padding: 20px 60px;

  .counter {
    font-weight: bold;
  }
}
</style>