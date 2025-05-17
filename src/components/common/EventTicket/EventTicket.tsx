import { TooltipIcon } from "@/icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// import { Button } from "@/components/ui/button";

type EventTicketProps = {
  name: string;
  image: string;
  tooltipInfo?: string;
};

export const EventTicket = ({ name, image, tooltipInfo }: EventTicketProps) => {
  return (
    <div
      className="bg-black text-white rounded-lg shadow-md w-40 h-min p-2 flex flex-col border-[#FFFFFF]/10 border-[1px] border-solid" // Añadido border
      title={tooltipInfo}
    >
      {/* dynamic image */}
      <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={image ?? ''} // Cambié la URL a la variable image
          alt="Ticket Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ticket name */}
      <div className="mt-2 text-left flex justify-between">
        <p className="text-sm font-medium flex-nowrap">{name.length > 17 ? `${name.substring(0, 17)}...` : name}</p>

        {tooltipInfo && <div className="mt-[2px] cursor-pointer">
          <TooltipProvider delayDuration={300}>
            <Tooltip >
              <TooltipTrigger asChild>
                <TooltipIcon />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltipInfo || "Add to library"}</p> {/* Use tooltipInfo or default text */}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>}
      </div>
    </div>
  );
};
