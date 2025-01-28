import type { Meta, StoryObj } from '@storybook/react';
import CustomForm from './CustomForm';

const meta: Meta<typeof CustomForm> = {
  title: 'Forms/CustomForm',
  component: CustomForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="p-6 bg-[#13131A] min-h-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CustomForm>;

export const Default: Story = {
  args: {
    title: 'Order information',
    fields: [
      {
        id: "firstName",
        isRequired: true,
        name: "First Name",
        type: "string",
        gridColumn: "half"
      },
      {
        id: "lastName",
        isRequired: true,
        name: "Last Name",
        type: "string",
        gridColumn: "half"
      },
      {
        id: "identification",
        isRequired: true,
        name: "Identification",
        type: "string",
        gridColumn: "full"
      },
      {
        id: "email",
        isRequired: true,
        name: "Email",
        type: "email",
        gridColumn: "half"
      },
      {
        id: "phoneNumber",
        isRequired: false,
        name: "Phone Number",
        type: "phoneNumber",
        gridColumn: "half"
      }
    ]
  }
};