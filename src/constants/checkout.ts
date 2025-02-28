import { Ticket } from "@/types/checkout.type";
export const tickets: Ticket[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    name: "General Admission",
    description: "Only whitelisted emails can purchase.",
    price: 39.99,
    tag: "Members Only",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    name: "VIP Access",
    description:
      "Feugiat vel accumsan litora at condimentum morbi; lobortis molestie ad. Arcu mi at ridiculus netus nisl",
    price: 49.99,
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    name: "Premium Experience",
    description:
      "Feugiat vel accumsan litora at condimentum morbi; lobortis molestie ad. Arcu mi at ridiculus netus nisl",
    price: 59.99,
  },
];
