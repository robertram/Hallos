import type { Meta, StoryObj } from "@storybook/react";
import { EventTicket } from "./EventTicket";

const meta: Meta<typeof EventTicket> = {
  title: "Components/EventTicket",
  component: EventTicket,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof EventTicket>;

export const Default: Story = {
  args: {
    name: "Name of the ticket",
    image: "https://37cab6b984fd76206e94c796d0b1a00c.ipfscdn.io/ipfs/bafybeic3mambq274fafn2o4hcb4swdzm7ntezh2zlfoa644sxfll6ifb54/1.png",
    tooltipInfo: "This ticket is a digital collectible",
  },
};
