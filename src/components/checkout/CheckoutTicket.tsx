import React from "react";
import { Ticket } from "@/types/checkout.type";
import { Minus, Plus } from "lucide-react";

interface CheckoutTicketProps {
  ticket: Ticket;
  quantity: number;
  onIncrement: (ticketId: string) => void;
  onDecrement: (ticketId: string) => void;
}

const CheckoutTicket: React.FC<CheckoutTicketProps> = ({
  ticket,
  quantity,
  onIncrement,
  onDecrement,
}) => {
  const { image, name, description, price, tag } = ticket;

  return (
    <div className="flex gap-0 bg-glass-gradient2 border-solid border border-white-10 rounded-xl mb-4">
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-28 h-full object-cover rounded-l-xl"
        />
      </div>

      <div className="flex-1">
        <div className="p-4">
          <h3 className="text-[20px] text-white font-medium mb-2">{name}</h3>

          {tag && <div className="text-xs text-gray-400 mt-1">{tag}</div>}

          <p className="text-gray-400 text-sm mt-1 whitespace-pre-line">
            {description}
          </p>
        </div>

        <hr className="border-white-10 mt-3" />

        <div className="flex items-center justify-between p-4 flex-wrap gap-2">
          <div className="text-[#A14BFC] font-medium">
            ${price.toFixed(2)}
            <span className="text-gray-400 text-xs">/Ticket</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onDecrement(ticket.id)}
              disabled={quantity <= 0}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-glass-gradient2 border-solid border border-white-10 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Minus size={16} />
            </button>

            <span className="text-white w-6 text-center">{quantity}</span>

            <button
              onClick={() => onIncrement(ticket.id)}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-glass-gradient2 border-solid border border-white-10 text-gray-400 "
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTicket;
