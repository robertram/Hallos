import { Calendar, Location } from "@/icons";
import Link from 'next/link';
import moment from "moment-timezone";
import 'moment/locale/es';

interface EventCardProps {
  image: string;
  title: string;
  date?: string;
  location?: string;
  price?: string;
  link?: string
  timezone?: string
};

const formatDate = (timestamp: string): string => {
  const date = new Date(Number(timestamp));

  // Format the weekday, month, day, hour, and minute
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  // Find the position of the second comma and replace it with " • "
  const firstCommaIndex = formattedDate.indexOf(", ");
  const secondCommaIndex = formattedDate.indexOf(", ", firstCommaIndex + 1);

  if (secondCommaIndex !== -1) {
    // Replace the second comma with " • "
    return formattedDate.slice(0, secondCommaIndex) + " • " + formattedDate.slice(secondCommaIndex + 2);
  }

  return formattedDate;
};

export const EventCard = ({ image, title, date, location, price, link, timezone = 'America/Costa_Rica' }: EventCardProps) => {

  const userTimezone = moment.tz.guess();
  moment.locale('es');
  const dayOfWeek = moment.tz(date, timezone).tz(userTimezone).format('ddd').toUpperCase()
  const day = moment.tz(date, timezone).tz(userTimezone).format('DD').toUpperCase()
  const month = moment.tz(date, timezone).tz(userTimezone).format('MMM').toUpperCase()

  return (
    <Link href={link || '#'} className="">
      <article className="bg-[#272727] text-white border border-[#3B3B3B] rounded-2xl w-[280px] md:max-w-sm">
        <div className={`relative  ${!price ? "opacity-80" : ""}`}>
          <img src={image} alt={title} className=" w-full h-56 rounded-t-2xl object-cover" />
          {/* {!date && (
            <span className="absolute top-2.5 right-2.5 bg-neutral-500 text-white text-sm font-normal py-2 px-2.5 rounded-3xl">
              Finished
            </span>
          )} */}
        </div>
        <div className="px-4 py-6">
          <h3 className="text-base font-bold">{title}</h3>
          {date &&
            <div className="flex items-center mt-1">
              <div className="w-[20px] h-[20px]">
                <Calendar className="w-[20px] h-[20px]" />
              </div>
              <p className="text-sm text-[#BEBEBE] mt-1 ml-1">
                {dayOfWeek}, {day}, {month}
              </p>
              {/* <p>{dayOfWeek}</p>
              <p className="text-xl font-bold text-custom-purple-dark">{day}</p>
              <p>{month}</p> */}
            </div>
          }

          {location &&
            <div className="flex items-center mt-1">
              <div className="w-[20px] h-[20px]">
                <Location className="w-[20px] h-[20px]" />
              </div>
              <p className="text-sm text-[#BEBEBE] mt-1 ml-1 flex-wrap">
                {location}
              </p>
            </div>
          }
          {price && (
            <p className="text-sm mt-4">
              from <span className="text-xl font-semibold">${price}</span>
            </p>
          )}
        </div>
      </article>
    </Link>
  );
};
