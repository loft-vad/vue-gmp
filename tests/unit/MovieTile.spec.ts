import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { useMoviesStore } from '../../src/stores/movies'; 
import MovieTile from '../../src/components/molecules/MovieTile/MovieTile.vue';

const pinia = createPinia();

describe('Movie Tile Component', () => {
  let store;

  beforeEach(() => {
    setActivePinia(pinia);
    store = useMoviesStore();
  });

  afterEach(() => {
    pinia.state.value = {};
  });

  it('renders correctly', async () => {
    await store.loadMovies();
    const wrapper = mount(MovieTile, {
      props: {
        movie: store.movies[0]
      }
    });
    expect(wrapper.find('.movieTileWrapper').exists()).toBe(true);
  });
  
});
