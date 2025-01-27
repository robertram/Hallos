import { FormField } from "@/components/forms/CustomForm";

export const OrderFormFields: FormField[] = [
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