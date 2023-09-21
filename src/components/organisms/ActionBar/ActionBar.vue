<script setup lang="ts">
// import SearchForm from '@/components/molecules/SearchForm/SearchForm.vue';
import Switcher from '@/components/molecules/Switcher/Switcher.vue';
import { useMoviesStore } from '@/stores/movies';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

defineEmits<{ (name: 'update:modelValue', value: string): void }>()
const options = ref(['release date', 'rating']);
// const selected = ref(options.value[0]);

const store = useMoviesStore()
const { amount, sortType } = storeToRefs(store)

// <SearchForm :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)" />
</script>

<template>
  <div class="wrapper">
    <div class="counter">
      {{ amount }} movie found
    </div>
    <div>
      <Switcher :values="options" v-model="sortType" label="Sort by" />
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