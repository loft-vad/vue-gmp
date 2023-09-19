import { ref, onMounted, onUnmounted, computed } from 'vue'
import moviesJson from '@/data/moviesJson.json'
import type { Movie } from '@/components/organisms/MoviesList/MoviesList.vue';

export function useSearch(filters = ['Title']) {
  const items: Movie[] = moviesJson
  
  const searchTerm = ref('');
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
    filteredItems
  }
}