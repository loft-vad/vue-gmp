import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';

import Input from './Input.vue';
 
const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  args: { modelValue: '' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
   args: {
    modelValue: 'New Value'
   },
};
