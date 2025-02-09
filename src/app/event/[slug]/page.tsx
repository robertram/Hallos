import { notFound } from "next/navigation"
import EventDetails from "@/components/common/EventDetails/EventDetails"
import { EventTicket } from "@/components/common/EventTicket/EventTicket";
import { Accordion } from "@/components/ui/Accordion/accordion";
import { FAQs } from "@/utils/faqs";
import DateTime from "@/components/common/DateTime/DateTime";

interface PageProps {
  params: Promise<{
    slug: string
  }>;
}

export default function EventDetailsPage({ params }: PageProps) {
  // const event = fullGridEvents.find((e) => e.id.toString() === params.eventId)

  // if (!event) {
  //   notFound()
  // }

  // return <TicketDetails event={event!} ticketId={params.ticketId} />

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

  const tickets = [
    {
      image: "https://37cab6b984fd76206e94c796d0b1a00c.ipfscdn.io/ipfs/bafybeic3mambq274fafn2o4hcb4swdzm7ntezh2zlfoa644sxfll6ifb54/1.png",
      name: "Name of the ticket",
      tooltipInfo: "This ticket is a digital collectible"
    },
    {
      image: "https://example.com/ticket2.png",
      name: "VIP Ticket",
      tooltipInfo: "Access to VIP lounge"
    },
    {
      image: "https://example.com/ticket3.png",
      name: "Early Bird Ticket",
      tooltipInfo: "Discounted price for early purchase"
    }
    ,
    {
      image: "https://example.com/ticket3.png",
      name: "Early Bird Ticket",
      tooltipInfo: "Discounted price for early purchase"
    }
  ];
  const startDate = new Date("2025-01-25T23:00:00")
  const endDate = new Date("2025-01-26T04:00:00")

  return (
    <div className="mx-auto p-6">
      <div className="w-full">
        <img
          src={'https://firebasestorage.googleapis.com/v0/b/hallos-dev.appspot.com/o/EventBanner.png?alt=media&token=50b477d6-4f7a-4fb2-b155-37ab1eb5d30f'}
          className="rounded-[20px] w-full h-full object-cover mb-[40px]"
        />
        <div className="flex justify-between">
          <div>

            <div>
              <h2 className="text-h2">
                Everyone no Cover At Taj NYC #1 Urban Night Party
              </h2>
              <div className="my-[30px] flex flex-col gap-[20px]">
                <DateTime startDate={startDate} endDate={endDate} timezone="EST" />
                <DateTime startDate={startDate} endDate={endDate} timezone="EST" />
              </div>
            </div>


            <h3 className="text-h3 mb-[20px]">Description</h3>
            <p className="text-text1 opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repudiandae rerum esse, ea exercitationem perferendis neque quaerat est quos possimus officia et officiis ipsam eaque quisquam? Autem fuga magnam temporibus!
            </p>

            <div className="mt-[40px]">
              <h3 className="text-h3 mb-[20px]">Tickets Available</h3>
              <div className="flex flex-wrap gap-[20px]">
                {tickets.map((ticket, index) => (
                  <EventTicket
                    key={index}
                    image={ticket.image}
                    name={ticket.name}
                    tooltipInfo={ticket.tooltipInfo}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="ml-[50px]">
            <EventDetails {...eventData} />
          </div>
        </div>

        <div className="mx-auto mt-[45px]">
          <h3 className="text-h3">Frequently Asked Questions</h3>

          <Accordion faqs={FAQs} />
        </div>
      </div>
    </div>
  );
}
