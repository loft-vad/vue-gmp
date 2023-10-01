import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { useMoviesStore } from '../../src/stores/movies'; 
import MoviesList from '../../src/components/organisms/MoviesList/MoviesList.vue';

const pinia = createPinia();

describe('Movies Component', () => {
  let store;

  beforeEach(() => {
    setActivePinia(pinia);
    store = useMoviesStore();
  });

  afterEach(() => {
    pinia.state.value = {};
  });

  it('renders movies list panel empty', async () => {
    await store.loadMovies();
    const wrapper = mount(MoviesList, {
      props: {
        items: store.movies2
      }
    });
    
    expect(wrapper.text()).toMatch("No Movies Found");
  });
  
});
