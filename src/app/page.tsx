import Button from "@/components/common/Button/Button";
import { EventCard } from "@/components/common/EventCard/EventCard";
import { EventTicket } from "@/components/common/EventTicket/EventTicket"; // Importamos el componente EventTicket
import SearchBar from "@/components/common/SearchBar/SearchBar";
import { AccountTicket } from "@/components/common/AccountTicket/AccountTicket";
import { Accordion } from "@/components/ui/Accordion/accordion";
import { fullGridEvents } from "@/utils/events";
import { FAQs } from "@/utils/faqs";
import { PurchaseSuccess } from "@/components/modal/PurchaseSuccess";
import { Modal } from "@/components/modal/Modal";
import { PurchaseLoading } from "@/components/modal/PurchaseLoading";
import ExampleQuery from "@/components/ExampleQuery";
import EventsQuery from "@/components/EventsQuery";
//oneEvent

export default function Home() {
  const events = fullGridEvents;

  // Datos del ticket
  const ticketData = {
    name: "Name of the ticket",
    image: "https://google.com/testimage.png", // Asegúrate de que la imagen esté disponible
    tooltipInfo: "This ticket is a digital collectible", // Tooltip agregado
  };


  return (
    <div className="flex flex-col items-center px-[15px]">

      {/* Header */}
      <h1 className="text-h2 mb-[33px]">Explore events</h1>

      {/* Search Bar */}
      <SearchBar
        type="secondary"
        placeholder="Search event"
        categoryOptions={["Music", "Blockchain", "Sports"]}
      />

      {/* Upcoming Events Section */}
      <div className="mt-[50px] w-full">
        <div className="flex justify-between mb-[30px] w-full">
          <h2 className="text-h3 !my-auto">Upcoming events</h2>

          <div>
            <Button type="glass" icon="Filter">
              All filters
            </Button>
          </div>
        </div>

        {/* Event Cards */}
        {/* <div className="flex flex-wrap">
          {events.map((event, index) => (
            <div className="p-2" key={index}>
              <EventCard
                // date={event.date}
                image={event.image}
                location={event.location}
                price={event.price}
                title={event.title}
                link={event.slug ? `event/${event.slug}` : undefined}
              />
            </div>
          ))}
        </div> */}
        <EventsQuery />

        <div className="text-center my-[70px]">
          <p className="text-button1 mb-[15px]">End of results</p>

          <Button type="light">View past events</Button>
        </div>
      </div>

      <Accordion faqs={FAQs}/>
      <Modal>
        <PurchaseSuccess />
      </Modal>
      <PurchaseLoading />

      <Accordion faqs={FAQs} />

      {/* <ExampleQuery /> */}
    </div>
  );
}
