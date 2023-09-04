import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';
 
const meta = {
   title: 'Example HW01/Button',
   component: Button,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
  args: { primary: false }, // default value
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
   args: {
      primary: true,
      label: 'Button',
   },
 };

 export const Secondary: Story = {
   args: {
      label: 'Button',
   },
};

export const Large: Story = {
   args: {
      size: 'large',
      label: 'Button',
   },
};

export const Small: Story = {
   args: {
      size: 'small',
      label: 'Button',
   },
};
