import type { Meta, StoryObj } from '@storybook/vue3';

import Input from './Input.vue';
 
const meta = {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
  args: { primary: false }, // default value
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
   args: {
      primary: true,
      placeholder: 'Enter text to search',
      label: 'Input',
   },
};
