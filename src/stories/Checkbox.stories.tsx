import type { Meta, StoryObj } from "@storybook/react";
import { CustomCheckbox } from "@/components/ui/checkbox/CustomCheckbox";

const meta: Meta<typeof CustomCheckbox> = {
  title: "Components/CustomCheckbox",
  component: CustomCheckbox,
};

export default meta;
type Story = StoryObj<typeof CustomCheckbox>;

export const Default: Story = {
  render: () => <CustomCheckbox />,
};
