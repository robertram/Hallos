import Button from "@/components/common/Button/Button";
import { EventCard } from "@/components/common/EventCard/EventCard";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import { AccountTicket } from "@/components/common/AccountTicket/AccountTicket";
import { fullGridEvents } from "@/utils/events";
//oneEvent

export default function Home() {
  const events = fullGridEvents;

  return (
    <div className="flex flex-col items-center px-[15px]">

      <h1 className="text-h2 mb-[33px]">Explore events</h1>

      <SearchBar
        type="secondary"
        placeholder="Search event"
        categoryOptions={[
          'Music',
          'Blockchain',
          'Sports'
        ]}
      />

      <div className="mt-[50px] w-full">
      <AccountTicket 
          title="Everyone no Cover At Taj NYC #1 Urban Night Party"
          date="1711051200000"
          location="21st Street New York, United States"
          tickets={[
            {
              title: "NIGHT PARTY Red",
              image: "/nightParty1.png" 
            },
            {
              title: "NIGHT PARTY Yellow",
              image: "/nightParty2.png"
            }
          ]}
        />
        
        <div className="flex justify-between mb-[30px] w-full">
          <h2 className="text-h3 !my-auto">Upcoming events</h2>

          <div>
            <Button type="glass" icon="Filter">All filters</Button>
          </div>
        </div>

        <div className="flex flex-wrap">
          {events.map((event, index) => (
            <div className="p-2" key={index}>
              <EventCard
                date={event.date}
                image={event.image}
                location={event.location}
                price={event.price}
                title={event.title}
                link={event.slug ? `event/${event.slug}` : undefined}
              />
            </div>
          ))}
        </div>

        <div className="text-center my-[70px]">
          <p className="text-button1 mb-[15px]">End of results</p>

          <Button type="light">View past events</Button>
        </div>

      </div>

    </div>
  );
}
