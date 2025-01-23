import type { Meta, StoryObj } from '@storybook/react';
import { AccountTicket } from "./AccountTicket";

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
    title: "Event name",
    date: "", 
    location:"", 
        tickets:[
            {
                title:"VIP", 

                image:"https://",
            }
        ]
    },
};
