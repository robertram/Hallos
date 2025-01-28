type EventTicketProps = {
  name: string;
  image: string;
  tooltipInfo?: string;
};

export const EventTicket = ({ name, tooltipInfo }: EventTicketProps) => {
  return (
    <div 
      className="bg-black text-white rounded-lg shadow-md w-40 p-2 flex flex-col items-center border-2 border-gray-300" // Añadido border
      title={tooltipInfo}
    >
      {/* dynamic image */}
      <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={"https://37cab6b984fd76206e94c796d0b1a00c.ipfscdn.io/ipfs/bafybeic3mambq274fafn2o4hcb4swdzm7ntezh2zlfoa644sxfll6ifb54/1.png"} // Cambié la URL a la variable image
          alt="Ticket Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ticket name */}
      <div className="mt-2 text-center">
        <p className="text-sm font-medium">{name}</p>
      </div>
    </div>
  );
};
