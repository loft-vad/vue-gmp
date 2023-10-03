import { ref } from 'vue';
import apiClient from './api';

export function useMoviesAPI() {
  const moviesList = ref([]);
  const error = ref('');

  const getAllMovies = async () => {
    try {
      const response = await apiClient.get('/movies');
      moviesList.value = response.data;
    } catch (err) {
      error.value = 'An error occurred while trying to fetch movies';
      console.error(err);
    }
  };

  return { moviesList, error, getAllMovies };
};