import { ref, onMounted, onUnmounted, computed } from 'vue'
import type { Movie } from '@/components/organisms/MoviesList/MoviesList.vue';

export function useSearch(items, filters = ['Title']) {
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