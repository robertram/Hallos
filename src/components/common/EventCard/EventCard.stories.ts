import type { Meta, StoryObj } from '@storybook/react';
import { EventCard } from "./EventCard";

const meta = {
  title: "Shared/EventCard",
  component: EventCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EventCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UpcomingEvent: Story = {
  args: {
    image: "/images/vueltos-un-colocho.png",
    title: "Vueltos un colocho",
    date: "1735833600000",
    location: "Teatro El Escenario",
    price: "43.33",
  },
};

export const PastEvent: Story = {
  args: {
    image: "/images/vueltos-un-colocho.png",
    title: "Vueltos un colocho",
    date: "1735833600000",
    location: "Teatro El Escenario",
  },
};
