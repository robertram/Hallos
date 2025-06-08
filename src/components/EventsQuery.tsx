'use client';

import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useState, useEffect } from 'react';
import { EventCard } from '@/components/common/EventCard/EventCard';

interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  category: string;
  isFeatured: boolean;
  image: string;
  bannerImage: string
  price?: string;
  slug?: string;
}

const categories = [
  "education",
  "music",
  "concert",
  "theater",
  "sports",
  "festival",
] as const;

const checkIsAvailableEvent = (event: Event) => {
  const now = new Date();
  const startDate = new Date(event.startDate);
  return startDate > now;
};

const checkIsPastEvent = (event: Event) => {
  const now = new Date();
  const endDate = new Date(event.endDate);
  return endDate < now;
};

export default function EventsQuery() {
  const [availableEvents, setAvailableEvents] = useState<Event[]>([]);
  const [oldEvents, setOldEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<{ [key: string]: Event[] }>({});
  const [featuredEvents, setFeaturedEvents] = useState<Event[]>([]);

  const { isPending, error, data: events } = useQuery<Event[]>({
    queryKey: ['events'],
    queryFn: async () => {
      const eventsCollection = collection(db, 'events');
      const eventsSnapshot = await getDocs(eventsCollection);
      return eventsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Event));
    },
  });

  console.log('events', events)

  useEffect(() => {
    if (events) {
      const newFilteredEvents: { [key: string]: Event[] } = {};

      categories.forEach((category) => {
        newFilteredEvents[category] = events
          .filter((item) => checkIsAvailableEvent(item) && item.category === category)
          .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
      });

      const availableEvents = events
        .filter((item) => checkIsAvailableEvent(item) && !item.isFeatured)
        .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

      const featuredEvents = events
        .filter((item) => item.isFeatured)
        .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

      const pastEvents = events
        .filter((item) => checkIsPastEvent(item))
        .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
        .slice(0, 4);

      setFeaturedEvents(featuredEvents);
      setAvailableEvents(availableEvents);
      setOldEvents(pastEvents);
      setFilteredEvents(newFilteredEvents);
    }
  }, [events]);

  if (isPending) return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
  );

  if (error) return (
    <div className="p-4 text-red-500">
      An error has occurred: {error.message}
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Featured Events Section */}
      {featuredEvents.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Featured Events</h2>
          <div className="flex flex-wrap gap-3">
            {featuredEvents.map((event) => (
              <div key={event.id}>
                <EventCard
                  date={event.startDate}
                  image={event.bannerImage}
                  location={event.location}
                  price={event.price}
                  title={event.title}
                  //link={event.slug ? `event/${event.slug}` : undefined}
                  link={'/event/vueltosUnColocho'}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Available Events Section */}
      {availableEvents.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          <div className="flex flex-wrap gap-3">
            {availableEvents.map((event) => (
              <div key={event.id}>
                <EventCard
                  date={event.startDate}
                  image={event.bannerImage}
                  location={event.location}
                  price={event.price}
                  title={event.title}
                  link={event.slug ? `event/${event.slug}` : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Past Events Section */}
      {oldEvents.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Past Events</h2>
          <div className="flex flex-wrap gap-3">
            {oldEvents.map((event) => (
              <div className="" key={event.id}>
                <EventCard
                  date={event.startDate}
                  image={event.bannerImage}
                  location={event.location}
                  title={event.title}
                  link={event.slug ? `event/${event.slug}` : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 