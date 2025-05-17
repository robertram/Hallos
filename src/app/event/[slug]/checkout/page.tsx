"use client";
import React, { useState } from "react";
import { tickets } from "@/constants/checkout";
import CheckoutTicket from "@/components/checkout/CheckoutTicket";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentMethod from "@/components/PaymentMethod";
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
import { EventTitleDate } from "@/components/common/EventTitleDate/EventTitleDate";

export default function CheckoutPage() {
  const [ticketSelection, setTicketSelection] = useState<{
    [ticketId: string]: number;
  }>({
    "1": 0,
    "2": 1,
    "3": 0,
  });


  const [step, setStep]=useState(1)

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
  const startDate = "2025-01-25T23:00:00"
  const endDate = "2025-01-26T04:00:00"

  return (
    <div className="px-6 py-5">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="w-full lg:col-span-2">
          <EventTitleDate
            title="Everyone no Cover At Taj NYC #1 Urban Night Party"
            startDate={startDate}
            endDate={endDate}
            location="48 West 21st Street New York, NY 10010 United States"
          />

          <div className="lg:col-span-2">
            {(() => {
              switch (step) {
                case 1:
                  return tickets.map((ticket) => (
                    <CheckoutTicket
                      key={ticket.id}
                      ticket={ticket}
                      quantity={ticketSelection[ticket.id] || 0}
                      onIncrement={handleIncrement}
                      onDecrement={handleDecrement}
                    />
                  ));
                case 2:
                  return <PaymentMethod />;
                case 3:
                  return <div>Confirmation Step</div>;
                default:
                  return null;
              }
            })()}
          </div>
        </div>

        <div className="hidden lg:block">
          <OrderSummary tickets={tickets} selection={ticketSelection} setStep={setStep} />
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
                <OrderSummary tickets={tickets} selection={ticketSelection} setStep={setStep} />
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
