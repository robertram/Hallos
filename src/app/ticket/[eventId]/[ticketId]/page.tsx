import { notFound } from "next/navigation"
import { fullGridEvents } from "@/utils/events"
import { TicketDetails } from "@/components/TicketDetails"

interface PageProps {
  params: Promise<{
    eventId: string
    ticketId: string
  }>
}

export default async function TicketDetailsPage({ params }: PageProps) {
  const resolvedParams = await params; // Await the params promise
  const event = fullGridEvents.find((e) => e.id.toString() === resolvedParams.eventId)

  if (!event) {
    notFound()
  }

  return <TicketDetails event={event!} ticketId={resolvedParams.ticketId} />
}
