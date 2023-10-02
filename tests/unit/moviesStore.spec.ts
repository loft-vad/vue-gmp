import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { useMoviesStore } from '../../src/stores/movies'; 
import MoviesList from '../../src/components/organisms/MoviesList/MoviesList.vue';

const pinia = createPinia();

describe('Movies Store', () => {
  let moviesStore;

  beforeEach(() => {
    setActivePinia(pinia);
    moviesStore = useMoviesStore();
  });

  afterEach(() => {
    pinia.state.value = {};
  });

  it('loads movies correctly', async () => {
    await moviesStore.loadMovies();
    expect(moviesStore.movies.length).toBeGreaterThan(0);
  });

  it('returns the correct amount of movies', async () => {
    await moviesStore.loadMovies();
    expect(moviesStore.amount).toBe(moviesStore.movies.length);
  });

  it('filters movies by title correctly', async () => {
    await moviesStore.loadMovies();
    moviesStore.searchValue = 'never trust';
    moviesStore.searchType = 'title';
    const filteredMovies = moviesStore.movies;
    expect(filteredMovies.every((movie) => movie.Title.toLowerCase().includes('never trust'))).toBe(true);
  });

  it('filters movies by genre correctly', async () => {
    await moviesStore.loadMovies();
    moviesStore.searchValue = 'drama';
    moviesStore.searchType = 'genre';
    const filteredMovies = moviesStore.movies;
    expect(filteredMovies.every((movie) => movie.Genre.toLowerCase().includes('drama'))).toBe(true);
  });

  it('returns 0 search results', async () => {
    await moviesStore.loadMovies();
    const searchValue = 'Bla bla bla';
    moviesStore.searchValue = searchValue;
    moviesStore.searchType = 'title';
    const filteredMovies = moviesStore.movies;
    expect(filteredMovies.length).toBe(0);
  });
  
  it('sorts movies by release date correctly', async () => {
    await moviesStore.loadMovies();
    moviesStore.searchValue = 'Godfather';
    moviesStore.searchType = 'title';
    moviesStore.sortType = 'release date';
    const filteredMovies = moviesStore.movies;
    expect(filteredMovies[0].Year).toBe('1972');
  });

  it('sorts movies by rating correctly', async () => {
    await moviesStore.loadMovies();
    moviesStore.sortType = 'rating';
    const sortedMovies = moviesStore.movies;
    expect(sortedMovies[0].imdbRating).toBe('9.2');
  });

});

describe('Movies Component', () => {
  let store;

  beforeEach(() => {
    setActivePinia(pinia);
    store = useMoviesStore();
  });

  afterEach(() => {
    pinia.state.value = {};
  });

  it('renders movies correctly', async () => {
    await store.loadMovies();
    const wrapper = mount(MoviesList, {
      props: {
        items: store.movies
      }
    });
    expect(wrapper.find('.movieTileWrapper').exists()).toBe(true);
  });
  
});
