import { CalendarEvent } from "@/data/calendarData";

const CustomEvent: React.FC<{ event: CalendarEvent }> = ({ event }) => {
  const bgColor = event.color || "#3174ad";

  return (
    <div
      className={`rounded-sm text-white px-1.5 py-0.5 text-sm `}
      style={{
        borderColor: bgColor,
        backgroundColor: `${bgColor}33`, 
      }}
    >
      {event.title}
    </div>
  );
}; 

export default CustomEvent;