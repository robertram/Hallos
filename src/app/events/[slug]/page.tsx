'use client';

import { useParams } from "next/navigation";
import EventDetails from "@/components/common/EventDetails/EventDetails";

export default function EventDetailsPage() {
  const { slug } = useParams() as { slug?: string };
  const safeSlug = slug ?? "";

  const formattedSlug = Array.isArray(safeSlug) ? safeSlug[0] : safeSlug;
  const eventTitle = formattedSlug.replace("-", " ").toUpperCase();

  // Simulación de datos de evento
  const eventData = {
    title: eventTitle,
    date: "March 15, 2024",
    location: "Sydney, Australia",
    soldOut: formattedSlug === "exclusive-tech-conference",
    organizer: {
      name: "Gold.D.Roger",
      avatar: "https://i.imgur.com/O0YvQzP.png",
      location: "Sydney, Australia"
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-white">Event Details</h1>
      <EventDetails {...eventData} />
    </div>
  );
}
