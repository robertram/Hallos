import type { Meta, StoryObj } from "@storybook/react";
import EventDetails from "./EventDetails";

const meta: Meta<typeof EventDetails> = {
  title: "Components/EventDetails",
  component: EventDetails,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EventDetails>;

// ✅ Default (La única historia necesaria)
export const Default: Story = {
  args: {
    title: "Blockchain Summit",
    date: "March 15, 2024",
    location: "San Francisco, USA",
    organizer: {
      name: "Gold.D.Roger",
      avatar: "/images/GoldRogerProfile2.png",
      location: "Sydney, Australia",
    },
  },
};
