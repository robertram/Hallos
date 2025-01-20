import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from './SearchBar';

const meta = {
  title: 'Shared/SearchBar',
  id: 'components-searchbar-custom',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    placeholder: {
      control: 'text',
    },
    categoryOptions: {
      control: 'object',
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    placeholder: 'Search for an event',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    placeholder: 'Search for an event',
    categoryOptions: ['Category 1', 'Category 2', 'Category 3'],
  },
};
