import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'outline', 'neutral', 'light', 'glass'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
  },
};

export const Outline: Story = {
  args: {
    type: 'outline',
    children: 'Outline Button',
  },
};

export const Neutral: Story = {
  args: {
    type: 'neutral',
    children: 'Neutral Button',
  },
};

export const light: Story = {
  args: {
    type: 'light',
    children: 'Light Button',
  },
};

export const glass: Story = {
  args: {
    type: 'glass',
    children: 'Glass Button'
  }
}




