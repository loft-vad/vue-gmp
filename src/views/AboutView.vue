<script lang="ts" setup>
import ActionBar from '@/components/organisms/ActionBar/ActionBar.vue';
import Header from '@/components/organisms/Header/Header.vue';
import { useMoviesStore } from '@/stores/movies';

import { storeToRefs } from 'pinia';
const store = useMoviesStore()
const loadMovies = store.loadMovies

const { searchValue } = storeToRefs(store)

</script>

<template>
  <transition name="slide">
    <div>
      <Header title="Find Your Movie" v-model="searchValue" />
      <ActionBar />
      <main class="content">
        <div>
          No Movies Found
        </div>
      </main>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.content {
  padding: 40px 60px;
  background: $color-black;
}
</style>
