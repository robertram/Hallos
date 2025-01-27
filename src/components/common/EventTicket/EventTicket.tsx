

import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import Image from "next/image";

interface EventTicketProps {
    name: string;
    image: string;
    tooltipInfo: string; 
}

export const EventTicket = ({ name, image, tooltipInfo }: EventTicketProps) => {
  return (
    <div className="flex items-center gap-4 bg-[#272727] text-white border border-[#3B3B3B] rounded-xl p-4 w-[280px] md:max-w-sm">
      {/* Image with Tooltip */}
      <Tooltip>
        <TooltipTrigger>
          <div className="relative w-16 h-16">
            <Image
              src={image}
              alt={name}
              fill
              className="rounded-md object-cover"
              sizes="64px"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">{tooltipInfo}</p>
        </TooltipContent>
      </Tooltip>

      {/* Ticket name */}
      <span className="font-medium text-base">{name}</span>
    </div>
  );
};
