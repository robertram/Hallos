// components/emails/TicketEmail.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import {TicketEmail, EmailPreview} from "@/components/EmailTemplate";

export default {
  title: "Emails/TicketEmail",
  component: TicketEmail,
} as Meta;

export const Default: StoryObj<typeof TicketEmail> = {
  render: (args) => (
    <EmailPreview>
      <TicketEmail {...args} />
    </EmailPreview>
  ),
  args: {
    name : "Robert Stuart Ramirez",
    ticketName : "NIGHT PARTY",
    eventName : "Urban Night Party",
    date : "January 25 · 11pm - January 26 · 4am EST",
    location : "48 West 21st Street New York, NY 10010 United States",
    ticketType : "VIP",
    price : "$49.99",
    discount : "$00.00",
    subtotal : "$49.99",
    total : "$49.99",
  },
};




// import type { Meta, StoryObj } from '@storybook/react';
// import { TicketEmail } from '../components/EmailTemplate/TicketEmail';

// const meta: Meta<typeof TicketEmail> = {
//   title: 'Email/TicketEmail',
//   component: TicketEmail,
//   tags: ['autodocs'], // Enables auto-generated documentation
// };

// export default meta;

// type Story = StoryObj<typeof TicketEmail>;

// // Default Story
// export const Default: Story = {
//   args: {
//     name: 'Robert Stuart Ramirez Marin',
//     ticketName: 'Urban Night Party',
//     date: 'January 25 - 11pm - January 26 - 4am EST',
//     time: '11pm - 4am',
//     location: 'Taj II, 48 West 21st Street New York, NY 10010 United States',
//     eventName: 'Urban Night Party',
//     ticketType: 'VIP',
//     price: '$49.99',
//   },
// };





// import { Meta, Story } from '@storybook/react';
// import { TicketEmail } from '../components/EmailTemplate/TicketEmail';

// export default {
//   title: 'Email/TicketEmail',
//   component: TicketEmail,
// } as Meta;

// const Template: Story = (args:) => <TicketEmail {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   name: 'Robert Stuart Ramirez Marin',
//   ticketName: 'Urban Night Party',
//   date: 'January 25 - 11pm - January 26 - 4am EST',
//   time: '11pm - 4am',
//   location: 'Taj II, 48 West 21st Street New York, NY 10010 United States',
//   eventName: 'Urban Night Party',
//   ticketType: 'VIP',
//   price: '$49.99',
// };