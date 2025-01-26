import type { Meta, StoryObj } from '@storybook/react';
import PhoneInput from './PhoneInput';

const meta: Meta<typeof PhoneInput> = {
  title: 'Components/PhoneInput',
  component: PhoneInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="p-6 bg-[#13131A] min-w-[320px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  args: {
    label: 'Phone',
    placeholder: 'Type here...',
  },
}; 