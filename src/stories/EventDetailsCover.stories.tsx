import type { Meta, StoryObj } from '@storybook/react';
import { EventDetailsCover } from '@/components/EventDetailsCover/EventDetailsCover';

const meta: Meta<typeof EventDetailsCover> = {
  title: 'Components/EventDetailsCover',
  component: EventDetailsCover,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof EventDetailsCover>;

export const Default: Story = {
  args: {
    title: 'Everyone no Cover At Taj NYC #1 Urban Night Party',
    startDate: '2024-01-25T23:00:00',
    endDate: '2024-01-26T04:00:00',
    location: {
      venue: 'Taj II',
      address: '48 West 21st Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10010',
      country: 'United States'
    },
    coverImage: '/nightParty1.png'
  },
};

export const WithoutCoverImage: Story = {
  args: {
    ...Default.args,
    hideCoverImage: true,
  },
}; 