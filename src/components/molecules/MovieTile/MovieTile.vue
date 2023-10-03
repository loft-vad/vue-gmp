<script lang="ts" setup>
import { ref } from 'vue'
import Tag from '../../atoms/Tag/Tag.vue'
import type { Movie, MovieAPI } from '@/components/organisms/MoviesList/MoviesList.vue';

export interface Props {
  movie: MovieAPI;
}

const { movie } = defineProps<Props>()

// const vLazyload = {
//   mounted: (el: HTMLImageElement, binding: any) => {
//     el.src = binding.value
//   }
// }
</script>

<template>
  <div class="movieTileWrapper">
    <div class="movieImage">
      <img v-lazyload="movie.posterurl" src="/" :alt="movie.title" />
    </div>
    <div class="movieTitle">
      {{ movie.title }}
      <Tag :text="movie.releaseDate.substring(0, 4) || ''" />
    </div>
    <div class="movieGenres">
      <span>{{ movie.genres.join(', ') }} </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.movieTileWrapper {
  .movieImage {
    width: 323px;

    img {
      display: block;
      width: 100%;
      aspect-ratio: 9 / 13;
    }

    padding-bottom: 20px;
  }

  .movieTitle {
    padding-bottom: 5px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .moviewYear {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: $color-white;
    mix-blend-mode: normal;
    opacity: 0.7;
    padding: 10px 15px;
    border: 1px solid $color-secondary;
    border-radius: 4px;
    flex: 0 0 auto;
  }

  .movieGenres {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: $color-white;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
}
</style>
