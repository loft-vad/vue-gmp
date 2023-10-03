<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/organisms/Footer/Footer.vue';
import { useMoviesStore } from './stores/movies';

const store = useMoviesStore()
const loadMovies = store.loadMovies

loadMovies()
</script>

<template>
  <div class="contentWrapper">
    <RouterView />

    <Footer />
  </div>
</template>

<style scoped lang="scss">
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {}
</style>
