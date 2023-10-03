<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useMoviesStore } from '@/stores/movies'
import type { MovieAPI } from '../MoviesList/MoviesList.vue';

const { movie } = defineProps<{
  movie?: MovieAPI
}>()

</script>

<template>
  <header>
    <div class="headerWrapper">
      <div class="headerBar">
        <div class="logoSmall">
          <img alt="Vue logo" class="logo" src="@/assets/logo-small.svg" width="125" height="50" />
        </div>
      </div>
      <div class="movieDetailsWrapper">
        <div class="movieImage">
          <img :src="movie.posterurl" :alt="movie.title" />
        </div>
        <div class="movieDetails">
          <div class="movieTitle">
            <h1>{{ movie.title }}</h1>
            <div class="movieRating">{{ movie.imdbRating }}</div>
          </div>
          <div class="movieGenres">

          </div>
          <div class="movieMeta">
            <div class="movieYear">{{ movie.releaseDate.substring(0, 4) }}</div>
            <div class="movieDuration">{{ movie.duration }}</div>
          </div>
          <div class="movieDescription">{{ movie.storyline }}</div>
        </div>
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

    .movieDetailsWrapper {
      display: flex;
      gap: 52px;
    }

    .movieDetailsWrapper .movieImage {
      flex: 1 0 auto;
    }

    .movieDetailsWrapper .movieImage img {
      display: block;
      width: 220px;
    }

    .movieDetailsWrapper .movieDetails {
      flex-grow: 1;
    }

    .movieDetailsWrapper .movieTitle {
      padding-bottom: 5px;
      color: $color-white;
      display: flex;
      gap: 25px;
      align-items: center;
    }

    .movieDetailsWrapper .movieRating {
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
      border: 1px solid $color-white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
    }

    .movieDetailsWrapper .movieGenres {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      padding-bottom: 30px;
      color: #FFFFFF;
      mix-blend-mode: normal;
      opacity: 0.5;
    }

    .movieDetailsWrapper .movieMeta {
      display: flex;
      gap: 50px;
      align-items: center;
      font-weight: 300;
      font-size: 24px;
      line-height: 29px;
      padding-bottom: 30px;
      color: $color-primary;
    }

    .movieDetailsWrapper .movieDescription {
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
      color: $color-white;
      mix-blend-mode: normal;
    }

  }
}
</style>