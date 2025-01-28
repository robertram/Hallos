import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from './accordion'

const meta = {
  title: 'Shared/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    faqs: [{
      title: 'Title test',
      description: 'description test',
    }]
  },
};