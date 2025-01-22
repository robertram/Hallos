import Image from "next/image";
import Button from "@/components/common/Button/Button";
import  CalendarIcon from "@/icons/Calendar";
export default function TicketPage() {
  return (
    <div className="flex justify-center items-center bg-darkBlue min-h-screen px-4 py-8">
      {/* Outer Dark Rectangle */}
      <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-[500px] p-6 flex flex-col justify-between min-h-[500px]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/hallosIcon.png"
            alt="Hallos Icon"
            width={90}
            height={90}
            className="filter brightness-0 invert"
          />
        </div>

        {/* Title */}
        <h1 className="text-white text-2xl font-bold text-center mb-4">Your Ticket Is Ready</h1>

        {/* Ticket Image with Text and Buttons */}
        <div className="bg-gray-800/80 rounded-xl shadow-2xl w-full max-w-[500px] p-6 flex flex-col justify-between min-h-[500px]">
          {/* Personalized Greeting */}
          <p className="text-center text-white text-sm mb-4">
            Hi, <span className="font-bold">Robert Stuart Ramirez Marin</span> <br />
            Your <span className="font-bold">ticket name goes here</span> ticket is ready
          </p>

          {/* Ticket Image with Diagonal Glow Effects */}
          <div className="relative mb-6 flex justify-center">
            {/* Contenedor ajustado a la imagen */}
            <div className="relative w-fit">
              {/* Rectángulos rodeando la imagen */}
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                {/* Rectángulos diagonales */}
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 rotate-45 w-[30%] h-[10%] bg-white opacity-10 blur-sm"></div>
                <div className="absolute -right-10 top-1/2 -translate-y-1/2 -rotate-45 w-[30%] h-[10%] bg-white opacity-10 blur-sm"></div>

                {/* Rectángulos verticales */}
                <div className="absolute left-0 top-0 w-[5%] h-full bg-white opacity-10 blur-sm"></div>
                <div className="absolute right-0 top-0 w-[5%] h-full bg-white opacity-10 blur-sm"></div>

                {/* Rectángulos horizontales */}
                <div className="absolute top-0 left-0 w-full h-[5%] bg-white opacity-10 blur-sm"></div>
                <div className="absolute bottom-0 left-0 w-full h-[5%] bg-white opacity-10 blur-sm"></div>

                {/* Rectángulos en las esquinas */}
                <div className="absolute left-0 top-0 w-[10%] h-[10%] bg-white opacity-10 blur-sm"></div>
                <div className="absolute right-0 top-0 w-[10%] h-[10%] bg-white opacity-10 blur-sm"></div>
                <div className="absolute left-0 bottom-0 w-[10%] h-[10%] bg-white opacity-10 blur-sm"></div>
                <div className="absolute right-0 bottom-0 w-[10%] h-[10%] bg-white opacity-10 blur-sm"></div>
              </div>

              {/* Imagen del ticket */}
              <Image
                src="/images/ticket.png"
                alt="Night Party Ticket"
                width={250}
                height={160}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Buttons below ticket with mt-auto to push them to the bottom */}
          <div className="flex w-full gap-0 mt-auto">
            {/* Go to my Tickets Button */}
            <Button
  type="glass"
  className="flex-1 rounded-none flex items-center gap-4 px-4 py-3 text-white bg-gray-950 hover:bg-gray-800 shadow-md"
>
  <Image
    src="/images/ticketIcon.png"
    alt="Ticket Icon"
    width={20}
    height={20}
    className="inline-block align-middle"
  />
  <span className="text-base leading-none">Go to my Tickets</span>
</Button>


            {/* Open Event Page Button */}
            <Button
  type="glass"
  className="flex-1 rounded-none flex items-center gap-4 px-4 py-3 text-white bg-gray-950 hover:bg-gray-800 shadow-md"
>
  <CalendarIcon className="inline-block align-middle w-5 h-5" />
  <span className="text-base leading-none">Open Event Page</span>
</Button>

          </div>
        </div>

        {/* Date & Place Section with additional margin */}
        <div className="bg-gray-950 text-white p-4 rounded-lg shadow-lg mb-6 mt-4">
          <h2 className="text-lg font-bold mb-2">Date & Place</h2>
          <p className="text-sm flex items-center mb-2">
            <Image
              src="/images/clock.png"
              alt="Clock Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="font-bold">Date & Time: </span>
            January 25 - 11pm - January 26 - 4am EST
          </p>
          <p className="text-sm flex items-center">
            <Image
              src="/images/location.png"
              alt="Location Icon"
              width={16}
              height={16}
              className="mr-2"
            />
            <span className="font-bold">Location: </span>
            48 West 21st Street, New York, NY 10010 United States
          </p>
        </div>

        {/* Order Details Section */}
        <div className="bg-gray-950 text-white p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-lg font-bold mb-4">Order Details</h2>
          <hr className="border-gray-600 mb-2" />
          <div className="flex justify-between mb-2">
            <span>Event Name:</span>
            <span>Urban Night Party</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>01 Ticket:</span>
            <span>$49.99</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Type:</span>
            <span>VIP</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount:</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>$49.99</span>
          </div>
          <hr className="border-gray-600 mb-2" />
          <div className="flex justify-between mt-2 mb-4">
            <span>Total:</span>
            <span className="font-bold text-lg">$49.99</span>
          </div>
          <div className="flex justify-center mt-6">
            <Button type="primary">View on Hallos</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
