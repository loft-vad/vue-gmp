import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';
 
const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: { buttonText: 'Button' }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};

export const WithTextPassed: Story = {
  args: {
    buttonText: "Button text"
  },
};
