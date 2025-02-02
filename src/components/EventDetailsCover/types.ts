export interface EventDetailsCoverProps {
  title: string;
  startDate: string;
  endDate: string;
  location: {
    venue: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  coverImage?: string;
  hideCoverImage?: boolean;
} 