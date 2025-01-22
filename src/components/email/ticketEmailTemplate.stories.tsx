import type { Meta, StoryObj } from '@storybook/react';

import TicketEmailTemplate from './ticketEmailTemplate';

const meta = {
  component: TicketEmailTemplate,
} satisfies Meta<typeof TicketEmailTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};