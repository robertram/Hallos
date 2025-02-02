"use client";

import {
  CalendarIcon,
  MapPinIcon,
  QrCodeIcon,
  CalendarDaysIcon,
  MessageSquareIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Calendar } from "@/icons"
import { Button } from "../components/common/Button/Button";
import Image from "next/image";
import type { Event } from "@/types/event.type";
import Link from "next/link";

interface TicketDetailsProps {
  event: Event;
  ticketId: string;
}

export function TicketDetails({ event, ticketId }: TicketDetailsProps) {
  const ticket = {
    date: "1736428800000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/checkmyticket-20.appspot.com/o/eventImages%2Fd59be41c-9e7d-4daf-b48a-c0830ab31492%2FBanner-da5fc65d-4c8d-4186-8c5b-22d02b0ddae0?alt=media&token=a064e42c-e676-4adf-a78b-5a7b4c216b56", // Usando la imagen proporcionada
    location: "48 West 21st Street New York, NY 10010 United States",
    title: "Everyone no Cover At Taj NYC #1 Urban Night Party",
    description:
      "Feugiat vel accumsan litora at condimentum morbi; lobortis molestie ad. Arcu mi at ridiculus netus nisl",
    contractAddress: "0xD91f55533f86ECeCE07caC060348826370aF9c95",
  };

  return (
    <div className="min-h-screen bg-[#0A0B1E] bg-gradient-to-b from-[#0A0B1E] to-[#070812] text-white">
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
          <div className="flex flex-col rounded-3xl overflow-hidden bg-[#12142B]">
            <div className="flex-grow relative">
              <Image
                src={ticket.image || "/placeholder.svg"}
                alt={ticket.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-2 divide-x divide-white/10">
              <Button
                variant="ghost"
                className="rounded-none h-[72px] w-full bg-black/40 hover:bg-black/60 text-white border-none inline-flex items-center justify-center gap-2 text-base font-normal"
              >
                <QrCodeIcon className="w-5 h-5" />
                <span>See QR Code</span>
              </Button>
              <Button
                variant="ghost"
                className="rounded-none h-[72px] w-full bg-black/40 hover:bg-black/60 text-white border-none inline-flex items-center justify-center gap-2 text-base font-normal"
              >
                <Calendar className="w-5 h-5" />
                <span>Add to calendar</span>
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
                  <CalendarIcon className="w-4 h-4 text-[#4461F2]" />
                </div>
                <span className="text-lg">
                  January 25 · 11pm - January 26 · 4am EST
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-6 h-6 rounded-full bg-[#4461F2]/20 flex items-center justify-center">
                  <MapPinIcon className="w-4 h-4 text-[#4461F2]" />
                </div>
                <span className="text-lg">{ticket.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                className="flex-1 bg-[#4461F2] hover:bg-[#4461F2]/90 text-white h-14 text-base font-normal rounded-2xl gap-2 border border-gray-500 flex items-center justify-center"
                icon={<MessageSquareIcon className="w-4 h-4" />}
              >
                Event Chat
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-black/25 text-white hover:bg-white/5 h-14 text-base font-normal rounded-2xl inline-flex items-center justify-center gap-2 border-gray-500"
                icon={<ArrowRightIcon className="w-4 h-4" />}
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
      </div>
    </div>
  );
}
