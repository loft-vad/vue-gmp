import type { Meta, StoryObj } from '@storybook/vue3';

import MovieTile from './MovieTile.vue';
 
const meta = {
  title: 'Molecules/MovieTile',
  component: MovieTile,
  tags: ['autodocs'],
  argTypes: {
    text: "",
  },
  args: { text: "" }, // default value
} satisfies Meta<typeof MovieTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Default Heading',
  },
};