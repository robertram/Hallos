import React from "react";
import Button from "@/components/common/Button/Button";
import Image from "next/image";
import { EventDetLocation } from "@/icons";

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
      <div className="hidden sm:block bg-[#171717] text-white shadow-lg border border-[#262626] rounded-xl min-h-[721px] min-w-[378px]">

        {/* ✅ Sold Out Message */}
        <div className="flex flex-col gap-4 p-[20px]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-h5 font-bold text-white leading-[24px] mb-2">
                Sold Out
              </p>
              <p className="text-[#A3A3A3] text-text2">
                This event is sold out and no longer taking registrations.
              </p>
            </div>

            {/* Sold Out Icon */}
            <img
              src="/images/GroupBookTicketIcon.svg"
              alt="Sold Out Icon"
            />
          </div>

          {/* ✅ Centered Booking Button */}
          <div className="flex justify-center items-center w-full mt-2">
            <Button
              type="primary"
              className="w-full bg-gradient-to-r from-[#2343C2] to-[#8E2DE2] text-white rounded-full shadow-md text-lg font-semibold opacity-80"
            >
              <p className="text-white text-[18px] font-semibold leading-[18px] text-center">
                Book Tickets
              </p>
            </Button>
          </div>
        </div>

        {/* 🔹 Separator Line */}
        <hr className="border-[1px] border-[#3A3A3A] border-solid"/>

        {/* ✅ Organizer Section */}
        <div className="p-[20px]">
          <p className="text-[20px] font-bold mb-[16px]">Organizer</p>
          <div className="flex items-center mt-2 justify-between">

            <div className="flex">
              {/* Organizer's Image */}
              <img
                src="/images/GoldRogerProfile2.png"
                alt={organizer.name}
                // width={50}
                // height={'100%'}
                className="rounded-full object-cover shadow-md h-full max-h-[50px]"
              />
              <div className="ml-4">
                <p className="text-white font-semibold text-[18px] mb-[5px]">{organizer.name}</p>
                <div className="flex items-center text-[#A3A3A3] text-sm whitespace-nowrap">
                  {/* Location Icon */}
                  <EventDetLocation className="fill-[#64059E] w-[15px] mr-[6px]" />
                  <p>{organizer.location}</p>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <Button
              type="primary"
              className="w-min h-[43px] ml-2 px-4 bg-gradient-to-r from-[#2343C2] to-[#8E2DE2] text-white rounded-full shadow-md flex justify-center items-center"
            >
              <p className="text-[15px] font-semibold leading-[18px] tracking-[-0.5px]">
                Contact
              </p>
            </Button>
          </div>
        </div>

        {/* 🔹 Separator Line */}
        <hr className="border-[1px] border-[#3A3A3A] border-solid"/>

        {/* ✅ Social Networks Section */}
        <div className="p-[20px]">
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
        <hr className="border-[1px] border-[#3A3A3A] border-solid"/>

        {/* ✅ Map View Section */}
        <div className="p-[20px]">
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
