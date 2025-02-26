export const EventDetails = ({ date, time, location }: { date: string; time: string; location: string }) => (
    <div className="my-4">
      <h2 className="text-xl font-bold">Date & Place</h2>
      <p className="text-lg">{date} - {time}</p>
      <p className="text-lg">{location}</p>
    </div>
  );