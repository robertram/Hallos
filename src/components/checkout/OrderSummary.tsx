import React from "react";
import { Ticket } from "@/types/checkout.type";
import { TicketCheck } from "lucide-react";
import Button from "../common/Button/Button";

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
    <div className="lg:bg-glass-gradient2 lg:border lg:border-white-10 lg:rounded-xl">
      <img
        src="/checkout-header.svg"
        alt="Logo"
        className="lg:w-full lg:block hidden lg:h-auto w-[7em] h-[7em]"
      />
      <div className="lg:p-4 mb-3 lg:mb-auto">
        <h2 className="text-gray-500 text-sm text-left font-medium">
          Order Summary
        </h2>
      </div>
      <div className="lg:px-4 border-b border-white-10">
        {selectedTickets.length > 0 && firstSelectedTicket && (
          <div className="flex gap-3 mb-4">
            <div className="flex-shrink-0">
              <img
                src={firstSelectedTicket.image}
                alt={firstSelectedTicket.name}
                className="w-16 h-20 object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-left font-medium">
                {firstSelectedTicket.name}
              </h3>
              <p className="text-gray-400 text-left text-sm">
                Qty:{" "}
                {selection[firstSelectedTicket.id].toString().padStart(2, "0")}
              </p>
              <p className="text-purple-500 text-left font-medium mt-1">
                $
                {(
                  firstSelectedTicket.price * selection[firstSelectedTicket.id]
                ).toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="lg:p-4 my-3 lg:mb-auto border-b border-white-10">
        <div className="flex items-center gap-2 rounded-xl px-3 py-2 gradient-bg">
          <TicketCheck className="text-white" size={20} />
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="bg-transparent text-white text-sm outline-none flex-1"
          />
          <Button type="primary" className="w-auto">
            Apply
          </Button>
        </div>
        <p className="text-gray-400 text-left text-xs lgg:my-2 my-3">
          If you have a coupon code, please apply it here.
        </p>
      </div>

      <div className="lg:p-4 pb-3 lg:py-auto border-b border-white-10">
        <div className="space-y-2 text-sm">
          {selectedTickets.map((ticket) => (
            <div key={ticket.id} className="flex justify-between">
              <span className="text-gray-400">
                {selection[ticket.id]} Ticket
                {selection[ticket.id] > 1 ? "s" : ""}
              </span>
              <span className="text-white">
                ${(ticket.price * selection[ticket.id]).toFixed(2)}
              </span>
            </div>
          ))}

          <div className="flex justify-between">
            <span className="text-gray-400">Discount</span>
            <span className="text-white">${discount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Subtotal</span>
            <span className="text-white">${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="lg:p-4 pt-3 lg:pt-auto">
        <div className="flex justify-between my-4">
          <span className="text-white font-medium">Total</span>
          <span className="text-white font-medium">${total.toFixed(2)}</span>
        </div>

        <Button
          type="primary"
          className="w-full"
          onClick={() => {
            if (setStep) {
              setStep((step: number) => step + 1);
            }
          }}
        >
          Proceed to payment
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
