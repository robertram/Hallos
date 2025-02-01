import React from "react";
import Button from "@/components/common/Button/Button";
import Image from "next/image";

interface EventDetailsProps {
  title: string;
  date: string;
  location: string;
  soldOut?: boolean;
  organizer: {
    name: string;
    avatar: string;
    location: string;
  };
}

const EventDetails: React.FC<EventDetailsProps> = ({
  title,
  date,
  location,
  soldOut = false,
  organizer,
}) => {
  return (
    <div
      className="bg-[#171717] text-white shadow-lg border border-[#262626] mx-auto p-0 rounded-xl"
      style={{
        width: "378px",
        minHeight: "721px",
        borderRadius: "12px",
        border: "1px solid #262626",
      }}
    >
      {/* ✅ Sold Out Message */}

      <div className="p-4 flex flex-col gap-4 relative">
        {/* Texto Sold Out */}
        <div className="flex justify-between">
          <div>
            <p className="text-[20px] font-bold text-white leading-[24px]">Sold Out</p>
            <p className="text-[#A3A3A3] text-[16px] leading-[1.5] max-w-[280px]">
              This event is sold out and no longer taking registrations.
            </p>
          </div>

          {/* Ícono Sold Out */}
          <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#262626] rounded-full">
            <img
              src="/images/GroupBookTicketIcon.png"
              alt="Sold Out Icon"
              width="44"
              height="44"
              className="object-contain"
            />
          </div>
        </div>

        {/* ✅ Botón Book Tickets */}
        <Button
          type="primary"
          className="w-[338px] h-[48px] bg-gradient-to-r from-[#2343C2] to-[#8E2DE2] text-white rounded-full shadow-md text-lg font-semibold mt-2 opacity-60"
        >
          <p className="text-white text-[19px] font-semibold leading-[19px]">Book Tickets</p>
        </Button>
      </div>


      {/* 🔹 Línea separadora */}
      <div className="w-full h-[1px] bg-[#3A3A3A] my-2"></div>

      {/* ✅ Organizer Section */}
      <div className="p-3">
        <p className="text-[20px] font-bold">Organizer</p>
        <div className="flex items-center mt-2">
          {/* Imagen del organizador */}
          <Image
            src="/images/GoldRogerProfile2.png"
            alt={organizer.name}
            width={50}
            height={50}
            className="rounded-full object-cover shadow-md"
          />
          <div className="ml-4">
            <p className="text-white font-semibold text-[18px]">{organizer.name}</p>
            <div className="flex items-center text-[#A3A3A3] text-sm">
              {/* Imagen del icono de ubicación */}
              <Image
                src="/images/Location.png"
                alt="Location Icon"
                width={14}
                height={14}
                className="mr-1"
              />
              <p>{organizer.location}</p>
            </div>
          </div>
          <Button
            type="primary"
            className="w-[106px] h-[43px] bg-gradient-to-r from-[#2343C2] to-[#8E2DE2] text-white rounded-full shadow-md flex justify-center items-center ml-[40px]"
          >
            <p className="text-[16px] font-semibold leading-[19.36px] tracking-[-0.5px]">
              Contact
            </p>
          </Button>

        </div>
      </div>

      {/* 🔹 Línea Divisoria */}
      <div className="w-full h-[1px] bg-[#3A3A3A] my-2"></div>

      {/* ✅ Social Networks */}
      <div className="p-2">
        <p className="text-lg font-bold">Social Networks</p>
        <div className="flex space-x-4 mt-2">
          <div className="flex space-x-4 mt-2">
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/Pinterest.png" alt="Pinterest" width={36} height={36} className="w-[40px] h-[40px]" />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/TikTok.png" alt="TikTok" width={36} height={36} className="w-[40px] h-[40px]" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/Facebook.png" alt="Facebook" width={40} height={40} className="w-[40px] h-[40px]" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/Twitter.png" alt="X" width={40} height={40} className="w-[40px] h-[40px]" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/Instagram.png" alt="Instagram" width={36} height={36} className="w-[40px] h-[40px]" />
            </a>
          </div>

        </div>
      </div>


      {/* 🔹 Línea Divisoria */}
      <div className="w-full h-[1px] bg-[#3A3A3A] my-2"></div>


      {/* ✅ Map View */}
      <div className="p-4">
        <p className="text-lg font-bold">Map View</p>
        <div className="mt-2">
          <Image
            src="/images/Map.png"
            alt="Map View"
            layout="intrinsic" // Evita distorsión
            width={500} // Ajusta a mayor resolución
            height={300} // Ajusta proporciones
            className="rounded-lg"
          />
        </div>
      </div>


      {/* Mobile */}


      {/* ✅ Sold Out Message */}

      {/* ✅ Solo visible en móviles */}
      <div className="block sm:hidden p-4 flex flex-col gap-4 relative">
        {/* Texto Sold Out */}
        <div className="flex justify-between">
          <div>
            <p className="text-[20px] font-bold text-white leading-[24px]">Sold Out</p>
            <p className="text-[#A3A3A3] text-[16px] leading-[1.5] max-w-[280px]">
              This event is sold out and no longer taking registrations.
            </p>
          </div>

          {/* Ícono Sold Out */}
          <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#262626] rounded-full">
            <img
              src="/images/GroupBookTicketIcon.png"
              alt="Sold Out Icon"
              width="44"
              height="44"
              className="object-contain"
            />
          </div>
        </div>

        {/* ✅ Botón Book Tickets */}
        <Button
          type="primary"
          className="w-[338px] h-[48px] bg-gradient-to-r from-[#2343C2] to-[#8E2DE2] text-white rounded-full shadow-md text-lg font-semibold mt-2 opacity-60"
        >
          <p className="text-white text-[19px] font-semibold leading-[19px]">Book Tickets</p>
        </Button>
      </div>




    </div>







  );
};

export default EventDetails;
