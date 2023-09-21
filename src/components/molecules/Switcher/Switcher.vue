<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
// const modelValue = defineModel<{ modelValue: Element }>();
const {label, values, modelValue} = defineProps({
  label: String,
  values: Array as () => string[],
  modelValue: String,
});
const emits = defineEmits(['update:modelValue']);
const selectedValue = ref(modelValue);
const selectValue = (value: string) => {
  selectedValue.value = value;
  emits('update:modelValue', value);
};

</script>

<template>
  <div class="sort">
    <label>{{ label }}</label>
    <div class="switcher">
      <div v-for="(value, index) in values" :key="index">
        <button @click="selectValue(value)" :class="{ active: value === selectedValue }">
          {{ value }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sort {
  display: flex;
  gap: 20px;
  align-items: center;

  label {
    text-transform: uppercase;
  }
}
.switcher {
  display: flex;
  border-radius: 5px;
  overflow: hidden;

  button {
    background-color: $color-tertiary;
    padding: 10px 20px;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;

    &.active {
      background-color: $color-primary;
    }
  }
}
</style>
