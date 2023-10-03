import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import type { Movie, MovieAPI } from '@/components/organisms/MoviesList/MoviesList.vue';
import localMovies from '@/data/moviesJson.json'
import { useMoviesAPI } from '@/composables/useMoviesAPI';

const { getAllMovies, moviesList } = useMoviesAPI()

enum sortField {
  RELEASE = 'release date',
  RATING = 'rating'
}
enum searchField {
  TITLE = 'title',
  GENRE = 'genre'
}

export const useMoviesStore = defineStore('movies', () => {

  const sortValues = [
    {
      field: 'release date',
      sortFn: (a: MovieAPI, b: MovieAPI) => (a.releaseDate.substring(0, 4) < b.releaseDate.substring(0, 4) ? 1 : -1)
    },
    {
      field: 'rating',
      sortFn: (a: MovieAPI, b: MovieAPI) => (a.imdbRating < b.imdbRating ? 1 : -1)
    }
  ]

  const list = ref([]);
  const amount = computed(() => list.value.length);
  const searchValue = ref('')
  const searchType = ref(searchField.TITLE)
  const sortType = ref(sortField.RELEASE)
  const activeSortValue = computed(() => sortValues.find(item => item.field === sortType.value))

  async function loadMovies() {
    // const response = await axios.get(
    //   'https://www.omdbapi.com/?apikey=41ce280b&s=Movie&y=2022'
    // );
    // list.value = response.data.Search;
    await getAllMovies()
    list.value = moviesList.value
  }

  const movies = computed(() => {
    const moviesList = [...list.value]
    if (searchValue.value && searchType.value === searchField.TITLE) {
      return moviesList.filter((movie: MovieAPI) => movie.title?.toLowerCase().includes(searchValue.value.toLowerCase())).sort(activeSortValue.value.sortFn)
    }
    else if (searchValue.value && searchType.value === searchField.GENRE) {
      return moviesList.filter((movie: MovieAPI) => movie.genres.join('')?.toLowerCase().includes(searchValue.value.toLowerCase())).sort(activeSortValue.value.sortFn)
    }
    return moviesList.sort(activeSortValue.value.sortFn)
  })


  return { movies, loadMovies, amount, searchValue, searchType, sortType }
})
