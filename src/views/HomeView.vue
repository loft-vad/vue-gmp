<script setup lang="ts">
import MoviesList, { type Movie } from '@/components/organisms/MoviesList/MoviesList.vue';
import Header from '@/components/organisms/Header/Header.vue';
import { useSearch } from '@/composables/search';
import { useMovies } from '@/composables/useMovies';
import { computed, onMounted } from 'vue';

// const { searchTerm, filteredItems: filteredItems } = useSearch()
const { searchTerm, filteredItems: filteredItems, loading } = useMovies()

</script>

<template>
  <Header title="Find Your Movie" v-model="searchTerm" />
  <main class="content">
    <div class="searchFilter">
    </div>
    <div>
      <MoviesList :items="filteredItems" v-if="!loading" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.content {
  padding: 0 60px;
  background: $color-black;
}

.searchFilter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
</style>