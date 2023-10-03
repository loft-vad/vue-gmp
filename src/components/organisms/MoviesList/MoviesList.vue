<script lang="ts" setup>
import MovieTile from '@/components/molecules/MovieTile/MovieTile.vue';
import { useSearch } from '@/composables/search';
import { onMounted, ref } from 'vue';

// export interface Movie {
//   id: string,
//   title: string,
//   duration?: number,
//   description?: string
// }

export interface MovieAPI {
  year: string,
  genres: string[],
  ratings: number[],
  poster: string,
  contentRating: number,
  duration: string,
  releaseDate: string,
  averageRating: number,
  storyline: string,
  actors: string[],
  imdbRating: number,
  posterurl: string,
  id: number,
  title: string
}

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
  items: MovieAPI[]
}

const { items } = defineProps<Props>()
</script>

<template>
  <div class="moviesList">
    <MovieTile v-for="(item, index) in items" :key="item.id" :movie="item" />
  </div>
  <div v-if="!items?.length">
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