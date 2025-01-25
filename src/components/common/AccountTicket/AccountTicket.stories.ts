import type { Meta, StoryObj } from '@storybook/react';
import { AccountTicket } from "./AccountTicket";
import example1 from '../../../../public/example1.png';
import example2 from '../../../../public/example2.png';

const meta = {
  title: "Shared/AccountTicket",
  component: AccountTicket,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AccountTicket>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccountT: Story = {
  args: {
    title: "Everyone no Cover At Taj NYC #1 Urban Night Party",
    date: "",
    location: "21st Street New York, United States",
    tickets: [
      {
        title: "NIGHT PARTY Red",
        image: example1.src
      },
      {
        title: "NIGHT PARTY Yellow",
        image: example2.src
      }
    ]
  },
};
