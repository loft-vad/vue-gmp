import { ref, onMounted, onUnmounted, computed } from 'vue'
import apiClient from './api';
import type { Movie } from '@/components/organisms/MoviesList/MoviesList.vue';

export function useMovies(filters = ['Title']) {
  // const items: Movie[] = moviesJson
  let items: Movie[]
  const searchTerm = ref('');

  const data = ref([])
  const response = ref()
  const error = ref()
  const loading = ref(false)

  const fetchItems = async () => {
    loading.value = true
    try {
      const result = await apiClient.get<Movie[]>('');
      response.value = result.data
      data.value = result.data.Search
      items = response.value.Search;
    } catch (error) {
      error.value = error
    } finally {
      loading.value = false
    }
  }
  
  onMounted(() => {
    fetchItems();
  });

  const filteredItems = computed(() => {
    return items.filter(item => {
      return filters.some(
        filter => item[filter].toLowerCase().includes(
          searchTerm.value.toLowerCase()
        )
      )
    })
  })

  return {
    searchTerm,
    filteredItems,
    fetchItems,
    loading,
    error
  }
}
