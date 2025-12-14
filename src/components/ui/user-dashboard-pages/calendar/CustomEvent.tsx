import { CalendarEvent } from "@/data/calendarData";
import moment from "moment";

const CustomEvent: React.FC<{ event: CalendarEvent }> = ({ event }) => {
  const bgColor = event.color || "#3174ad";
  const time = moment(event.start).format("HH:mm");

  return (
    <div className="flex items-center gap-1.5 text-xs sm:text-sm">
      <div
        style={{ backgroundColor: bgColor }}
        className="min-w-[8px] h-2.5 w-2.5 rounded-full"
      />
      <span className="text-gray-500 font-medium">{time}</span>
      <span className="text-gray-700 font-medium truncate">{event.title}</span>
    </div>
  );
};

export default CustomEvent;
