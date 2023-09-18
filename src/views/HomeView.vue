<script setup lang="ts">
import MoviesList, { type Movie } from '@/components/organisms/MoviesList/MoviesList.vue';
import moviesJson from '@/data/moviesJson.json'

const items: Movie[] = moviesJson

</script>

<template>
  <main class="content">
    <div class="searchFilter">
    </div>
    <div>
      <MoviesList :items="items" />
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