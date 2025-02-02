import { notFound } from "next/navigation"
import { fullGridEvents } from "@/utils/events"
import { TicketDetails } from "@/components/TicketDetails"

interface PageProps {
  params: {
    eventId: string
    ticketId: string
  }
}

export default function TicketDetailsPage({ params }: PageProps) {

  const event = fullGridEvents.find((e) => e.id.toString() === params.eventId)

  if (!event) {
    notFound()
  }

  return <TicketDetails event={event!} ticketId={params.ticketId} />
}
