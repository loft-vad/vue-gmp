<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <header>
    <div class="headerWrapper">
      <div class="headerBar">
        <div class="logoSmall">
          <img alt="Vue logo" class="logo" src="@/assets/logo-small.svg" width="125" height="125" />
        </div>
        <AddMovie />
      </div>
      <div>
        <h1>{{ title }}</h1>
        <SearchForm onSearch={onSearch} />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background: url(../../../assets/movies-header-bg.jpg) no-repeat center center;
  overflow: hidden;
  background-size: 98%;
  height: 450px;
  margin-bottom: 5px;

  .headerWrapper {
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    height: 100%;
    padding: 20px 60px;

    h1 {
      padding-bottom: 38px;
    }

    .logoSmall {
      color: $color-primary;
    }

    .headerBar {
      display: flex;
      justify-content: space-between;
      padding-bottom: 35px;
    }

    &>div:last-child {
      padding: 0 60px;
    }
  }
}
</style>