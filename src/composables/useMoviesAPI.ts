import { ref } from 'vue';
import apiClient from './api';

export function useMoviesAPI() {
  const movies = ref([]);
  const error = ref('');

  const getAllMovies = async () => {
    try {
      const response = await apiClient.get('/movies');
      movies.value = response.data;
    } catch (err) {
      error.value = 'An error occurred while trying to fetch movies';
      console.error(err);
    }
  };

  return { movies, error, getAllMovies };
};