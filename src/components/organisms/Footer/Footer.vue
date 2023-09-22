<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer>
    <div class="footerWrapper">
      <nav>
        <RouterLink to="/">
          <img alt="Vue logo" src="@/assets/logo-small.svg" width="125" height="125" />
        </RouterLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background: $color-black;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  .footerWrapper {
    height: 100%;
    padding: 20px 60px;
  }
}
</style>