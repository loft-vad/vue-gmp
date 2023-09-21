<script setup lang="ts">
import SearchForm from '@/components/molecules/SearchForm/SearchForm.vue';
import Switcher from '@/components/molecules/Switcher/Switcher.vue';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useMoviesStore } from '@/stores/movies'

const { title, modelValue } = defineProps<{
  title: string,
  modelValue: string
}>()
defineEmits<{ (name: 'update:modelValue', value: string): void }>()
const options = ref(['title', 'genre']);

const store = useMoviesStore()
const { searchType } = storeToRefs(store)
</script>

<template>
  <header>
    <div class="headerWrapper">
      <div class="headerBar">
        <div class="logoSmall">
          <img alt="Vue logo" class="logo" src="@/assets/logo-small.svg" width="125" height="125" />
        </div>
      </div>
      <div class="header-actions">
        <h1>{{ title }} {{ modelValue }}</h1>
        <SearchForm :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)" />
        <Switcher :values="options" v-model="searchType" label="Search by" />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background: url(../../../assets/movies-header-bg.jpg) no-repeat center center;
  overflow: hidden;
  background-size: 98%;
  height: 450px;

  .headerWrapper {
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    height: 100%;
    padding: 20px 60px;

    h1 {
      padding-bottom: 18px;
    }

    .logoSmall {
      color: $color-primary;
    }

    .headerBar {
      display: flex;
      justify-content: space-between;
      padding-bottom: 35px;
    }

    .header-actions {
      display: flex;
      flex-flow: column;
      gap: 20px;
    }

    &>div:last-child {
      padding: 0 60px;
    }
  }
}
</style>