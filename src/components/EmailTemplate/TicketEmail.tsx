import React from 'react';
import Image from 'next/image';

interface TicketEmailProps {
  name: string;
  ticketName: string;
  eventName: string;
  date: string;
  location: string;
  ticketType: string;
  price: string;
  discount: string;
  subtotal: string;
  total: string;
}

const TicketEmail: React.FC<TicketEmailProps> = ({
  name = "Robert Stuart Ramirez",
  ticketName ="NIGHT PARTY",
  eventName = "Urban Night Party",
  date="January 25 · 11pm - January 26 · 4am EST",
  location = "48 West 21st Street New York, NY 10010 United States",
  ticketType = "VIP",
  price = "$49.99",
  discount = "$00.00",
  subtotal = "$49.99",
  total = "$49.99",
}) => {
  return (
    <div className="bg-[#D9D9D97D] text-white min-h-screen rounded-xl flex justify-center py-10 px-4 sm:px-8">
      <div className="max-w-lg w-full rounded-3xl overflow-hidden shadow-lg bg-gradient-to-b from-[#1A1B29] to-[#10111D]">
        <div className="p-8 text-center">
          <h2 className="text-xl font-semibold flex justify-center tracking-wide mb-2"><Image src="/LogoHallos.svg" alt='hallos logo' height={50} width={100}/></h2>
          <h1 className="text-3xl font-inter font-bold mb-6">Your Ticket Is Ready</h1>
        
        <div className="rounded-xl w-96 text-center border-[0.91px] border-[#FFFFFF1A] pt-4">
          <p className="mb-6">
            Hi, <span className="font-semibold">{name}</span>
            <br />
            Your <span className="font-bold">{ticketName}</span> ticket is ready
          </p>

          <div className="flex justify-center mb-8">
            <Image
              src="/night_party_ticket.svg"
              alt="Ticket"
              width={200}
              height={400}
              className="w-60 h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex justify-center ">
            <button className="bg-[#1F1F2E] h-12 border-[0.91px] flex flex-row justify-around items-center border-[#FFFFFF1A] w-1/2 rounded-bl-xl text-sm px-6">
            <span>
              <Image alt='goto-ticket-icon' src="/goto_ticket_icon2.svg" height={15} width={15}/>
            </span>
            <span>Go to my Tickets</span>
            </button>
            <button className="bg-[#1F1F2E] h-12 flex flex-row justify-around items-center w-1/2 border-[0.91px] border-[#FFFFFF1A] rounded-br-xl text-sm px-6">
            <span>
              <Image alt='goto-ticket-icon' src="/open_event_icon.svg" height={15} width={15}/>
            </span> 
            <span>Open Event Page</span></button>
          </div>
        </div>

          <div className="text-left mb-8 border-[0.91px] border-[#FFFFFF1A] bg-[#000000]-500 mt-4 rounded-xl pb-4 pr-2">
            <h3 className="text-lg font-semibold mb-4 border-b border-[#FFFFFF1A] h-12 flex flex-row justify-start items-center pl-4 justify-between">Date & Place</h3>
            <div className="h-19 w-full flex flex-row ">
              <div className="w-1/5 h-14 flex justify-center items-center">
                <div className='w-10 h-10 rounded-full border-[0.91px] border-[#FFFFFF1A] flex justify-center items-center'>
                  <Image src="/time_icon.svg" alt="time icon" width={20} height={20} />
                </div>
              </div>
              <div className="w-4/5 flex flex-col justify-center">
                <p className="font-inter text-gray-400 text-xs h-1/2 w-full flex items-center justify-start mb-[-10px] pl-2">Date & Time</p>
                <p className="text-xs text-gray-400 h-1/2 w-full items-center flex pl-2">{date}</p>
              </div>
            </div>

            <div className="h-19 w-full flex flex-row">
              <div className="w-1/5 h-14 flex justify-center items-center">
                <div className='w-10 h-10 rounded-full border-[0.91px] border-[#FFFFFF1A] flex justify-center items-center'>
                  <Image src="/location_icon.svg" alt="location icon" width={20} height={20} />
                </div>
              </div>
              <div className="w-4/5 flex flex-col justify-center">
                <p className="font-inter text-gray-400 text-xs h-1/2 w-full flex items-center mb-[-5px]  pl-2">Taj II</p>
                <p className="text-xs text-gray-400 h-1/2 w-full items-center flex pl-2">{location}</p>
              </div>
            </div>
          </div>

          <div className="text-left w-full border-[0.91px] border-[#FFFFFF1A] bg-[#000000]-500 mt-4 rounded-xl">
            <h3 className="text-lg h-14 flex justify-start border-b-[0.91px] border-b-[#FFFFFF1A] items-center pl-4 w-full rounded-tr-xl  rounded-tl-xl font-semibold mb-4">Order Details</h3>
            <div className="flex h-8 w-full justify-between mb-2">
              <span className="w-1/2  h-8 flex justify-start items-center pl-4">Event Name</span>
              <span className="w-1/2  h-8 flex justify-end items-center pr-4">{eventName}</span>
            </div>
            <div className="flex h-8 w-full justify-between mb-2">
              <span className="w-1/2  h-8 flex justify-start items-center pl-4">01 Ticket</span>
              <span className="w-1/2  h-8 flex justify-end items-center pr-4">{price}</span>
            </div>
            <div className="flex h-8 w-full justify-between mb-2">
              <span className="w-1/2  h-8 flex justify-start items-center pl-4">Type</span>
              <span className="w-1/2  h-8 flex justify-end items-center pr-4">{ticketType}</span>
            </div>
            <div className="flex h-8 w-full justify-between mb-2">
              <span className="w-1/2  h-8 flex justify-start items-center pl-4">Discount</span>
              <span className="w-1/2  h-8 flex justify-end items-center pr-4">{discount}</span>
            </div>
            <div className="flex h-8 w-full justify-between mb-2">
              <span className="w-1/2  h-8 flex justify-start items-center pl-4">Subtotal</span>
              <span className="w-1/2  h-8 flex justify-end items-center pr-4">{subtotal}</span>
            </div>
            <hr className="border-[0.91px] border-[#FFFFFF1A]"/>
            <div className="flex h-8 w-full justify-between mb-2 mt-3">
              <span className="w-1/2  h-8 flex justify-start items-center pl-4">Total</span>
              <span className="w-1/2  h-8 flex justify-end items-center pr-4">{total}</span>
            </div>
          </div>
        </div>

        <div className="view-on-hallo-btn mb-8">
          <a href="#" className="text-white font-semibold text-sm">
            View on Hallos
          </a>
        </div>
      </div>
    </div>
  );
};

export default TicketEmail;





// pages/ticket.tsx
// import React from 'react';
// import { Header } from './Header';
// import { TicketInfo } from './TicketInfo';
// import { OrderDetails } from './OrderDetails';
// import { Footer } from './Footer';
// import { DateAndPlace } from './DateAndPlace';

// const TicketEmail = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <TicketInfo />
//       <DateAndPlace />
//       <OrderDetails />
//       <Footer />
//     </div>
//   );
// };

// export default TicketEmail;


// import {Header, EventDetails, OrderDetails} from './';


// interface TicketEmailProps {
//   name: string;
//   ticketName: string;
//   date: string;
//   time: string;
//   location: string;
//   eventName: string;
//   ticketType: string;
//   price: string;
// }

// export const TicketEmail: React.FC<TicketEmailProps> = ({
//   name,
//   ticketName,
//   date,
//   time,
//   location,
//   eventName,
//   ticketType,
//   price,
// }) => (
//   <Header name={name} ticketName={ticketName}>
//     <EventDetails date={date} time={time} location={location} />
//     <OrderDetails eventName={eventName} ticketType={ticketType} price={price} />
//   </Header>
// );