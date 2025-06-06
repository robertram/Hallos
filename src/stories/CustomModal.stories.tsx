import type { Meta, StoryObj } from "@storybook/react";
import { CustomModal } from "@/components/modal/CustomModal";
import { PurchaseLoading } from "@/components/modal/PurchaseLoading";
import { PurchaseSuccess } from "@/components/modal/PurchaseSuccess";

const meta: Meta<typeof CustomModal> = {
  component: CustomModal,
  title: "Modal/CustomModal",
  tags: ["autodocs"],
};

export default meta;

export const Loading: StoryObj<typeof CustomModal> = {
  args: {
    open: true,
    onOpenChange: () => {},
    children: <PurchaseLoading />,
  },
};

export const Success: StoryObj<typeof CustomModal> = {
  args: {
    open: true,
    onOpenChange: () => {},
    children: <PurchaseSuccess />,
  },
};
