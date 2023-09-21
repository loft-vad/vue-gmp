import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import type { Movie } from '@/components/organisms/MoviesList/MoviesList.vue';

export const useMoviesStore = defineStore('movies', () => {

  const list = ref([]);
  const amount = computed(() => list.value.length);

  enum sortField {
    RELEASE = 'Release date',
    RATING = 'Rating'
  }

  async function loadMovies() {
    const response = await axios.get(
      'https://www.omdbapi.com/?apikey=41ce280b&s=Movie&y=2022'
    );
    list.value = response.data.Search;
  }

  function sortBy(sortString: string) {
    if (sortString === sortField.RELEASE) list.value.sort((a: Movie, b: Movie) => a.Year - b.Year)
    if (sortString === sortField.RATING) list.value.sort((a: Movie, b: Movie) => a.Rated - b.Rated)
  }

  function search(searchTerm: string) {
    return list.value.filter(
      (item: Movie) => item.Title.toLowerCase().includes(
        searchTerm.toLowerCase()
      ))
  }

  return { list, loadMovies, amount, sortBy }
})
