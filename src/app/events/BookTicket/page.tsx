'use client';

import EventDetails from "@/components/common/EventDetails/EventDetails";

export default function EventDetailsPage() {
  const eventData = {
    title: "Blockchain Summit",
    date: "March 15, 2024",
    location: "Sydney, Australia",
    soldOut: true,
    organizer: {
      name: "Gold.D.Roger",
      avatar: "GoldRogerProfile2.png",
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
