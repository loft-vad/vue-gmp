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
const { movies } = storeToRefs(store)

const { querySearch } = defineProps<{
  querySearch?: string
}>()

const { searchTerm, filteredItems: filteredItems } = useSearch()
// const { searchTerm, filteredItems: filteredItems, loading } = useMovies()

const { searchValue } = storeToRefs(store)
searchValue.value = querySearch || ''

</script>

<template>
  <transition name="slide">
    <div>
      <Header title="Find Your Movie" v-model="searchValue" />
      <ActionBar />
      <main class="content">
        <div>
          <MoviesList :items="movies" />
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