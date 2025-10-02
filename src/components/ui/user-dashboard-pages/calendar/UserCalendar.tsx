"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEvent, dateData } from "@/data/calendarData";
import EventDetailsModal from "./EventDetailsModal";
import CustomEvent from "./CustomEvent";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";

// Main Calendar Component
const UserCalendar: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [events] = useState<CalendarEvent[]>(dateData);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);
  const [currentView, setCurrentView] = useState<View>(Views.MONTH);
  const [currentDate, setCurrentDate] = useState(new Date());
  // console.log(searchParams.get("mode"));
  useEffect(() => {
    const mode = searchParams.get("mode");

    setCurrentView(
      mode === "week" ? Views.WEEK : mode === "day" ? Views.DAY : Views.MONTH
    );
  }, [searchParams]);

  // Setup localizer
  moment.locale("en-GB");
  const localizer = momentLocalizer(moment);

  // Handle event selection
  const handleSelectEvent = useCallback((event: CalendarEvent) => {
    setSelectedEvent(event);
    setShowModal(true);
  }, []);

  // Handle view change
  const handleViewChange = useCallback((view: View) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("mode", view); // set mode=view
    router.push(`?${params.toString()}`); // update URL

    setCurrentView(view);
  }, []);

  // Handle navigation
  const handleNavigate = useCallback((date: Date) => {
    setCurrentDate(date);
  }, []);

  // Custom toolbar
  const CustomToolbar: React.FC<any> = ({ label, onNavigate, onView }) => {
    const navigate = (action: "PREV" | "NEXT" | "TODAY") => {
      onNavigate(action);
    };

    const viewNamesMap = {
      [Views.MONTH]: "Month",
      [Views.WEEK]: "Week",
      [Views.DAY]: "Day",
    };

    return (
      <div className="flex lg:flex-row flex-col justify-between items-center gap-3 mb-4 ">
        <div className="flex items-center lg:justify-start justify-between space-x-4">
          <h2 className="lg:text-[32px] md:text-xl text-sm font-semibold text-gray-800 me-6">
            {label}
          </h2>
          <button
            onClick={() => navigate("PREV")}
            className=" lg:h-[46px] h-6  w-6 lg:w-[46px] lg:text-2xl text-xs bg-[#F6F7F8] rounded text-[#003877] flex items-center justify-center"
          >
            <IoIosArrowBack />
          </button>

          <button
            onClick={() => navigate("NEXT")}
            className=" lg:h-[46px] h-6  w-6 lg:w-[46px] lg:text-2xl text-xs bg-[#F6F7F8] rounded text-[#003877] flex items-center justify-center"
          >
            <IoIosArrowForward />
          </button>
          <button
            onClick={() => navigate("TODAY")}
            className="ml-4 px-3 py-1 bg-[#003877] text-white rounded hover:bg-blue-600 text-sm hidden md:block"
          >
            Today
          </button>
        </div>

        <div className="flex space-x-1 bg-[#F6F7F8] rounded-lg px-4 py-2 w-full md:w-auto justify-between md:justify-start">
          {Object.entries(viewNamesMap).map(([view, name]) => (
            <button
              key={view}
              onClick={() => onView(view)}
              className={`px-3 py-1 rounded text-sm transition-colors w-full md:w-auto ${
                currentView === view
                  ? "bg-white text-[#003877]"
                  : "bg-[#F6F7F8] text-[#C5D0D0] hover:bg-white hover:text-[#003877] border border-gray-50"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className=" p-1">
      <div style={{ height: "calc(100vh - 155px)", zIndex: 10 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          titleAccessor="title"
          allDayAccessor="allDay"
          resourceAccessor="resource"
          // Views and navigation
          views={[Views.MONTH, Views.WEEK, Views.DAY]}
          view={currentView}
          onView={handleViewChange}
          date={currentDate}
          onNavigate={handleNavigate}
          // Event handling
          onSelectEvent={handleSelectEvent}
          // onSelectSlot={handleSelectSlot}
          selectable={true}
          // Custom components
          components={{
            toolbar: CustomToolbar,
            event: CustomEvent,
          }}
          // Styling
          eventPropGetter={(event: CalendarEvent) => ({
            style: {
              backgroundColor: event.color || "#3174ad",
              borderRadius: "5px",
              opacity: 0.8,
              color: "white",
              border: "0px",
              display: "block",
            },
          })}
          // Time settings
          step={60}
          timeslots={1}
          min={new Date(2025, 0, 1, 8, 0, 0)}
          max={new Date(2025, 0, 1, 18, 0, 0)}
          // Popup settings
          popup={true}
          popupOffset={30}
        />
      </div>

      {/* Event Details Modal */}
      <EventDetailsModal
        event={selectedEvent}
        showModal={showModal}
        setShowModal={setShowModal}
        setSelectedEvent={setSelectedEvent}
      />
    </div>
  );
};

export default UserCalendar;
