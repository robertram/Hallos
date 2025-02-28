"use client";
import React, { useState } from "react";
import { tickets } from "@/constants/checkout";
import CheckoutTicket from "@/components/checkout/CheckoutTicket";
import OrderSummary from "@/components/checkout/OrderSummary";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Button from "@/components/common/Button/Button";

export default function CheckoutPage() {
  const [ticketSelection, setTicketSelection] = useState<{
    [ticketId: string]: number;
  }>({
    "1": 0,
    "2": 1,
    "3": 0,
  });

  const handleIncrement = (ticketId: string) => {
    setTicketSelection((prev) => ({
      ...prev,
      [ticketId]: (prev[ticketId] || 0) + 1,
    }));
  };

  const handleDecrement = (ticketId: string) => {
    setTicketSelection((prev) => ({
      ...prev,
      [ticketId]: Math.max(0, (prev[ticketId] || 0) - 1),
    }));
  };
  return (
    <div className="px-6 py-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {tickets.map((ticket) => (
            <CheckoutTicket
              key={ticket.id}
              ticket={ticket}
              quantity={ticketSelection[ticket.id] || 0}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          ))}
        </div>
        <div className="hidden lg:block">
          <OrderSummary tickets={tickets} selection={ticketSelection} />
        </div>
        <div className="block lg:hidden w-full">
          <Drawer>
            <DrawerTrigger className="w-full">
              <Button type="primary" className="w-full">
                View order summary
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-[#13131D] border-none">
              <DrawerHeader>
                <DrawerTitle></DrawerTitle>
                <OrderSummary tickets={tickets} selection={ticketSelection} />
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
