<script lang="ts" setup>
import { ref } from 'vue'

const handleClick = () => console.log('clicked');
export interface Props {
  buttonText: string
}

const { buttonText } = withDefaults(defineProps<Props>(), {
  buttonText: 'Button',
})
</script>

<template>
  <button class="btn btn-primary" @click="handleClick">{{ buttonText }}</button>
</template>

<style scoped lang="scss">
.btn {
  color: $color-white;
  background: $color-primary;
  border: 1px solid $color-primary;
  border-radius: 4px;
  padding: 17px 72px 14px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;

  color: #FFFFFF;

  cursor: pointer;

  &[type="reset"] {
    background: transparent;
    color: $color-primary;
    border-color: $color-primary;
  }

  &:hover,
  &:focus {
    background: #bf4e59;
    border-color: #bf4e59;
  }

  &:active {
    background: #a1222d;
    border-color: #a1222d;
  }
}
</style>
