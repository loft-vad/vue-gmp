<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer>
    <div class="footerWrapper">
      <nav>
        <RouterLink to="/">
          <img alt="Vue logo" src="@/assets/logo-small.svg" width="225" height="105" />
        </RouterLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background: $color-secondary;
  display: flex;
  align-items: center;
  justify-content: center;

  .footerWrapper {
    height: 100%;
  }
}
</style>