import React from "react";
import Button from "@/components/common/Button/Button";
import Image from "next/image";

// Define the interface for the EventDetails component's props
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

// EventDetails Component
const EventDetails: React.FC<EventDetailsProps> = ({
  title,
  date,
  location,
  soldOut = false,
  organizer,
}) => {
  return (
    <>
      {/* ✅ Visible ONLY on Mobile Screens */}
      <div className="block sm:hidden bg-[#171717] text-white shadow-lg border-t border-[#262626] p-2 rounded-t-xl w-full mt-[100px]">
        
        {/* ✅ Sold Out Message */}
        <div className="p-2 flex flex-col gap-3 relative">
          <div className="flex justify-between">
            <div>
              <p className="text-[18px] font-bold text-white leading-[22px]">Sold Out</p>
              <p className="text-[#A3A3A3] text-[14px] leading-[1.5] max-w-[250px]">
                This event is sold out and no longer taking registrations.
              </p>
            </div>

            {/* Sold Out Icon */}
            <div className="w-[36px] h-[36px] flex items-center justify-center bg-[#262626] rounded-full">
              <img
                src="/images/GroupBookTicketIcon.png"
                alt="Sold Out Icon"
                width="36"
                height="36"
                className="object-contain"
              />
            </div>
          </div>

          {/* ✅ Centered Booking Button */}
          <div className="flex justify-center">
            <Button
              type="primary"
              className="w-full max-w-[280px] h-[42px] bg-gradient-to-r from-[#2343C2] to-[#8E2DE2] text-white rounded-full shadow-md text-md font-semibold mt-2 opacity-60"
            >
              <p className="text-white text-[16px] font-semibold leading-[16px]">Book Tickets</p>
            </Button>
          </div>
        </div>
      </div>

      {/* ✅ Visible ONLY on Medium and Large Screens */}
      <div className="hidden sm:block bg-[#171717] text-white shadow-lg border border-[#262626] mx-auto p-4 rounded-xl w-[378px] min-h-[721px]">
        
        {/* ✅ Sold Out Message */}
        <div className="p-4 flex flex-col gap-4 relative">
          <div className="flex justify-between">
            <div>
              <p className="text-[20px] font-bold text-white leading-[24px] mb-2">
                Sold Out
              </p>
              <p className="text-[#A3A3A3] text-[16px] leading-[1.5] max-w-[280px]">
                This event is sold out and no longer taking registrations.
              </p>
            </div>

            {/* Sold Out Icon */}
            <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#262626] rounded-full relative top-[-9px] right-[-15px]">
              <img
                src="/images/GroupBookTicketIcon.png"
                alt="Sold Out Icon"
                width="44"
                height="44"
                className="object-contain"
              />
            </div>
          </div>

          {/* ✅ Centered Booking Button */}
          <div className="flex justify-center items-center w-full mt-2">
            <Button
              type="primary"
              className="w-full max-w-[300px] h-[46px] bg-gradient-to-r from-[#2343C2] to-[#8E2DE2] text-white rounded-full shadow-md text-lg font-semibold opacity-80"
            >
              <p className="text-white text-[18px] font-semibold leading-[18px] text-center">
                Book Tickets
              </p>
            </Button>
          </div>
        </div>

        {/* 🔹 Separator Line */}
        <div className="h-[1px] bg-[#3A3A3A] my-3 w-[calc(100%+2rem)] mx-[-1rem]"></div>

        {/* ✅ Organizer Section */}
        <div className="p-3">
          <p className="text-[20px] font-bold">Organizer</p>
          <div className="flex items-center mt-2">
            
            {/* Organizer's Image */}
            <Image
              src="/images/GoldRogerProfile2.png"
              alt={organizer.name}
              width={50}
              height={50}
              className="rounded-full object-cover shadow-md"
            />
            <div className="ml-4">
              <p className="text-white font-semibold text-[18px]">{organizer.name}</p>
              <div className="flex items-center text-[#A3A3A3] text-sm whitespace-nowrap">
                {/* Location Icon */}
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

            {/* Contact Button */}
            <Button
              type="primary"
              className="w-[106px] h-[43px] px-4 bg-gradient-to-r from-[#2343C2] to-[#8E2DE2] text-white rounded-full shadow-md flex justify-center items-center ml-[45px]"
            >
              <p className="text-[15px] font-semibold leading-[18px] tracking-[-0.5px]">
                Contact
              </p>
            </Button>
          </div>
        </div>

        {/* 🔹 Separator Line */}
        <div className="h-[1px] bg-[#3A3A3A] my-3 w-[calc(100%+2rem)] mx-[-1rem]"></div>

        {/* ✅ Social Networks Section */}
        <div className="p-2">
          <p className="text-lg font-bold">Social Networks</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/Pinterest.png" alt="Pinterest" width={40} height={40} />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/TikTok.png" alt="TikTok" width={40} height={40} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/Facebook.png" alt="Facebook" width={40} height={40} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/Twitter.png" alt="X" width={40} height={40} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/Instagram.png" alt="Instagram" width={40} height={40} />
            </a>
          </div>
        </div>

        {/* 🔹 Separator Line */}
        <div className="h-[1px] bg-[#3A3A3A] my-3 w-[calc(100%+2rem)] mx-[-1rem]"></div>

        {/* ✅ Map View Section */}
        <div className="p-4">
          <p className="text-lg font-bold">Map View</p>
          <div className="mt-6 flex justify-center">
            <Image
              src="/images/Map.png"
              alt="Map View"
              width={500}
              height={300}
              className="rounded-lg w-full max-w-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
