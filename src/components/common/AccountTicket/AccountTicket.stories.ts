import type { Meta, StoryObj } from '@storybook/react';
import { AccountTicket } from "./AccountTicket";
import nightParty1 from '../../../../public/nightParty1.png';
import nightParty2 from '../../../../public/nightParty2.png';

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
    title: "",
    date: "",
    location: "",
    tickets: [
      {
        title: "NIGHT PARTY Red",
        image: nightParty1.src,
        qrCodeUrl: "https://example.com/qr/ticket1"
      },
      {
        title: "NIGHT PARTY Yellow",
        image: nightParty2.src,
        qrCodeUrl: "https://example.com/qr/ticket2"
      }
    ]
  },
};
