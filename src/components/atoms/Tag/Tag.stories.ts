import type { Meta, StoryObj } from '@storybook/vue3';

import Tag from './Tag.vue';
 
const meta = {
  title: 'Atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    text: "",
  },
  args: { text: "" }, // default value
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '2004',
  },
};
