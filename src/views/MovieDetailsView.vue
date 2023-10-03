<script setup lang="ts">
import ActionBar from '@/components/organisms/ActionBar/ActionBar.vue';
import MoviesList from '@/components/organisms/MoviesList/MoviesList.vue';
import MovieDetails from '@/components/organisms/MovieDetails/MovieDetails.vue';
import { useMoviesStore } from '@/stores/movies';
import { storeToRefs } from 'pinia';
import { onMounted, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router'
import { searchField } from '@/types/types';
const route = useRoute()

const store = useMoviesStore()
const loadMovies = store.loadMovies
const { movies, searchValue, searchType, selectedMovie, selectedGenre, selectedMovieId } = storeToRefs(store)

const { id } = defineProps<{
  id?: string
}>()

onBeforeMount(() => {
  selectedMovieId.value = id as string;
  searchType.value = searchField.GENRE
});
</script>

<template>
  <transition name="slide">
    <div>
      <MovieDetails :movie="selectedMovie" />
      <ActionBar :moviesGenre="selectedGenre" />
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