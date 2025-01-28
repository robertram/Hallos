'use client';

import Image from "next/image";

interface AccountTicketProps {
  title: string;
  date: string;
  location: string;
  tickets: Array<{
    title: string;
    image: string;
    qrCodeUrl: string;
  }>;
};

const formatDate = (date: Date): string => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric"
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(date);
  const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(date);
  
  return `${formattedDate} • ${formattedTime}`;
};

export const AccountTicket = ({ title, date, location, tickets }: AccountTicketProps) => {
  return (
    <article className="bg-glass-gradient text-white border-[1px] border-solid border-white rounded-2xl w-[280px] md:max-w-sm">
      <div className="px-4 py-6">
        <h3 className="text-text2 font-bold">{title}</h3>
        <div className="flex items-center mt-1">
          <Image 
            src="/calendar.svg"
            alt="calendar icon"
            width={20}
            height={20}
          />
            <p className="text-text2 text-[#BEBEBE] mt-1 ml-1">
              {formatDate(new Date(Number(date)))}
            </p>
          </div>
          <div className="flex items-center mt-1">
          <Image 
            src="/location.svg"
            alt="location icon"
            width={20}
            height={20}
          />
          <p className="text-text2 text-[#BEBEBE] mt-1 ml-1">
            {location}
          </p>
        </div>
        
        <div className="border-b-[1px] border-solid border-white my-4"></div>
        
        <div>
          <p className="text-h5 text-[#BEBEBE] mb-2">Your tickets ({tickets.length})</p>
          <div className="grid grid-cols-2 gap-2">
            {tickets.map((ticket, index) => (
              <div key={index} className="relative">
                <Image
                  src={ticket.image}
                  alt={ticket.title}
                  width={120}
                  height={160}
                  className="rounded-lg object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#1E1E1E] rounded-b-lg">
                  <button 
                    className="flex items-center justify-center gap-2 w-full px-2 py-1 text-text2 text-[14px] whitespace-nowrap font-text2"
                    onClick={() => {/* Aquí puedes agregar la función para mostrar el QR */}}
                  >
                    <Image 
                      src="/qr.svg"
                      alt="QR Code icon"
                      width={16}
                      height={16}
                    />
                    See QR Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

