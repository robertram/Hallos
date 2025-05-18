import React from "react";
import { Ticket } from "@/types/checkout.type";
import { TicketCheck } from "lucide-react";
import Button from "../common/Button/Button";
import { OrderSummaryMobile } from "./OrderSumaryMobile";
import OrderSummaryDesktop from "./OrderSummaryDesktop";

interface TicketSelection {
  [ticketId: string]: number;
}

interface OrderSummaryProps {
  tickets: Ticket[];
  selection: TicketSelection;
  setStep?: (step: number | ((prev: number) => number)) => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ tickets, selection, setStep }) => {
  const selectedTickets = tickets.filter((ticket) => selection[ticket.id] > 0);
  const subtotal = selectedTickets.reduce(
    (sum, ticket) => sum + ticket.price * selection[ticket.id],
    0
  );
  const discount = 0;
  const total = subtotal - discount;

  const firstSelectedTicket = selectedTickets[0];

  return (
    <div>
      <div className="hidden lg:block">
        <OrderSummaryDesktop
          tickets={tickets}
          selection={selection}
          setStep={setStep}
          selectedTickets={selectedTickets}
          firstSelectedTicket={firstSelectedTicket}
          discount={discount}
          subtotal={subtotal}
          total={total}
        />
      </div>
      <div className="block lg:hidden w-full">
        <OrderSummaryMobile
          tickets={tickets}
          selection={selection}
          selectedTickets={selectedTickets}
          firstSelectedTicket={firstSelectedTicket}
          discount={discount}
          subtotal={subtotal}
          total={total}
        />
      </div>
    </div>
  );
};

export default OrderSummary;
