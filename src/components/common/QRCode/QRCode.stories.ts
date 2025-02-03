import type { Meta, StoryObj } from "@storybook/react";
import QRCode from './QRCode'

const meta: Meta<typeof QRCode> = {
  title: "Components/QRCode",
  component: QRCode,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof QRCode>;

export const Default: Story = {
  args: {
    address: "0x1234567890",
    contractAddress: "0x1234567890",
    tokenId: "1234567890",
    selectedTicketId: "1234567890",
    },
};