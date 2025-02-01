import type { Meta, StoryObj } from "@storybook/react";
import EventDetails from "./EventDetails";

// 📌 Storybook metadata for the EventDetails component
const meta: Meta<typeof EventDetails> = {
  title: "Components/EventDetails", // Defines the component's title in Storybook
  component: EventDetails, // Specifies the component being tested
  tags: ["autodocs"], // Enables automatic documentation in Storybook
  parameters: {
    layout: "fullscreen", // Ensures the component uses a fullscreen layout in Storybook
  },
};

export default meta;

type Story = StoryObj<typeof EventDetails>;

// ✅ Story for Desktop (Medium and Large screens)
export const Default: Story = {
  args: {
    title: "Blockchain Summit",
    date: "March 15, 2024",
    location: "San Francisco, USA",
    soldOut: true, // Marks the event as sold out
    organizer: {
      name: "Gold.D.Roger",
      avatar: "/images/GoldRogerProfile2.png",
      location: "Sydney, Australia",
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "responsive", // Sets a responsive viewport for desktop
    },
  },
};

// ✅ Specific story for Mobile view
export const MobileView: Story = {
  args: {
    title: "Blockchain Summit",
    date: "March 15, 2024",
    location: "San Francisco, USA",
    soldOut: true, // Marks the event as sold out
    organizer: {
      name: "Gold.D.Roger",
      avatar: "/images/GoldRogerProfile2.png",
      location: "Sydney, Australia",
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1", 
    },
  },
};
