import Image from 'next/image';
import { EventDetailsCoverProps } from './types';
import { formatEventDate } from '@/utils/dateFormatter';
import { Calendar, Location } from '@/icons';

export const EventDetailsCover = ({
  title,
  startDate,
  endDate,
  location,
  coverImage,
  hideCoverImage = false
}: EventDetailsCoverProps) => {
  return (
    <div className="flex flex-col w-full">
      {/* Cover Image */}
      {!hideCoverImage && coverImage && (
        <div className="relative w-full h-[240px] rounded-t-lg overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Event Details */}
      <div className="bg-background p-6 rounded-b-lg">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        
        {/* Date and Time */}
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {formatEventDate(startDate, endDate)}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-start gap-2">
          <Location className="w-5 h-5 mt-1 text-muted-foreground" />
          <div className="flex flex-col">
            <span className="text-sm font-medium">{location.venue}</span>
            <span className="text-sm text-muted-foreground">
              {location.address}
            </span>
            <span className="text-sm text-muted-foreground">
              {`${location.city}, ${location.state} ${location.zipCode}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}; 