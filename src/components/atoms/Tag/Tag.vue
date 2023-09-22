<script lang="ts" setup>
import { ref } from 'vue'

const text = ref<string>('2004')
</script>

<template>
  <div class="tag">{{ text }}</div>
</template>

<style scoped lang="scss">
.tag {
  display: inline-flex;
  background: $color-tertiary;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.7;
  padding: 10px 15px;
  border: 1px solid #555555;
  border-radius: 4px;
  flex: 0 0 auto;
}
</style>
