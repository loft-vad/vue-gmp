<script setup lang="ts">
import MoviesList, { type Movie } from '@/components/organisms/MoviesList/MoviesList.vue';
import Header from '@/components/organisms/Header/Header.vue';
import ActionBar from '@/components/organisms/ActionBar/ActionBar.vue';
import { useSearch } from '@/composables/search';
import { useMovies } from '@/composables/useMovies';
import { useMoviesStore } from '@/stores/movies'
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
const store = useMoviesStore()
const loadMovies = store.loadMovies
const { movies } = storeToRefs(store)

const { searchTerm, filteredItems: filteredItems } = useSearch()
// const { searchTerm, filteredItems: filteredItems, loading } = useMovies()

const { searchValue } = storeToRefs(store)

onMounted(() => {
  loadMovies()
})
</script>

<template>
  <Header title="Find Your Movie" v-model="searchValue" />
  <ActionBar />
  <main class="content">
    <div>
      <MoviesList :items="movies" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.content {
  padding: 40px 60px;
  background: $color-black;
}
</style>