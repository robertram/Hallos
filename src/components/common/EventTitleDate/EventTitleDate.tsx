import DateTime from "@/components/common/DateTime/DateTime";

interface EventTitleDateProps {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
}

export const EventTitleDate = ({
  title,
  startDate,
  endDate,
  location,
}: EventTitleDateProps) => {
  return (
    <div>
      <h2 className="text-h2">{title}</h2>
      <div className="my-[30px] flex flex-col gap-[20px]">
        <DateTime
          title="Date & Time"
          startDate={new Date(startDate)}
          endDate={new Date(endDate)}
          timezone="EST"
          icon="date"
        />
        <DateTime
          title="Location"
          value={location}
          icon="location"
        />
      </div>
    </div>
  );
}; 