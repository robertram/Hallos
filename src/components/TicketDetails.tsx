"use client";

import { Calendar2, Location2 } from "@/icons";
import { Calendar } from "@/icons";
import { Button } from "../components/common/Button/Button";
import Image from "next/image";
import type { Event } from "@/types/event.type";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PushChat } from "./PushChat";
import { useState } from "react";

interface TicketDetailsProps {
  event: Event;
  ticketId: string;
}

export function TicketDetails({ event, ticketId }: TicketDetailsProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const ticket = {
    date: "1736428800000",
    image: "https://firebasestorage.googleapis.com/v0/b/checkmyticket-20.appspot.com/o/eventImages%2Fd59be41c-9e7d-4daf-b48a-c0830ab31492%2FBanner-da5fc65d-4c8d-4186-8c5b-22d02b0ddae0?alt=media&token=a064e42c-e676-4adf-a78b-5a7b4c216b56", // Usando la imagen proporcionada
    location: "48 West 21st Street New York, NY 10010 United States",
    title: "Everyone no Cover At Taj NYC #1 Urban Night Party",
    description:
      "Feugiat vel accumsan litora at condimentum morbi; lobortis molestie ad. Arcu mi at ridiculus netus nisl",
    contractAddress: "0xD91f55533f86ECeCE07caC060348826370aF9c95",
  };

  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-12">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <span>-</span>
          <Link href="/profile" className="hover:text-gray-400">
            My profile
          </Link>
          <span>-</span>
          <span>Tickets</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Ticket Image Card */}
          <div className="flex flex-col rounded-3xl overflow-hidden bg-[#12142B] border border-gray-800">
            <div className="flex-grow relative">
              <Image
                src={ticket?.image || "/placeholder.svg"}
                alt={ticket?.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex w-full border-t border-gray-800">
              <Button
                type="glass"
                icon="QrCode"
                className="flex-1 rounded-none h-[72px] w-full bg-black/40 hover:bg-black/60 text-white border-t-none border-b-none border-l-none border-r border-b-gray-800 inline-flex items-center justify-center gap-2 text-base font-normal"
              >
                See QR Code
              </Button>
              <Button
                type="glass"
                icon="Calendar"
                className="flex-1 rounded-none h-[72px] w-full bg-black/40 hover:bg-black/60 text-white  border-none inline-flex items-center justify-center gap-2 text-base font-normal"
              >
                Add to calendar
              </Button>
            </div>
          </div>

          {/* Right Column - Event Details */}
          <div className="space-y-8 pt-2">
            {/* Organizer */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
                <Image
                  src="/placeholder.svg"
                  alt="Organizer"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <span className="font-medium text-xl">Gold.D.Roger</span>
            </div>

            {/* Event Title */}
            <h1 className="text-5xl font-bold leading-[1.1] tracking-[-0.02em]">
              {ticket.title}
            </h1>

            {/* Date & Location */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-6 h-6 rounded-full bg-[#4461F2]/20 flex items-center justify-center">
                  <Calendar2 />
                </div>
                <span className="text-lg">
                  January 25 · 11pm - January 26 · 4am EST
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-6 h-6 rounded-full bg-[#4461F2]/20 flex items-center justify-center">
                  <Location2 />
                </div>
                <span className="text-lg">{ticket.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Dialog open={isDialogOpen} >
                <DialogTrigger asChild>
                  <Button
                    className="bg-gradient-to-r from-[#1A82FE] to-[#A14BFC] text-white h-14 text-base font-normal rounded-2xl gap-2 border border-gray-500 flex items-center justify-center"
                    icon="Chat"
                    onClick={() => {
                      setIsDialogOpen(true);
                    }}
                  >
                    Event Chat
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-none h-[70%] w-[80%] bg-black border-gray-500 flex flex-col" hideCloseButton>
                  <DialogHeader className="flex-none">
                    <DialogTitle>Event Chat</DialogTitle>
                    <DialogDescription>
                      Join the conversation about the event here.
                    </DialogDescription>
                  </DialogHeader>
                  {/* Add chat input or other content here */}

                  <div className="flex-grow h-full">
                    <PushChat />
                  </div>

                  <DialogFooter className="flex-none">
                    <Button
                      className="w-full h-min bg-pink-500"
                      onClick={() => {
                        setIsDialogOpen(false);
                      }}
                    >
                      Close
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button
                type="glass"
                icon="Swap" // Asumiendo que tienes un ícono "transfer" en tu objeto Icons
                className=" !rounded-full bg-black/20 hover:bg-black/30 border border-white/10 !px-6 !py-4 flex items-center justify-center gap-3 transition-all"
                onClick={() => {
                  // Manejar la transferencia del ticket
                  console.log("Transfer ticket clicked");
                }}
              >
                Transfer Ticket
              </Button>
            </div>

            {/* Ticket Details */}
            <div className="space-y-6 pt-8">
              <h2 className="text-2xl font-semibold">Ticket Details</h2>

              <div className="space-y-2">
                <h3 className="text-base font-medium">Contract</h3>
                <div className="bg-[#12142B] px-4 py-3 rounded-xl">
                  <p className="text-gray-400 font-mono text-sm">
                    {ticket.contractAddress}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-medium">Description</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {ticket.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto pt-[25px]">
          <div className="rounded-2xl overflow-hidden border border-white/20">
            <div className="bg-gradient-to-r from-[#1A82FE] to-[#A14BFC] px-[20px] py-[10px]">
              <h2 className="text-base font-medium text-white">
                Exclusive Content for ticket owners
              </h2>
            </div>
            <div className="bg-gradient-to-b from-[#1A82FE]/30 to-[#A14BFC]/30 backdrop-blur-sm p-6">
              <p className="text-gray-400 leading-relaxed">
                Curabitur interdum pulvinar conubia aliquet mus. Eleifend lorem
                laoreet litora nam aenean nec. Accumsan feugiat sollicitudin ac
                non sodales maximus dictum. Eget ad sociosqu lectus hendrerit erat
                proin? Quisque commodo pharetra habitant ultricies imperdiet eget
                felis. Aliquet ipsum ad rhoncus ridiculus elementum laoreet.
                Turpis elementum gravida vivamus rutrum orci; taciti ultrices
                lobortis sem. Mi aenean vitae turpis egestas potenti libero
                efficitur. Torquent ad suspendisse tempus imperdiet sociosqu.
                Lacinia nunc varius suscipit viverra mi ac cubilia consectetur.
              </p>
            </div>
          </div>
        </div>




      </div>

    </div>
  );
}
