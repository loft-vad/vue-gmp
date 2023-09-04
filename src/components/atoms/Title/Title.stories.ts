import type { Meta, StoryObj } from '@storybook/vue3';

import Title from './Title.vue';
 
const meta = {
  title: 'Atoms/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    text: "",
  },
  args: { text: "" }, // default value
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Default Heading',
  },
};

export const H1: Story = {
  args: {
    size: 'h3',
    text: 'H1 Heading',
  },
};

export const H3: Story = {
  args: {
    size: 'h3',
    text: 'H3 Heading',
  },
};
