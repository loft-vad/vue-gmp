<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/organisms/Header/Header.vue';
import Footer from './components/organisms/Footer/Footer.vue';
</script>

<template>
  <div class="contentWrapper">
    <Header title="Find Your Movie" />

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
