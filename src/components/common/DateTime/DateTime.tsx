import { Clock } from "@/icons"
import { EventDetLocation } from "@/icons"

interface DateTimeProps {
  title: string
  startDate?: Date
  endDate?: Date
  timezone?: string
  icon: "location" | "date"
  value?: string
}

export default function DateTime({ title, startDate, endDate, timezone = "EST", icon, value }: DateTimeProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  const startFormatted = startDate ? formatDate(startDate) : '';
  const endFormatted = endDate ? formatDate(endDate) : '';

  return (
    <div className="rounded-lg">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-gradient-to-b from-gray-900 to-gray-900/10 opacity-12 p-4 border-[#FFFFFF]/10 border-[1px] border-solid">
            {icon === "date" ? (
              <Clock className="h-6 w-6 text-white" />
            ) : (
              <EventDetLocation />
            )}
          </div>
          <div>
            <h2 className="text-zinc-400 text-text2">{title}</h2>
            <p className="text-white text-h5 font-medium">
              {value ? value : `${startFormatted} - ${endFormatted} ${timezone}`}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

