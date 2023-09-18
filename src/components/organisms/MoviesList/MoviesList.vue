<script lang="ts" setup>
import MovieTile from '@/components/molecules/MovieTile/MovieTile.vue';
import { useSearch } from '@/composables/search';
import { ref } from 'vue';

// export interface Movie {
//   id: string,
//   title: string,
//   duration?: number,
//   description?: string
// }

export interface Movie {
  Title?: string,
  Year?: string,
  Rated?: string,
  Released?: string,
  Runtime?: string,
  Genre?: string,
  Director?: string,
  Writer?: string,
  Actors?: string,
  Plot?: string,
  Language?: string,
  Country?: string,
  Awards?: string,
  Poster?: string,
  Ratings?: [
    {
      Source?: string,
      Value?: string,
    },
    {
      Source?: string,
      Value?: string,
    },
    {
      Source?: string,
      Value?: string,
    }
  ],
  Metascore?: string,
  imdbRating?: string,
  imdbVotes?: string,
  imdbID?: string,
  Type?: string,
  DVD?: string,
  BoxOffice?: string,
  Production?: string,
  Website?: string,
  Response?: string
}

export interface Props {
  items: Movie[] | []
}

const { items } = defineProps<Props>()
const { searchTerm, filteredItems: filteredItems } = useSearch(items)
</script>

<template>
  <div>
    <input type="text" v-model="searchTerm" />
  </div>
  <div class="moviesList">
    <MovieTile v-for="(item, index) in filteredItems" :movie="item" />
  </div>
  <div v-if="!filteredItems?.length">
    No Movies Found
  </div>
</template>

<style>
.moviesList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 54px;
}
</style>