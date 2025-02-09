import { Clock } from "lucide-react"

interface DateTimeProps {
  startDate: Date
  endDate: Date
  timezone?: string
}

export default function DateTime({ startDate, endDate, timezone = "EST" }: DateTimeProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  const [startFormatted, endFormatted] = [formatDate(startDate), formatDate(endDate)]

  return (
    <div className="rounded-lg">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-violet-600 p-4">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-zinc-400 text-text2">Date & Time</h2>
            <p className="text-white text-h5 font-medium">
              {startFormatted} - {endFormatted} {timezone}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

